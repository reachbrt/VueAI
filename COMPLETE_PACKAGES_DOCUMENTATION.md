# 🚀 Complete AIVue Packages Documentation

> **Comprehensive guide for all @aivue packages with Vue, Angular, and React implementations**

[![npm](https://img.shields.io/badge/npm-%40aivue-CB3837?style=flat-square&logo=npm)](https://www.npmjs.com/org/aivue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://img.shields.io/netlify/5cb37fa7-9ee1-4af6-9ff4-d34ff0322ded?style=flat-square&logo=netlify)](https://aivue.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-reachbrt%2Fvueai-181717?style=flat-square&logo=github)](https://github.com/reachbrt/vueai)

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Package List](#package-list)
3. [Core Package](#1-aivuecore)
4. [UI Components](#ui-components)
   - [Chatbot](#2-aivuechatbot)
   - [SmartForm](#3-aivuesmartform)
   - [Smart DataTable](#4-aivuesmart-datatable)
   - [AutoSuggest](#5-aivueautosuggest)
   - [360 Spin](#6-aivue360-spin)
   - [Image Caption](#7-aivueimage-caption)
   - [Voice Actions](#8-aivuevoice-actions)
   - [Emotion UI](#9-aivueemotion-ui)
   - [Predictive Input](#10-aivuepredictive-input)
   - [Doc Intelligence](#11-aivuedoc-intelligence)
   - [Smart Notify](#12-aivuesmart-notify)
   - [Analytics](#13-aivueanalytics)
5. [Framework Implementation](#framework-implementation)
6. [Demo Controls](#demo-controls)
7. [Migration Guide](#migration-guide)

---

## 🎯 Overview

**AIVue** is a comprehensive ecosystem of AI-powered Vue.js components designed to bring cutting-edge AI capabilities to your applications. All packages are:

- ✅ **Framework Agnostic** - Works with Vue 2, Vue 3, Angular, and React
- ✅ **TypeScript First** - Full type safety and IntelliSense support
- ✅ **AI Provider Flexible** - Supports OpenAI, Claude, Gemini, Ollama, HuggingFace, DeepSeek
- ✅ **Production Ready** - Battle-tested with comprehensive test coverage
- ✅ **Well Documented** - Extensive documentation and examples
- ✅ **Open Source** - MIT licensed

---

## 📦 Package List

| Package | Version | Downloads | Description |
|---------|---------|-----------|-------------|
| [@aivue/core](#1-aivuecore) | ![npm](https://img.shields.io/npm/v/@aivue/core) | ![downloads](https://img.shields.io/npm/dm/@aivue/core) | Core AI functionality |
| [@aivue/chatbot](#2-aivuechatbot) | ![npm](https://img.shields.io/npm/v/@aivue/chatbot) | ![downloads](https://img.shields.io/npm/dm/@aivue/chatbot) | AI chat components with RAG |
| [@aivue/smartform](#3-aivuesmartform) | ![npm](https://img.shields.io/npm/v/@aivue/smartform) | ![downloads](https://img.shields.io/npm/dm/@aivue/smartform) | AI-powered form validation |
| [@aivue/smart-datatable](#4-aivuesmart-datatable) | ![npm](https://img.shields.io/npm/v/@aivue/smart-datatable) | ![downloads](https://img.shields.io/npm/dm/@aivue/smart-datatable) | AI-native data tables |
| [@aivue/autosuggest](#5-aivueautosuggest) | ![npm](https://img.shields.io/npm/v/@aivue/autosuggest) | ![downloads](https://img.shields.io/npm/dm/@aivue/autosuggest) | AI-powered suggestions |
| [@aivue/360-spin](#6-aivue360-spin) | ![npm](https://img.shields.io/npm/v/@aivue/360-spin) | ![downloads](https://img.shields.io/npm/dm/@aivue/360-spin) | 360° product viewer |
| [@aivue/image-caption](#7-aivueimage-caption) | ![npm](https://img.shields.io/npm/v/@aivue/image-caption) | ![downloads](https://img.shields.io/npm/dm/@aivue/image-caption) | AI image captioning |
| [@aivue/voice-actions](#8-aivuevoice-actions) | ![npm](https://img.shields.io/npm/v/@aivue/voice-actions) | ![downloads](https://img.shields.io/npm/dm/@aivue/voice-actions) | Voice command control |
| [@aivue/emotion-ui](#9-aivueemotion-ui) | ![npm](https://img.shields.io/npm/v/@aivue/emotion-ui) | ![downloads](https://img.shields.io/npm/dm/@aivue/emotion-ui) | Emotion-aware UI |
| [@aivue/predictive-input](#10-aivuepredictive-input) | ![npm](https://img.shields.io/npm/v/@aivue/predictive-input) | ![downloads](https://img.shields.io/npm/dm/@aivue/predictive-input) | Predictive text input |
| [@aivue/doc-intelligence](#11-aivuedoc-intelligence) | ![npm](https://img.shields.io/npm/v/@aivue/doc-intelligence) | ![downloads](https://img.shields.io/npm/dm/@aivue/doc-intelligence) | Document OCR & extraction |
| [@aivue/smart-notify](#12-aivuesmart-notify) | ![npm](https://img.shields.io/npm/v/@aivue/smart-notify) | ![downloads](https://img.shields.io/npm/dm/@aivue/smart-notify) | Smart notifications |
| [@aivue/analytics](#13-aivueanalytics) | ![npm](https://img.shields.io/npm/v/@aivue/analytics) | ![downloads](https://img.shields.io/npm/dm/@aivue/analytics) | AI-powered analytics |

---

## 1. @aivue/core

**Core AI functionality for all AIVue components**

### 🎯 Purpose
Provides a unified interface for working with multiple AI providers. Serves as the foundation for all AIVue components.

### ✨ Features

- 🔌 **Multi-Provider Support** - OpenAI, Claude, Gemini, HuggingFace, Ollama, DeepSeek
- 🌐 **Fallback Mechanism** - Works without API keys during development
- 🔄 **Streaming Support** - Real-time streaming of AI responses
- 🛡️ **Type Safety** - Full TypeScript support
- 🧩 **Modular Design** - Use only what you need
- 🔧 **Customizable** - Configure providers, models, and parameters

### 📦 Installation

```bash
npm install @aivue/core
```

### 🚀 Basic Usage

#### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { AIClient } from '@aivue/core';

const client = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: 'gpt-4o'
});

const response = ref('');

async function getResponse() {
  response.value = await client.chat([
    { role: 'user', content: 'Hello, AI!' }
  ]);
}
</script>
```

#### Vue 2
```vue
<script>
import { AIClient } from '@aivue/core';

export default {
  data() {
    return {
      client: new AIClient({
        provider: 'openai',
        apiKey: process.env.VUE_APP_OPENAI_API_KEY,
        model: 'gpt-4o'
      }),
      response: ''
    };
  },
  methods: {
    async getResponse() {
      this.response = await this.client.chat([
        { role: 'user', content: 'Hello, AI!' }
      ]);
    }
  }
};
</script>
```

#### Angular
```typescript
import { Component } from '@angular/core';
import { AIClient } from '@aivue/core';

@Component({
  selector: 'app-ai-demo',
  template: `
    <button (click)="getResponse()">Get Response</button>
    <p>{{ response }}</p>
  `
})
export class AiDemoComponent {
  private client: AIClient;
  response = '';

  constructor() {
    this.client = new AIClient({
      provider: 'openai',
      apiKey: environment.openaiApiKey,
      model: 'gpt-4o'
    });
  }

  async getResponse() {
    this.response = await this.client.chat([
      { role: 'user', content: 'Hello, AI!' }
    ]);
  }
}
```

#### React
```tsx
import { useState } from 'react';
import { AIClient } from '@aivue/core';

const client = new AIClient({
  provider: 'openai',
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  model: 'gpt-4o'
});

function AiDemo() {
  const [response, setResponse] = useState('');

  async function getResponse() {
    const result = await client.chat([
      { role: 'user', content: 'Hello, AI!' }
    ]);
    setResponse(result);
  }

  return (
    <div>
      <button onClick={getResponse}>Get Response</button>
      <p>{response}</p>
    </div>
  );
}
```

### 🎛️ Configuration Options

```typescript
interface AIClientConfig {
  provider: 'openai' | 'anthropic' | 'gemini' | 'huggingface' | 'ollama' | 'deepseek';
  apiKey?: string;              // API key (optional for development)
  model?: string;               // Model name (uses provider default if not specified)
  temperature?: number;         // 0-1, controls randomness (default: 0.7)
  maxTokens?: number;          // Maximum tokens in response
  topP?: number;               // Nucleus sampling parameter
  frequencyPenalty?: number;   // Penalize frequent tokens
  presencePenalty?: number;    // Penalize repeated tokens
  baseURL?: string;            // Custom API endpoint
}
```

### 📊 Supported Providers

| Provider | Models | Streaming | Vision |
|----------|--------|-----------|--------|
| **OpenAI** | gpt-4o, gpt-4-turbo, gpt-3.5-turbo | ✅ | ✅ |
| **Claude** | claude-3-7-sonnet, claude-3-opus | ✅ | ✅ |
| **Gemini** | gemini-pro, gemini-pro-vision | ✅ | ✅ |
| **Ollama** | llama2, mistral, codellama | ✅ | ❌ |
| **HuggingFace** | Various open-source models | ✅ | ✅ |
| **DeepSeek** | deepseek-chat, deepseek-coder | ✅ | ❌ |

### 🔄 Streaming Example

```typescript
client.chatStream(
  [{ role: 'user', content: 'Write a poem' }],
  {
    onStart: () => console.log('Stream started'),
    onToken: (token) => console.log(token),
    onComplete: (fullText) => console.log('Complete:', fullText),
    onError: (error) => console.error('Error:', error)
  }
);
```

---

## 2. @aivue/chatbot

**Enterprise-grade AI chat components with RAG support**

### 🎯 Purpose
Provides production-ready chat interfaces with advanced features like database storage, voice integration, multi-model support, and RAG (Retrieval-Augmented Generation).

### ✨ Features

#### Core Features
- 💬 **Chat Interface** - Beautiful, customizable chat UI
- 🗄️ **Database Storage** - localStorage, Supabase, Firebase, MongoDB, PostgreSQL
- 🎤 **Voice Integration** - Speech-to-text input, text-to-speech responses
- 🤖 **Multi-Model AI** - Intelligent switching between AI providers
- 📊 **Analytics Dashboard** - Usage metrics, conversation insights
- 🧵 **Conversation Threading** - Organize chats by topics
- 📎 **File Attachments** - PDFs, documents, images, audio
- 👥 **Collaborative Features** - Shared conversations, team workspaces
- 🔒 **Privacy & Security** - End-to-end encryption, local storage
- 🔒 **Proxy Support** - Secure API requests through proxy servers
- 🌍 **Internationalization** - 5 languages with customizable texts

#### RAG Features (v2.5.0+)
- 📄 **Document Upload** - Upload text files, PDFs, and documents
- 🔗 **URL Scraping** - Add web pages as knowledge sources
- 🧠 **Smart Retrieval** - Automatically finds relevant information
- 💡 **Context Injection** - Seamlessly integrates document context
- 💾 **Persistent Storage** - Knowledge base saved to localStorage
- 🎯 **Relevance Scoring** - TF-IDF based ranking
- 🔧 **Customizable** - Configure chunk size, overlap, retrieval parameters

### 📦 Installation

```bash
npm install @aivue/chatbot @aivue/core
```

### 🚀 Basic Usage

#### Vue 3 - Simple Chat
```vue
<template>
  <AiChatWindow
    provider="openai"
    :api-key="apiKey"
    model="gpt-4o"
    title="AI Assistant"
    placeholder="Ask me anything..."
  />
</template>

<script setup>
import { AiChatWindow } from '@aivue/chatbot';
import '@aivue/chatbot/dist/chatbot.css';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
</script>
```

#### Vue 3 - RAG Chat with Knowledge Base
```vue
<template>
  <AiChatRAG
    provider="openai"
    :api-key="apiKey"
    model="gpt-4o"
    :rag-config="{
      enabled: true,
      topK: 3,
      chunkSize: 500,
      chunkOverlap: 50
    }"
  />
</template>

<script setup>
import { AiChatRAG } from '@aivue/chatbot';
import '@aivue/chatbot/dist/chatbot.css';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
</script>
```

#### Angular
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
    <div class="chat-container">
      <ai-chat-window
        [provider]="'openai'"
        [apiKey]="apiKey"
        [model]="'gpt-4o'"
        [title]="'AI Assistant'"
        [placeholder]="'Ask me anything...'"
      ></ai-chat-window>
    </div>
  `,
  styles: [`@import '@aivue/chatbot/dist/chatbot.css';`]
})
export class ChatComponent {
  apiKey = environment.openaiApiKey;
}
```

#### React
```tsx
import { AiChatWindow } from '@aivue/chatbot';
import '@aivue/chatbot/dist/chatbot.css';

function Chat() {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  return (
    <AiChatWindow
      provider="openai"
      apiKey={apiKey}
      model="gpt-4o"
      title="AI Assistant"
      placeholder="Ask me anything..."
    />
  );
}
```

### 🎛️ Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `provider` | `string` | `'openai'` | AI provider |
| `apiKey` | `string` | - | API key |
| `model` | `string` | Provider default | Model name |
| `title` | `string` | `'AI Chat'` | Chat window title |
| `placeholder` | `string` | `'Type a message...'` | Input placeholder |
| `theme` | `'light' \| 'dark'` | `'light'` | UI theme |
| `showTimestamp` | `boolean` | `true` | Show message timestamps |
| `enableVoice` | `boolean` | `false` | Enable voice input/output |
| `enableFileUpload` | `boolean` | `false` | Enable file attachments |
| `storage` | `object` | `localStorage` | Storage configuration |
| `ragConfig` | `object` | - | RAG configuration |
| `proxyUrl` | `string` | - | Proxy server URL |
| `language` | `string` | `'en'` | UI language |

### 📚 RAG Configuration

```typescript
interface RAGConfig {
  enabled: boolean;           // Enable RAG
  topK: number;              // Number of relevant chunks to retrieve (default: 3)
  chunkSize: number;         // Size of text chunks (default: 500)
  chunkOverlap: number;      // Overlap between chunks (default: 50)
  minRelevanceScore: number; // Minimum relevance score (default: 0.1)
  storageKey: string;        // localStorage key (default: 'aivue_rag_kb')
}
```

### 🔒 Proxy Configuration

```typescript
// Secure API requests through proxy
<AiChatWindow
  :proxy-url="'https://your-proxy.com/api'"
  :proxy-headers="{
    'X-Custom-Header': 'value'
  }"
/>
```

### 🌍 Internationalization

```typescript
// Supported languages: en, es, fr, de, zh
<AiChatWindow
  language="es"
  :custom-texts="{
    placeholder: 'Escribe un mensaje...',
    send: 'Enviar',
    clear: 'Limpiar'
  }"
/>
```

---

## 3. @aivue/smartform

**AI-powered form validation and auto-correction**

### 🎯 Purpose
Provides intelligent form validation that understands user intent and automatically fixes common input errors.

### ✨ Features

- 🧠 **AI-Powered Validation** - Contextual validation with semantic understanding
- 🔄 **Self-Healing Forms** - Automatically fix common input errors
- 📝 **Helpful Error Messages** - Human-like error messages
- 🛡️ **Multi-Layer Validation** - 7-stage validation pipeline
- 🎯 **Field-Level Validation** - Apply AI validation to specific fields
- 🔧 **Customizable** - Combine with standard validation rules
- 📱 **Mobile-Friendly** - Works on all devices
- 🛡️ **Type Safety** - Full TypeScript support

### 📦 Installation

```bash
npm install @aivue/smartform @aivue/core
```

### 🚀 Basic Usage

#### Vue 3
```vue
<template>
  <SmartForm
    :client="aiClient"
    :schema="formSchema"
    :initial-data="formData"
    validation-mode="onChange"
    @submit="handleSubmit"
  />
</template>

<script setup>
import { ref } from 'vue';
import { SmartForm } from '@aivue/smartform';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

const formSchema = {
  email: {
    type: 'email',
    label: 'Email Address',
    required: true,
    aiValidation: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    minLength: 5,
    maxLength: 100
  },
  age: {
    type: 'number',
    label: 'Age',
    required: true,
    min: 18,
    max: 120
  },
  bio: {
    type: 'textarea',
    label: 'Bio',
    maxLength: 500,
    aiValidation: true
  }
};

const formData = ref({});

function handleSubmit(data) {
  console.log('Form submitted:', data);
}
</script>
```


