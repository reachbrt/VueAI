# VueAI

The agent runtime for Vue, and a suite of controls that an agent can call.

The studio is at [aivue.netlify.app](https://aivue.netlify.app). Source is on [GitHub](https://github.com/reachbrt/VueAI).

## Start with the agent

```bash
npm install @aivue/agent
```

```vue
<script setup>
import { AiAgent, useAgent } from '@aivue/agent'
import '@aivue/agent/style.css'

const { messages, status, addUserMessage, play, registerTool, resolveApproval } = useAgent()

registerTool('filter_invoices', (args) => ({ status: args.status }))

async function onSend(text) {
  addUserMessage(text)
  await play([
    { type: 'RUN_STARTED' },
    { type: 'TOOL_CALL_START', id: 'filter-1', name: 'filter_invoices' },
    { type: 'TOOL_CALL_ARGS', id: 'filter-1', delta: '{"status":"overdue"}' },
    { type: 'TOOL_CALL_END', id: 'filter-1' },
    { type: 'TEXT_MESSAGE_CONTENT', delta: 'Two invoices are overdue.' },
    { type: 'RUN_FINISHED' }
  ])
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

Scaffold the same panel, or a Nuxt plugin:

```bash
npx @aivue/cli add agent
npx @aivue/cli add nuxt
```

## What the runtime does

- Streams text and reasoning into the thread
- Runs tools you register, including tools that change the current page
- Pauses for approval before a sensitive action
- Renders a Vue component the agent selects
- Shares a state object between the agent and the screen

`@aivue/stream-markdown` renders the artifact while tokens are still arriving. Unfinished code fences stay intact, and HTML from the model is escaped.

## Packages

| Package | What it is |
| --- | --- |
| [@aivue/agent](https://www.npmjs.com/package/@aivue/agent) | Agent runtime and thread controls |
| [@aivue/stream-markdown](https://www.npmjs.com/package/@aivue/stream-markdown) | Streaming Markdown |
| [@aivue/cli](https://www.npmjs.com/package/@aivue/cli) | `aivue add agent` and `aivue add nuxt` |
| [@aivue/core](https://www.npmjs.com/package/@aivue/core) | Provider client |
| [@aivue/chatbot](https://www.npmjs.com/package/@aivue/chatbot) | Chat window, voice, RAG |
| [@aivue/browser-llm](https://www.npmjs.com/package/@aivue/browser-llm) | In-browser model via WebGPU |
| [@aivue/mcp-client](https://www.npmjs.com/package/@aivue/mcp-client) | Model Context Protocol client |
| [@aivue/smart-datatable](https://www.npmjs.com/package/@aivue/smart-datatable) | Natural-language tables |
| [@aivue/writer](https://www.npmjs.com/package/@aivue/writer) | In-place rewrite and tone |
| [@aivue/doc-intelligence](https://www.npmjs.com/package/@aivue/doc-intelligence) | Invoice, receipt, and ID extraction |
| [@aivue/voice-actions](https://www.npmjs.com/package/@aivue/voice-actions) | Voice commands |
| [@aivue/hierarchical-memory](https://www.npmjs.com/package/@aivue/hierarchical-memory) | Memory trees for documents and tables |

The studio lists the rest: summarizer, translate, moderation, guided forms, predictive input, smart form, autosuggest, notifications, emotion, analytics, tabular intelligence, image caption, and 360 spin.

## Develop

```bash
npm install
npm run build --workspace @aivue/agent
npm run build --workspace @aivue/stream-markdown
npm test --workspace @aivue/agent
cd demo && npm install && npm run dev
```

The demo dev server runs at `http://localhost:8080`.

## License

MIT
