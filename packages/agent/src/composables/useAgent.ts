import { ref, type Ref } from 'vue';
import type {
  AgentMessage,
  AgentRunState,
  AgentStatus,
  AgentToolHandler,
  AgUiEvent
} from '../types';
import { applyAgUiEvent, createAgentState, userMessage } from '../utils/agui';

export interface UseAgentReturn {
  messages: Ref<AgentMessage[]>;
  status: Ref<AgentStatus>;
  error: Ref<string | null>;
  sharedState: Ref<Record<string, unknown>>;
  apply: (event: AgUiEvent) => void;
  play: (events: AgUiEvent[], options?: { paceMs?: number }) => Promise<void>;
  addUserMessage: (text: string) => void;
  registerTool: (name: string, handler: AgentToolHandler) => void;
  resolveApproval: (id: string, decision: 'approved' | 'rejected') => void;
  reset: () => void;
  stop: () => void;
}

function snapshotOf(
  status: AgentStatus,
  messages: AgentMessage[],
  sharedState: Record<string, unknown>,
  error: string | null,
  seq: number
): AgentRunState {
  return {
    status,
    messages,
    sharedState,
    error: error ?? undefined,
    seq
  };
}

export function useAgent(): UseAgentReturn {
  const initial = createAgentState();
  const messages = ref<AgentMessage[]>(initial.messages);
  const status = ref<AgentStatus>(initial.status);
  const error = ref<string | null>(null);
  const sharedState = ref<Record<string, unknown>>({});
  const seq = ref(initial.seq);
  const tools = new Map<string, AgentToolHandler>();
  let stopped = false;
  let playToken = 0;

  function commit(next: AgentRunState) {
    messages.value = next.messages;
    status.value = next.status;
    error.value = next.error ?? null;
    sharedState.value = next.sharedState;
    seq.value = next.seq;
  }

  function current(): AgentRunState {
    return snapshotOf(status.value, messages.value, sharedState.value, error.value, seq.value);
  }

  function executeTool(state: AgentRunState, id: string): AgentRunState {
    const messagesNext = state.messages.map((message) => {
      let changed = false;
      const parts = message.parts.map((part) => {
        if (part.type !== 'tool' || part.id !== id || part.result !== undefined) return part;
        const handler = tools.get(part.name);
        if (!handler) return part;
        changed = true;
        try {
          const result = handler(part.args ?? {});
          return { ...part, result, status: 'done' as const };
        } catch (err) {
          const messageText = err instanceof Error ? err.message : 'Tool failed';
          return { ...part, status: 'error' as const, result: messageText };
        }
      });
      return changed ? { ...message, parts } : message;
    });
    const failed = messagesNext.some((message) => message.parts.some((part) => part.type === 'tool' && part.id === id && part.status === 'error'));
    return {
      ...state,
      messages: messagesNext,
      status: failed ? 'error' : state.status,
      error: failed ? 'Tool failed' : state.error
    };
  }

  function apply(event: AgUiEvent) {
    let next = applyAgUiEvent(current(), event);
    if (event.type === 'TOOL_CALL_END') next = executeTool(next, event.id);
    commit(next);
  }

  async function play(events: AgUiEvent[], options?: { paceMs?: number }) {
    const token = ++playToken;
    stopped = false;
    const pace = options?.paceMs ?? 0;
    for (const event of events) {
      if (stopped || token !== playToken) return;
      apply(event);
      if (pace > 0) {
        await new Promise((resolve) => setTimeout(resolve, pace));
      }
    }
  }

  function addUserMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const minted = userMessage(trimmed, seq.value);
    messages.value = [...messages.value, minted.message];
    seq.value = minted.seq;
  }

  function registerTool(name: string, handler: AgentToolHandler) {
    tools.set(name, handler);
  }

  function resolveApproval(id: string, decision: 'approved' | 'rejected') {
    messages.value = messages.value.map((message) => ({
      ...message,
      parts: message.parts.map((part) => (
        part.type === 'approval' && part.id === id ? { ...part, status: decision } : part
      ))
    }));
    status.value = decision === 'approved' ? 'running' : 'complete';
  }

  function reset() {
    playToken += 1;
    stopped = true;
    const fresh = createAgentState();
    commit(fresh);
    error.value = null;
  }

  function stop() {
    stopped = true;
    playToken += 1;
    if (status.value === 'running') status.value = 'complete';
  }

  return {
    messages,
    status,
    error,
    sharedState,
    apply,
    play,
    addUserMessage,
    registerTool,
    resolveApproval,
    reset,
    stop
  };
}
