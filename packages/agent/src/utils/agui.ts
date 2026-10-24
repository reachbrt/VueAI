import type {
  AgentMessage,
  AgentPart,
  AgentRunState,
  AgUiEvent,
  TextPart,
  ToolPart
} from '../types';

export function createAgentState(): AgentRunState {
  return {
    status: 'idle',
    messages: [],
    sharedState: {},
    seq: 1
  };
}

function nextId(state: AgentRunState, prefix: string): { id: string; state: AgentRunState } {
  const id = `${prefix}_${state.seq}`;
  return { id, state: { ...state, seq: state.seq + 1 } };
}

function withMessages(state: AgentRunState, messages: AgentMessage[]): AgentRunState {
  return { ...state, messages };
}

function ensureAssistant(state: AgentRunState): { state: AgentRunState; index: number } {
  const messages = state.messages.slice();
  const last = messages[messages.length - 1];
  if (last && last.role === 'assistant') {
    return { state, index: messages.length - 1 };
  }
  const minted = nextId(state, 'm');
  messages.push({
    id: minted.id,
    role: 'assistant',
    parts: [],
    createdAt: Date.now()
  });
  return { state: withMessages(minted.state, messages), index: messages.length - 1 };
}

function mapAssistantParts(
  state: AgentRunState,
  mapper: (parts: AgentPart[]) => AgentPart[]
): AgentRunState {
  const ensured = ensureAssistant(state);
  const messages = ensured.state.messages.slice();
  const current = messages[ensured.index];
  messages[ensured.index] = { ...current, parts: mapper(current.parts) };
  return withMessages(ensured.state, messages);
}

function parseArgs(argsText: string): Record<string, unknown> | undefined {
  const trimmed = argsText.trim();
  if (!trimmed) return undefined;
  try {
    const value = JSON.parse(trimmed) as unknown;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return value as Record<string, unknown>;
    }
  } catch {
    return undefined;
  }
  return undefined;
}

function patchTool(parts: AgentPart[], id: string, patch: (tool: ToolPart) => ToolPart): AgentPart[] {
  return parts.map((part) => (part.type === 'tool' && part.id === id ? patch(part) : part));
}

export function applyAgUiEvent(state: AgentRunState, event: AgUiEvent): AgentRunState {
  switch (event.type) {
    case 'RUN_STARTED': {
      const base = { ...state, status: 'running' as const, error: undefined };
      const minted = nextId(base, 'm');
      return withMessages(minted.state, [
        ...base.messages,
        { id: minted.id, role: 'assistant', parts: [], createdAt: Date.now() }
      ]);
    }
    case 'TEXT_MESSAGE_CONTENT': {
      return mapAssistantParts({ ...state, status: state.status === 'idle' ? 'running' : state.status }, (parts) => {
        const last = parts[parts.length - 1];
        if (last && last.type === 'text') {
          const text: TextPart = { type: 'text', text: last.text + event.delta };
          return [...parts.slice(0, -1), text];
        }
        return [...parts, { type: 'text', text: event.delta }];
      });
    }
    case 'REASONING_MESSAGE_CONTENT': {
      return mapAssistantParts(state, (parts) => {
        const open = [...parts].reverse().find((part) => part.type === 'reasoning' && !part.done);
        if (!open || open.type !== 'reasoning') {
          return [...parts, { type: 'reasoning', text: event.delta, done: false }];
        }
        return parts.map((part) => (
          part === open ? { ...open, text: open.text + event.delta } : part
        ));
      });
    }
    case 'REASONING_END': {
      return mapAssistantParts(state, (parts) => parts.map((part) => (
        part.type === 'reasoning' && !part.done ? { ...part, done: true } : part
      )));
    }
    case 'TOOL_CALL_START': {
      return mapAssistantParts({ ...state, status: 'running' }, (parts) => [
        ...parts,
        { type: 'tool', id: event.id, name: event.name, argsText: '', status: 'running' }
      ]);
    }
    case 'TOOL_CALL_ARGS': {
      return mapAssistantParts(state, (parts) => patchTool(parts, event.id, (tool) => {
        const argsText = tool.argsText + event.delta;
        return { ...tool, argsText, args: parseArgs(argsText) ?? tool.args };
      }));
    }
    case 'TOOL_CALL_END': {
      return mapAssistantParts(state, (parts) => patchTool(parts, event.id, (tool) => ({
        ...tool,
        status: 'done',
        args: parseArgs(tool.argsText) ?? tool.args,
        result: event.result !== undefined ? event.result : tool.result
      })));
    }
    case 'APPROVAL_REQUEST': {
      const next = mapAssistantParts(state, (parts) => [
        ...parts,
        {
          type: 'approval',
          id: event.id,
          title: event.title,
          detail: event.detail,
          status: 'pending'
        }
      ]);
      return { ...next, status: 'awaiting-approval' };
    }
    case 'UI': {
      return mapAssistantParts(state, (parts) => [
        ...parts,
        { type: 'ui', name: event.name, props: event.props ?? {} }
      ]);
    }
    case 'SOURCES': {
      return mapAssistantParts(state, (parts) => {
        const rest = parts.filter((part) => part.type !== 'sources');
        return [...rest, { type: 'sources', items: event.items }];
      });
    }
    case 'PLAN': {
      return mapAssistantParts(state, (parts) => {
        const rest = parts.filter((part) => part.type !== 'plan');
        return [...rest, { type: 'plan', title: event.title, steps: event.steps }];
      });
    }
    case 'PLAN_STEP': {
      return mapAssistantParts(state, (parts) => parts.map((part) => {
        if (part.type !== 'plan') return part;
        return {
          ...part,
          steps: part.steps.map((step) => (
            step.id === event.id ? { ...step, status: event.status } : step
          ))
        };
      }));
    }
    case 'SUGGESTIONS': {
      return mapAssistantParts(state, (parts) => {
        const rest = parts.filter((part) => part.type !== 'suggestions');
        return [...rest, { type: 'suggestions', items: event.items }];
      });
    }
    case 'STATE_SNAPSHOT':
      return { ...state, sharedState: { ...event.snapshot } };
    case 'STATE_DELTA':
      return { ...state, sharedState: { ...state.sharedState, ...event.delta } };
    case 'RUN_ERROR':
      return { ...state, status: 'error', error: event.message };
    case 'RUN_FINISHED': {
      const pending = state.messages.some((message) => (
        message.parts.some((part) => part.type === 'approval' && part.status === 'pending')
      ));
      return { ...state, status: pending || state.status === 'awaiting-approval' ? 'awaiting-approval' : 'complete' };
    }
    default:
      return state;
  }
}

export function userMessage(text: string, seq: number): { message: AgentMessage; seq: number } {
  return {
    message: {
      id: `u_${seq}`,
      role: 'user',
      parts: [{ type: 'text', text }],
      createdAt: Date.now()
    },
    seq: seq + 1
  };
}
