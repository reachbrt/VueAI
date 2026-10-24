export interface PackageCard {
  name: string;
  text: string;
  group: string;
  controls: string;
}

export const packages: PackageCard[] = [
  {
    name: '@aivue/agent',
    group: 'Runtime',
    text: 'Streaming runs, tools, approvals, shared page state, and generative UI.',
    controls: 'AiAgent, AiThread, AiMessage, AiReasoning, AiToolCall, AiApproval, AiComposer, useAgent'
  },
  {
    name: '@aivue/stream-markdown',
    group: 'Runtime',
    text: 'Markdown that stays valid while tokens are still arriving.',
    controls: 'AiStreamMarkdown'
  },
  {
    name: '@aivue/cli',
    group: 'Runtime',
    text: 'Scaffold an agent panel or a Nuxt plugin from the terminal.',
    controls: 'aivue add agent, aivue add nuxt'
  },
  {
    name: '@aivue/core',
    group: 'Runtime',
    text: 'One client for OpenAI, Claude, Gemini, Hugging Face, Ollama, and DeepSeek.',
    controls: 'AIClient, useAIClient'
  },
  {
    name: '@aivue/chatbot',
    group: 'Conversation',
    text: 'Multi-provider chat with streaming, voice, attachments, and RAG.',
    controls: 'AiChatWindow, AiChatRAG, useChatEngine'
  },
  {
    name: '@aivue/chatbot-storage',
    group: 'Conversation',
    text: 'Persist threads so a conversation survives a reload.',
    controls: 'Storage adapters for the chatbot'
  },
  {
    name: '@aivue/browser-llm',
    group: 'Conversation',
    text: 'Run a model in the browser with WebGPU. No key leaves the page.',
    controls: 'AiBrowserLLM, useBrowserLLM'
  },
  {
    name: '@aivue/mcp-client',
    group: 'Conversation',
    text: 'Connect the agent to Model Context Protocol tools and resources.',
    controls: 'AiMcpClient, useMcp'
  },
  {
    name: '@aivue/writer',
    group: 'Writing',
    text: 'Rewrite, shorten, expand, fix grammar, change tone, and continue in place.',
    controls: 'AiWriter, useWriter'
  },
  {
    name: '@aivue/summarizer',
    group: 'Writing',
    text: 'Short, medium, or long summaries, as a paragraph, bullets, or a plain explanation.',
    controls: 'AiSummarizer, useSummarizer'
  },
  {
    name: '@aivue/translate',
    group: 'Writing',
    text: 'Detect a language, translate, and switch formality.',
    controls: 'AiTranslate, useTranslate'
  },
  {
    name: '@aivue/moderation',
    group: 'Writing',
    text: 'Score a draft for hate, harassment, sexual content, violence, self-harm, and spam.',
    controls: 'AiModeration, useModeration'
  },
  {
    name: '@aivue/smart-datatable',
    group: 'Data',
    text: 'Ask a table a question and let the agent filter, explain, and act on rows.',
    controls: 'AiSmartDataTable'
  },
  {
    name: '@aivue/tabular-intelligence',
    group: 'Data',
    text: 'Statistics, charts, and models over rows you already have.',
    controls: 'AiTabularIntelligence'
  },
  {
    name: '@aivue/hierarchical-memory',
    group: 'Data',
    text: 'Memory trees for long documents and wide tables.',
    controls: 'AiHierarchicalMemory'
  },
  {
    name: '@aivue/doc-intelligence',
    group: 'Data',
    text: 'Pull structured fields from invoices, receipts, and identity documents.',
    controls: 'AiDocIntelligence'
  },
  {
    name: '@aivue/image-caption',
    group: 'Data',
    text: 'Write a caption for an uploaded or remote image.',
    controls: 'AiImageCaption'
  },
  {
    name: '@aivue/guided-form',
    group: 'Input',
    text: 'Turn a schema into one question at a time, with the model beside the field.',
    controls: 'AiGuidedForm'
  },
  {
    name: '@aivue/smartform',
    group: 'Input',
    text: 'Validation that reads the intent of the form, not only the regex.',
    controls: 'AiSmartForm'
  },
  {
    name: '@aivue/autosuggest',
    group: 'Input',
    text: 'Suggestions ranked for the field the user is in.',
    controls: 'AiAutosuggest'
  },
  {
    name: '@aivue/predictive-input',
    group: 'Input',
    text: 'Finish the sentence the user has started.',
    controls: 'AiPredictiveInput'
  },
  {
    name: '@aivue/voice-actions',
    group: 'Input',
    text: 'Turn speech into commands the page can run.',
    controls: 'AiVoiceActions'
  },
  {
    name: '@aivue/smart-notify',
    group: 'Surface',
    text: 'Group notifications and time them to attention.',
    controls: 'AiSmartNotify'
  },
  {
    name: '@aivue/emotion-ui',
    group: 'Surface',
    text: 'Let the interface follow the tone of what the user just said.',
    controls: 'AiEmotionUi'
  },
  {
    name: '@aivue/analytics',
    group: 'Surface',
    text: 'See how people and agents move through a conversation.',
    controls: 'AiAnalytics'
  },
  {
    name: '@aivue/360-spin',
    group: 'Surface',
    text: 'A product turntable the agent can narrate.',
    controls: 'Ai360Spin'
  },
  {
    name: '@aivue/ai-360-generator',
    group: 'Surface',
    text: 'Build a 360° view from a single product image.',
    controls: 'Ai360Generator'
  }
];

