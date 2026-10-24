<div align="center">
  <img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/studio-banner.svg" alt="VueAI" width="100%" />

  <h1>@aivue/core</h1>
  <p>Core AI functionality for Vue.js components</p>

  <p>
    <a href="https://www.npmjs.com/package/@aivue/core"><img src="https://img.shields.io/npm/v/@aivue/core.svg?style=flat-square&color=34d399&labelColor=09090b" alt="npm version"></a>
    <a href="https://www.npmjs.com/package/@aivue/core"><img src="https://img.shields.io/badge/downloads-360%2Fmonth-34d399?style=flat-square&logo=npm&color=34d399&labelColor=09090b" alt="npm downloads"></a>
    <a href="https://www.npmjs.com/package/@aivue/core"><img src="https://img.shields.io/npm/d18m/%40aivue%2Fcore?color=34d399&labelColor=09090b" alt="NPM Downloads"></a>
    <a href="https://github.com/reachbrt/vueai/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@aivue/core.svg?style=flat-square&color=34d399&labelColor=09090b" alt="MIT License"></a>
    <a href="https://aivue.netlify.app/"><img src="https://img.shields.io/netlify/5cb37fa7-9ee1-4af6-9ff4-d34ff0322ded?style=flat-square&logo=netlify" alt="Netlify Status"></a>
  </p>

  <p><a href="https://aivue.netlify.app/" target="_blank">📺 Live Demo</a> • <a href="https://github.com/reachbrt/vueai/wiki" target="_blank">📚 Documentation</a> • <a href="https://github.com/reachbrt/vueai/issues/new" target="_blank">🐛 Report Bug</a></p>
</div>

## Overview

`@aivue/core` provides a unified interface for working with multiple AI providers in Vue.js applications. It serves as the foundation for all VueAI components, offering a consistent API for interacting with various AI services.

## ✨ Features

- **🔌 Multi-provider support**: OpenAI, Claude, Gemini, DeepSeek, Hugging Face, and Ollama
- **🆕 Current models**: GPT-6.1 Sol, Claude Sonnet 5.5, Gemini 3.8 Flash, and DeepSeek Flash are the defaults
- **🌐 Fallback mechanism**: Continues to work even without API keys during development
- **🔄 Streaming support**: Real-time streaming of AI responses
- **🛡️ Type safety**: Full TypeScript support
- **🧩 Modular design**: Use only what you need
- **🔧 Customizable**: Configure providers, models, and parameters

## Installation

```bash
# npm
npm install @aivue/core

# yarn
yarn add @aivue/core

# pnpm
pnpm add @aivue/core
```

### 🔄 Vue Compatibility

- **✅ Vue 2**: Compatible with Vue 2.6.0 and higher
- **✅ Vue 3**: Compatible with all Vue 3.x versions

> The package automatically detects which version of Vue you're using and provides the appropriate compatibility layer. This means you can use the same package regardless of whether your project is using Vue 2 or Vue 3.

## Basic Usage

```javascript
import { AIClient } from '@aivue/core';

// Create a client with your preferred provider
const client = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Use environment variables for API keys
  model: 'gpt-6.1-sol' // Optional. The default is GPT-6.1 Sol.
});

// Chat functionality
async function getResponse() {
  const response = await client.chat([
    { role: 'user', content: 'Hello, can you help me with Vue.js?' }
  ]);

  console.log(response);
}
```

## Streaming Responses

```javascript
import { AIClient } from '@aivue/core';

const client = new AIClient({
  provider: 'claude',
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  model: 'claude-sonnet-5-5'
});

// Streaming chat functionality
client.chatStream(
  [{ role: 'user', content: 'Write a short poem about Vue.js' }],
  {
    onStart: () => console.log('Stream started'),
    onToken: (token) => console.log(token), // Process each token as it arrives
    onComplete: (fullText) => console.log('Complete response:', fullText),
    onError: (error) => console.error('Error:', error)
  }
);
```

## Using with Vue Composition API

```javascript
import { ref, onMounted } from 'vue';
import { AIClient } from '@aivue/core';

export default {
  setup() {
    const response = ref('');
    const loading = ref(false);
    const client = new AIClient({
      provider: 'openai',
      apiKey: import.meta.env.VITE_OPENAI_API_KEY
    });

    async function askQuestion(question) {
      loading.value = true;
      try {
        response.value = await client.chat([
          { role: 'user', content: question }
        ]);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        loading.value = false;
      }
    }

    return {
      response,
      loading,
      askQuestion
    };
  }
};
```

## Configuring Multiple Providers

```javascript
import { registerProviders } from '@aivue/core';

// Register multiple providers at once
registerProviders({
  openai: {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    defaultModel: 'gpt-6.1-sol'
  },
  claude: {
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    defaultModel: 'claude-sonnet-5-5'
  },
  gemini: {
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
  }
});
```

