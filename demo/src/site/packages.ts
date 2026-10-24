export interface PackageCard {
  name: string;
  text: string;
}

export const packages: PackageCard[] = [
  { name: '@aivue/agent', text: 'Streaming runs, tools, approvals, shared page state, generative UI.' },
  { name: '@aivue/stream-markdown', text: 'Markdown that stays valid while tokens are still arriving.' },
  { name: '@aivue/cli', text: 'Scaffold an agent panel or a Nuxt plugin.' },
  { name: '@aivue/chatbot', text: 'Multi-provider chat with streaming, voice, and RAG.' },
  { name: '@aivue/core', text: 'Provider client for OpenAI, Claude, Gemini, and Ollama.' },
  { name: '@aivue/browser-llm', text: 'Run a model in the browser with WebGPU.' },
  { name: '@aivue/mcp-client', text: 'Talk to Model Context Protocol servers.' },
  { name: '@aivue/smart-datatable', text: 'Ask a table in natural language.' },
  { name: '@aivue/writer', text: 'Rewrite, shorten, expand, and change tone in place.' },
  { name: '@aivue/doc-intelligence', text: 'Extract fields from invoices, receipts, and IDs.' },
  { name: '@aivue/hierarchical-memory', text: 'Memory trees for long documents and tables.' },
  { name: '@aivue/voice-actions', text: 'Turn speech into commands, not just a transcript.' },
  { name: '@aivue/guided-form', text: 'One question at a time, with the model beside the field.' },
  { name: '@aivue/summarizer', text: 'Short, medium, or long summaries.' },
  { name: '@aivue/translate', text: 'Detect a language and translate in the widget.' },
  { name: '@aivue/moderation', text: 'Score a draft before it is published.' },
  { name: '@aivue/predictive-input', text: 'Finish the sentence the user has started.' },
  { name: '@aivue/smartform', text: 'Validation that reads the intent of the form.' },
  { name: '@aivue/autosuggest', text: 'Suggestions ranked for the current field.' },
  { name: '@aivue/smart-notify', text: 'Notifications timed to attention, not to every event.' },
  { name: '@aivue/emotion-ui', text: 'Interface tone that follows the user.' },
  { name: '@aivue/analytics', text: 'Usage and conversation insights.' },
  { name: '@aivue/tabular-intelligence', text: 'Statistics and models over rows you already have.' },
  { name: '@aivue/image-caption', text: 'Captions from a local vision model.' },
  { name: '@aivue/360-spin', text: 'A product turntable, including generated frames.' }
];