export const packageIcons: Record<string, string> = {
  '@aivue/agent': 'orbit',
  '@aivue/stream-markdown': 'lines',
  '@aivue/cli': 'terminal',
  '@aivue/core': 'hex',
  '@aivue/chatbot': 'chat',
  '@aivue/chatbot-storage': 'database',
  '@aivue/browser-llm': 'cpu',
  '@aivue/mcp-client': 'nodes',
  '@aivue/writer': 'pen',
  '@aivue/summarizer': 'list',
  '@aivue/translate': 'translate',
  '@aivue/moderation': 'shield',
  '@aivue/smart-datatable': 'table',
  '@aivue/tabular-intelligence': 'chart',
  '@aivue/hierarchical-memory': 'tree',
  '@aivue/doc-intelligence': 'doc',
  '@aivue/image-caption': 'image',
  '@aivue/guided-form': 'form',
  '@aivue/smartform': 'check',
  '@aivue/autosuggest': 'suggest',
  '@aivue/predictive-input': 'cursor',
  '@aivue/voice-actions': 'mic',
  '@aivue/smart-notify': 'bell',
  '@aivue/emotion-ui': 'face',
  '@aivue/analytics': 'chart',
  '@aivue/360-spin': 'spin',
  '@aivue/ai-360-generator': 'cube'
};

export const steps = [
  {
    index: '01',
    icon: 'lines',
    title: 'Stream the run',
    text: 'Tokens, reasoning, and markdown land in the thread while the model is still writing.'
  },
  {
    index: '02',
    icon: 'tool',
    title: 'Call the page',
    text: 'Tools you register can filter a table, open a document, or change the screen the user is looking at.'
  },
  {
    index: '03',
    icon: 'approval',
    title: 'Wait for a person',
    text: 'A refund, a send, or a delete pauses on an approval instead of running itself.'
  },
  {
    index: '04',
    icon: 'panel',
    title: 'Render your component',
    text: 'The agent can place your Vue component in the thread and share state with it.'
  }
];

export const controls = [
  { name: 'AiThread', icon: 'thread', package: '@aivue/agent', text: 'The scroll of a run: messages, tools, and the composer.' },
  { name: 'AiMessage', icon: 'message', package: '@aivue/agent', text: 'One turn, from the person or from the agent.' },
  { name: 'AiReasoning', icon: 'reason', package: '@aivue/agent', text: 'The model’s working notes, separate from the answer.' },
  { name: 'AiToolCall', icon: 'tool', package: '@aivue/agent', text: 'Name, arguments, and result of a tool, as they arrive.' },
  { name: 'AiApproval', icon: 'approval', package: '@aivue/agent', text: 'A pause with approve and reject, before a sensitive tool runs.' },
  { name: 'AiComposer', icon: 'composer', package: '@aivue/agent', text: 'The field that starts the next turn.' },
  { name: 'AiAgent', icon: 'panel', package: '@aivue/agent', text: 'The whole panel: thread, status, and approval events.' },
  { name: 'useAgent', icon: 'play', package: '@aivue/agent', text: 'Play an event stream, register tools, and share state with the page.' },
  { name: 'AiStreamMarkdown', icon: 'lines', package: '@aivue/stream-markdown', text: 'Incomplete markdown that does not flicker or break a fence.' }
];

export const scenes = [
  { src: 'hero', title: 'The suite', text: 'Chat, forms, and vision on one surface.' },
  { src: 'chatbot', title: 'Conversation', text: 'A thread with voice, files, and RAG.' },
  { src: 'smartform', title: 'Forms', text: 'Validation that reads the field, not only the regex.' },
  { src: 'autosuggest', title: 'Input', text: 'Suggestions beside the cursor.' },
  { src: 'caption', title: 'Vision', text: 'A caption for the image on the page.' },
  { src: 'analytics', title: 'Signal', text: 'How people and agents move through a run.' }
];
