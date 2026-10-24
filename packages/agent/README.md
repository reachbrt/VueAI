<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/studio-bar.svg" alt="VueAI" width="100%"></a>
</p>

# @aivue/agent

The agent runtime for Vue. Stream text, show reasoning, run tools against your page, pause for approval, and render your own components inside the thread.

## Features

- A plan the run updates as each step finishes
- Sources cited under the answer
- Follow-up suggestions the person can send in one click
- A context meter for how full the thread is
- Tools, approvals, shared page state, and generative UI

[Live studio](https://aivue.netlify.app) · [GitHub](https://github.com/reachbrt/VueAI)

## Install

```bash
npm install @aivue/agent
```

```ts
import { AiAgent, useAgent } from '@aivue/agent';
import '@aivue/agent/style.css';
```

## Use

`useAgent` reduces a small event stream. The events follow the same ideas as AG-UI: a run starts, tokens arrive, a tool is called, shared state updates, and the run can wait for a person.

```vue
<script setup>
import { AiAgent, useAgent } from '@aivue/agent';

const { messages, status, sharedState, addUserMessage, play, registerTool, resolveApproval } = useAgent();

registerTool('filter_invoices', (args) => {
  sharedState.value = { ...sharedState.value, filter: args.status };
  return { filter: args.status };
});

async function onSend(text) {
  addUserMessage(text);
  await play([
    { type: 'RUN_STARTED' },
    { type: 'REASONING_MESSAGE_CONTENT', delta: 'Checking which invoices are past due. ' },
    { type: 'REASONING_END' },
    { type: 'TOOL_CALL_START', id: 'filter-1', name: 'filter_invoices' },
    { type: 'TOOL_CALL_ARGS', id: 'filter-1', delta: '{"status":"overdue"}' },
    { type: 'TOOL_CALL_END', id: 'filter-1' },
    { type: 'TEXT_MESSAGE_CONTENT', delta: 'Two invoices are overdue.' },
    { type: 'RUN_FINISHED' }
  ], { paceMs: 12 });
}
</script>

<template>
  <AiAgent
    :messages="messages"
    :status="status"
    @send="onSend"
    @approve="resolveApproval($event, 'approved')"
    @reject="resolveApproval($event, 'rejected')"
  />
</template>
```

A tool handler runs when `TOOL_CALL_END` arrives without a result. Return any JSON-safe value. Throw to mark the call as failed.

## Generative UI

Register a component and emit a `UI` event. The thread renders it with the props the agent sent.

```ts
import InvoiceCard from './InvoiceCard.vue';

const components = { InvoiceCard };
```

```ts
{ type: 'UI', name: 'InvoiceCard', props: { id: '1042', amount: 1840 } }
```

```vue
<AiAgent :messages="messages" :components="components" />
```

## Approvals

```ts
{ type: 'APPROVAL_REQUEST', id: 'refund-1', title: 'Refund 1042', detail: 'Return $1,840 to Northwind.' }
```

The run stays in `awaiting-approval` until `resolveApproval(id, 'approved' | 'rejected')`.

## Shared page state

```ts
{ type: 'STATE_SNAPSHOT', snapshot: { filter: 'all' } }
{ type: 'STATE_DELTA', delta: { filter: 'overdue' } }
```

Read `sharedState` from the same composable and bind it to the page. That is the page copilot: the agent and the screen share one object.

## Pieces

| Component | Role |
| --- | --- |
| `AiAgent` | Thread and composer |
| `AiThread` | Message list |
| `AiComposer` | Input |
| `AiMessage` | One turn, including parts |
| `AiReasoning` | Thinking block |
| `AiToolCall` | Tool name, arguments, result |
| `AiApproval` | Approve or reject |

`applyAgUiEvent` and `createAgentState` are the pure reducer, if you want to drive the state from a server stream yourself.

## Nuxt

```bash
npx @aivue/cli add nuxt
```

That writes `plugins/aivue-agent.ts` and registers the components.

## Theme

The controls use these variables: `--aivue-bg`, `--aivue-surface`, `--aivue-ink`, `--aivue-muted`, `--aivue-line`, `--aivue-accent`, `--aivue-accent-ink`. Set them on a parent to match your product. The studio demo sets a dark palette.

## License

MIT
