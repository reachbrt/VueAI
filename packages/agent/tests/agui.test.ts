import { describe, expect, it } from 'vitest';
import { useAgent } from '../src/composables/useAgent';
import { applyAgUiEvent, createAgentState } from '../src/utils/agui';

describe('applyAgUiEvent', () => {
  it('streams text into one assistant message', () => {
    let state = applyAgUiEvent(createAgentState(), { type: 'RUN_STARTED' });
    state = applyAgUiEvent(state, { type: 'TEXT_MESSAGE_CONTENT', delta: 'Hello' });
    state = applyAgUiEvent(state, { type: 'TEXT_MESSAGE_CONTENT', delta: ' there' });
    state = applyAgUiEvent(state, { type: 'RUN_FINISHED' });
    expect(state.messages).toHaveLength(1);
    expect(state.messages[0].parts).toEqual([{ type: 'text', text: 'Hello there' }]);
    expect(state.status).toBe('complete');
  });

  it('keeps a second run on its own message', () => {
    let state = applyAgUiEvent(createAgentState(), { type: 'RUN_STARTED' });
    state = applyAgUiEvent(state, { type: 'TEXT_MESSAGE_CONTENT', delta: 'One' });
    state = applyAgUiEvent(state, { type: 'RUN_STARTED' });
    state = applyAgUiEvent(state, { type: 'TEXT_MESSAGE_CONTENT', delta: 'Two' });
    expect(state.messages.map((message) => message.parts[0])).toEqual([
      { type: 'text', text: 'One' },
      { type: 'text', text: 'Two' }
    ]);
  });

  it('assembles tool arguments and waits on approval', () => {
    let state = applyAgUiEvent(createAgentState(), { type: 'RUN_STARTED' });
    state = applyAgUiEvent(state, { type: 'TOOL_CALL_START', id: 't1', name: 'filter_invoices' });
    state = applyAgUiEvent(state, { type: 'TOOL_CALL_ARGS', id: 't1', delta: '{"status":' });
    state = applyAgUiEvent(state, { type: 'TOOL_CALL_ARGS', id: 't1', delta: '"overdue"}' });
    state = applyAgUiEvent(state, { type: 'TOOL_CALL_END', id: 't1' });
    state = applyAgUiEvent(state, {
      type: 'APPROVAL_REQUEST',
      id: 'a1',
      title: 'Send reminder',
      detail: 'Email Northwind about invoice 1042.'
    });
    state = applyAgUiEvent(state, { type: 'RUN_FINISHED' });
    const tool = state.messages[0].parts[0];
    expect(tool).toMatchObject({
      type: 'tool',
      status: 'done',
      args: { status: 'overdue' }
    });
    expect(state.status).toBe('awaiting-approval');
  });

  it('moves a plan forward and keeps the latest suggestions', () => {
    let state = applyAgUiEvent(createAgentState(), { type: 'RUN_STARTED' });
    state = applyAgUiEvent(state, {
      type: 'PLAN',
      title: 'Find overdue invoices',
      steps: [
        { id: 'read', title: 'Read the ledger', status: 'active' },
        { id: 'answer', title: 'Answer', status: 'pending' }
      ]
    });
    state = applyAgUiEvent(state, { type: 'PLAN_STEP', id: 'read', status: 'done' });
    state = applyAgUiEvent(state, { type: 'SUGGESTIONS', items: ['Draft a reminder'] });
    state = applyAgUiEvent(state, { type: 'SUGGESTIONS', items: ['Refund invoice 1042'] });
    const plan = state.messages[0].parts.find((part) => part.type === 'plan');
    const suggestions = state.messages[0].parts.find((part) => part.type === 'suggestions');
    expect(plan).toMatchObject({
      steps: [
        { id: 'read', status: 'done' },
        { id: 'answer', status: 'pending' }
      ]
    });
    expect(suggestions).toEqual({ type: 'suggestions', items: ['Refund invoice 1042'] });
  });

  it('merges shared state', () => {
    let state = applyAgUiEvent(createAgentState(), { type: 'STATE_SNAPSHOT', snapshot: { filter: 'all' } });
    state = applyAgUiEvent(state, { type: 'STATE_DELTA', delta: { filter: 'overdue' } });
    expect(state.sharedState).toEqual({ filter: 'overdue' });
  });
});

describe('useAgent', () => {
  it('runs a registered tool when the call ends without a result', async () => {
    const agent = useAgent();
    agent.registerTool('filter_invoices', (args) => ({ status: args.status, count: 2 }));
    await agent.play([
      { type: 'RUN_STARTED' },
      { type: 'TOOL_CALL_START', id: 't1', name: 'filter_invoices' },
      { type: 'TOOL_CALL_ARGS', id: 't1', delta: '{"status":"overdue"}' },
      { type: 'TOOL_CALL_END', id: 't1' },
      { type: 'RUN_FINISHED' }
    ]);
    const part = agent.messages.value[0].parts[0];
    expect(part).toMatchObject({ type: 'tool', result: { status: 'overdue', count: 2 } });
  });

  it('records the approval decision', () => {
    const agent = useAgent();
    agent.apply({ type: 'RUN_STARTED' });
    agent.apply({ type: 'APPROVAL_REQUEST', id: 'a1', title: 'Refund', detail: 'Invoice 1042' });
    agent.resolveApproval('a1', 'approved');
    const part = agent.messages.value[0].parts[0];
    expect(part).toMatchObject({ type: 'approval', status: 'approved' });
    expect(agent.status.value).toBe('running');
  });
});
