<p align="center">
  <a href="https://aivue.netlify.app">
    <img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/studio-banner.svg" alt="VueAI. A component suite the agent can call, on the page it is in." width="100%">
  </a>
</p>

<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://img.shields.io/badge/studio-live-34d399?style=flat-square&labelColor=09090b" alt="Studio"></a>
  <a href="https://github.com/reachbrt/VueAI"><img src="https://img.shields.io/badge/GitHub-reachbrt%2FVueAI-ffffff?style=flat-square&labelColor=09090b" alt="GitHub"></a>
  <a href="https://www.npmjs.com/org/aivue"><img src="https://img.shields.io/badge/npm-%40aivue-34d399?style=flat-square&labelColor=09090b" alt="npm @aivue"></a>
  <a href="https://github.com/reachbrt/VueAI/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-34d399?style=flat-square&labelColor=09090b" alt="MIT"></a>
</p>

The agent runtime for Vue, and a suite of controls that an agent can call. The same black, zinc, and emerald studio is live at [aivue.netlify.app](https://aivue.netlify.app).

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

### Runtime

| Package | What it is |
| --- | --- |
| [@aivue/agent](https://www.npmjs.com/package/@aivue/agent) | Streaming runs, tools, approvals, shared page state, and generative UI |
| [@aivue/stream-markdown](https://www.npmjs.com/package/@aivue/stream-markdown) | Markdown that stays valid while tokens are still arriving |
| [@aivue/cli](https://www.npmjs.com/package/@aivue/cli) | `aivue add agent` and `aivue add nuxt` |
| [@aivue/core](https://www.npmjs.com/package/@aivue/core) | One client for OpenAI, Claude, Gemini, Hugging Face, Ollama, and DeepSeek |

### Conversation

| Package | What it is |
| --- | --- |
| [@aivue/chatbot](https://www.npmjs.com/package/@aivue/chatbot) | Multi-provider chat with streaming, voice, attachments, and RAG |
| [@aivue/chatbot-storage](https://www.npmjs.com/package/@aivue/chatbot-storage) | Persist threads so a conversation survives a reload |
| [@aivue/browser-llm](https://www.npmjs.com/package/@aivue/browser-llm) | Run a model in the browser with WebGPU |
| [@aivue/mcp-client](https://www.npmjs.com/package/@aivue/mcp-client) | Model Context Protocol client |

### Writing

| Package | What it is |
| --- | --- |
| [@aivue/writer](https://www.npmjs.com/package/@aivue/writer) | Rewrite, shorten, expand, fix grammar, change tone, and continue |
| [@aivue/summarizer](https://www.npmjs.com/package/@aivue/summarizer) | Short, medium, and long summaries |
| [@aivue/translate](https://www.npmjs.com/package/@aivue/translate) | Detect a language and translate |
| [@aivue/moderation](https://www.npmjs.com/package/@aivue/moderation) | Score a draft before it is published |

### Data

| Package | What it is |
| --- | --- |
| [@aivue/smart-datatable](https://www.npmjs.com/package/@aivue/smart-datatable) | Ask a table a question and filter the rows |
| [@aivue/tabular-intelligence](https://www.npmjs.com/package/@aivue/tabular-intelligence) | Statistics, charts, and models over rows |
| [@aivue/hierarchical-memory](https://www.npmjs.com/package/@aivue/hierarchical-memory) | Memory trees for long documents and wide tables |
| [@aivue/doc-intelligence](https://www.npmjs.com/package/@aivue/doc-intelligence) | Fields from invoices, receipts, and identity documents |
| [@aivue/image-caption](https://www.npmjs.com/package/@aivue/image-caption) | A caption for an uploaded or remote image |

### Input

| Package | What it is |
| --- | --- |
| [@aivue/guided-form](https://www.npmjs.com/package/@aivue/guided-form) | One question at a time, with the model beside the field |
| [@aivue/smartform](https://www.npmjs.com/package/@aivue/smartform) | Validation that reads the intent of the form |
| [@aivue/autosuggest](https://www.npmjs.com/package/@aivue/autosuggest) | Suggestions ranked for the field the user is in |
| [@aivue/predictive-input](https://www.npmjs.com/package/@aivue/predictive-input) | Finish the sentence the user has started |
| [@aivue/voice-actions](https://www.npmjs.com/package/@aivue/voice-actions) | Turn speech into commands the page can run |

### Surface

| Package | What it is |
| --- | --- |
| [@aivue/smart-notify](https://www.npmjs.com/package/@aivue/smart-notify) | Group notifications and time them to attention |
| [@aivue/emotion-ui](https://www.npmjs.com/package/@aivue/emotion-ui) | Let the interface follow the tone of what was just said |
| [@aivue/analytics](https://www.npmjs.com/package/@aivue/analytics) | How people and agents move through a run |
| [@aivue/360-spin](https://www.npmjs.com/package/@aivue/360-spin) | A product turntable the agent can narrate |
| [@aivue/ai-360-generator](https://www.npmjs.com/package/@aivue/ai-360-generator) | Build a 360° view from a single product image |

Each package README uses this same header. Open a package on npm for install steps and a short example. The studio runs the components.

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
