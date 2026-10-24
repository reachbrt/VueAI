import type { AgUiEvent } from '@aivue/agent';

function tokens(text: string, type: 'TEXT_MESSAGE_CONTENT' | 'REASONING_MESSAGE_CONTENT'): AgUiEvent[] {
  return text.split(/(\s+)/).filter(Boolean).map((delta) => ({ type, delta }));
}

function artifactSteps(full: string): AgUiEvent[] {
  const events: AgUiEvent[] = [];
  const size = 28;
  for (let index = size; index < full.length; index += size) {
    events.push({ type: 'STATE_DELTA', delta: { artifact: full.slice(0, index) } });
  }
  events.push({ type: 'STATE_DELTA', delta: { artifact: full } });
  return events;
}

export const REMINDER = `## Payment reminder

Northwind — invoice **1042** for $1,840 was due on 12 Oct.

- Ask for a payment date this week
- Mention that invoice **1056** for Aster is also open
- Keep the note short enough to send as-is

> Prepared from the invoice table on this page.`;

export function overdueScenario(): AgUiEvent[] {
  return [
    { type: 'RUN_STARTED' },
    {
      type: 'PLAN',
      title: 'Find overdue invoices',
      steps: [
        { id: 'read', title: 'Read the ledger on this page', status: 'active' },
        { id: 'filter', title: 'Filter the overdue rows', status: 'pending' },
        { id: 'answer', title: 'Answer with the two invoices', status: 'pending' }
      ]
    },
    ...tokens('The page has four invoices. I only need the ones whose due date has passed and whose balance is still open.', 'REASONING_MESSAGE_CONTENT'),
    { type: 'REASONING_END' },
    { type: 'TOOL_CALL_START', id: 'filter-1', name: 'filter_invoices' },
    { type: 'TOOL_CALL_ARGS', id: 'filter-1', delta: '{"status":"overdue"}' },
    { type: 'TOOL_CALL_END', id: 'filter-1' },
    { type: 'PLAN_STEP', id: 'read', status: 'done' },
    { type: 'PLAN_STEP', id: 'filter', status: 'done' },
    { type: 'PLAN_STEP', id: 'answer', status: 'active' },
    { type: 'STATE_DELTA', delta: { filter: 'overdue' } },
    ...tokens('Two invoices are overdue: 1042 for Northwind and 1056 for Aster.', 'TEXT_MESSAGE_CONTENT'),
    { type: 'UI', name: 'InvoiceChip', props: { id: '1042', client: 'Northwind', amount: '$1,840' } },
    { type: 'PLAN_STEP', id: 'answer', status: 'done' },
    { type: 'SOURCES', items: [{ title: 'Invoice ledger', href: '#agent' }, { title: 'Page state' }] },
    { type: 'SUGGESTIONS', items: ['Draft a reminder', 'Refund invoice 1042'] },
    { type: 'RUN_FINISHED' }
  ];
}

export function draftScenario(): AgUiEvent[] {
  return [
    { type: 'RUN_STARTED' },
    ...tokens('I will write the reminder into the artifact beside the table, using only the rows that are already on the page.', 'REASONING_MESSAGE_CONTENT'),
    { type: 'REASONING_END' },
    { type: 'TOOL_CALL_START', id: 'draft-1', name: 'draft_reminder' },
    { type: 'TOOL_CALL_ARGS', id: 'draft-1', delta: '{"tone":"direct"}' },
    ...artifactSteps(REMINDER),
    { type: 'TOOL_CALL_END', id: 'draft-1' },
    ...tokens('The reminder is in the artifact. Nothing has been sent.', 'TEXT_MESSAGE_CONTENT'),
    { type: 'RUN_FINISHED' }
  ];
}

export function refundScenario(): AgUiEvent[] {
  return [
    { type: 'RUN_STARTED' },
    ...tokens('A refund moves money. I will stop and ask before changing invoice 1042.', 'REASONING_MESSAGE_CONTENT'),
    { type: 'REASONING_END' },
    {
      type: 'APPROVAL_REQUEST',
      id: 'refund-1042',
      title: 'Refund invoice 1042',
      detail: 'Return $1,840 to Northwind. The invoice will be marked refunded.'
    },
    { type: 'RUN_FINISHED' }
  ];
}

export function refundFollowup(): AgUiEvent[] {
  return [
    { type: 'RUN_STARTED' },
    { type: 'TOOL_CALL_START', id: 'refund-tool', name: 'mark_refunded' },
    { type: 'TOOL_CALL_ARGS', id: 'refund-tool', delta: '{"id":"1042"}' },
    { type: 'TOOL_CALL_END', id: 'refund-tool' },
    { type: 'STATE_DELTA', delta: { filter: 'refunded' } },
    ...tokens('Invoice 1042 is marked refunded. The table is showing that row.', 'TEXT_MESSAGE_CONTENT'),
    { type: 'RUN_FINISHED' }
  ];
}