## API Reference

### AIClient

```typescript
new AIClient(options: AIClientOptions)
```

#### AIClientOptions

| Property | Type | Description | Required |
|----------|------|-------------|----------|
| provider | string | AI provider to use ('openai', 'claude', 'gemini', etc.) | Yes |
| apiKey | string | API key for the provider | No |
| model | string | Model to use (e.g., 'gpt-6.1-sol', 'claude-sonnet-5-5', 'gemini-3.8-flash', 'deepseek-flash') | No |
| baseUrl | string | Custom base URL for the API | No |
| organizationId | string | Organization ID (for OpenAI) | No |

#### Methods

| Method | Description | Parameters | Return Type |
|--------|-------------|------------|-------------|
| chat | Send a chat request | messages: Message[], options?: ChatOptions | Promise<string> |
| chatStream | Stream a chat response | messages: Message[], callbacks: StreamCallbacks, options?: ChatOptions | Promise<void> |

### Message Interface

```typescript
interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}
```

### ChatOptions Interface

```typescript
interface ChatOptions {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  stopSequences?: string[];
}
```

### StreamCallbacks Interface

```typescript
interface StreamCallbacks {
  onStart?: () => void;
  onToken?: (token: string) => void;
  onComplete?: (completeText: string) => void;
  onError?: (error: Error) => void;
}
```

## Vue Version Compatibility

The package includes a comprehensive compatibility layer that handles differences between Vue 2 and Vue 3 automatically. If you need to use the compatibility utilities directly:

### For Vue 2 and Vue 3 Projects

```javascript
import {
  // Version detection
  vueVersion,  // 2 or 3 depending on detected Vue version

  // Component utilities
  createCompatComponent,  // Create components that work in both Vue 2 and 3
  registerCompatComponent, // Register components globally in both Vue 2 and 3

  // Plugin utilities
  createCompatPlugin,     // Create plugins that work in both Vue 2 and 3
  installCompatPlugin,    // Install plugins in both Vue 2 and 3

  // Reactivity utilities
  createReactiveState,    // Create reactive state in both Vue 2 and 3
  createCompatRef         // Create refs that work in both Vue 2 and 3
} from '@aivue/core';

// Example: Create a component that works in both Vue 2 and 3
const MyComponent = createCompatComponent({
  // component options
});

// Example: Register a component globally in both Vue 2 and 3
// For Vue 2, this uses Vue.component()
// For Vue 3, this uses app.component()
registerCompatComponent(app, 'MyComponent', MyComponent);

// Example: Create reactive state
const state = createReactiveState({ count: 0 });

// Example: Create a ref
const count = createCompatRef(0);
```

### For Vue 3 Specific Compatibility

If you're working with different versions of Vue 3, the package also provides utilities to handle differences between Vue 3.0.x and Vue 3.2+:

```javascript
import {
  compatCreateElementBlock,
  compatCreateElementVNode,
  compatNormalizeClass
} from '@aivue/core';

// These functions work across all Vue 3 versions
```

## Demo

Check out our [interactive demo](https://aivue-demo.netlify.app/) to see all components in action.

## 📦 Related Packages

Explore the complete @aivue ecosystem:

### 💬 [@aivue/chatbot](https://www.npmjs.com/package/@aivue/chatbot)
AI-powered chat components for Vue.js

### ✨ [@aivue/autosuggest](https://www.npmjs.com/package/@aivue/autosuggest)
AI-powered suggestion components for Vue.js

### 📝 [@aivue/smartform](https://www.npmjs.com/package/@aivue/smartform)
AI-powered form validation for Vue.js

### 🎭 [@aivue/emotion-ui](https://www.npmjs.com/package/@aivue/emotion-ui)
Emotion-aware UI components with sentiment analysis

### 📄 [@aivue/doc-intelligence](https://www.npmjs.com/package/@aivue/doc-intelligence)
Document processing and OCR with AI

### 🧠 [@aivue/predictive-input](https://www.npmjs.com/package/@aivue/predictive-input)
AI-powered predictive text input

### 🔔 [@aivue/smart-notify](https://www.npmjs.com/package/@aivue/smart-notify)
Intelligent notification system

### 🎤 [@aivue/voice-actions](https://www.npmjs.com/package/@aivue/voice-actions)
Voice command integration

### 📋 [@aivue/smart-datatable](https://www.npmjs.com/package/@aivue/smart-datatable)
Advanced data table components

### 🖼️ [@aivue/image-caption](https://www.npmjs.com/package/@aivue/image-caption)
AI-powered image captioning with OpenAI Vision models

### 📊 [@aivue/analytics](https://www.npmjs.com/package/@aivue/analytics)
AI-powered analytics and insights

## License

MIT © [Bharatkumar Subramanian](https://github.com/reachbrt)
