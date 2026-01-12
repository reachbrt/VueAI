# 🚀 AIVue Master Documentation

> **Complete guide for all @aivue packages with Vue, Angular, and React implementations**

[![npm](https://img.shields.io/badge/npm-%40aivue-CB3837?style=flat-square&logo=npm)](https://www.npmjs.com/org/aivue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Netlify](https://img.shields.io/netlify/5cb37fa7-9ee1-4af6-9ff4-d34ff0322ded?style=flat-square&logo=netlify)](https://aivue.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-reachbrt%2Fvueai-181717?style=flat-square&logo=github)](https://github.com/reachbrt/vueai)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Package List](#package-list)
- [Installation](#installation)
- [Core Package](#core-package)
- [UI Components](#ui-components)
- [Framework Implementation](#framework-implementation)
- [Demo Controls](#demo-controls)
- [API Reference](#api-reference)
- [Best Practices](#best-practices)

---

## 🎯 Overview

**AIVue** is a comprehensive ecosystem of 13 AI-powered packages for building intelligent web applications. All packages are:

- ✅ **Framework Agnostic** - Works with Vue 2, Vue 3, Angular, and React
- ✅ **TypeScript First** - Full type safety and IntelliSense
- ✅ **AI Provider Flexible** - OpenAI, Claude, Gemini, Ollama, HuggingFace, DeepSeek
- ✅ **Production Ready** - Battle-tested with comprehensive tests
- ✅ **Well Documented** - Extensive docs and examples
- ✅ **Open Source** - MIT licensed

---

## 📦 Package List

| # | Package | Version | Downloads | Description |
|---|---------|---------|-----------|-------------|
| 1 | [@aivue/core](#1-core) | ![v](https://img.shields.io/npm/v/@aivue/core) | ![d](https://img.shields.io/npm/dm/@aivue/core) | Core AI functionality |
| 2 | [@aivue/chatbot](#2-chatbot) | ![v](https://img.shields.io/npm/v/@aivue/chatbot) | ![d](https://img.shields.io/npm/dm/@aivue/chatbot) | AI chat with RAG |
| 3 | [@aivue/smartform](#3-smartform) | ![v](https://img.shields.io/npm/v/@aivue/smartform) | ![d](https://img.shields.io/npm/dm/@aivue/smartform) | AI form validation |
| 4 | [@aivue/smart-datatable](#4-smart-datatable) | ![v](https://img.shields.io/npm/v/@aivue/smart-datatable) | ![d](https://img.shields.io/npm/dm/@aivue/smart-datatable) | AI-native tables |
| 5 | [@aivue/autosuggest](#5-autosuggest) | ![v](https://img.shields.io/npm/v/@aivue/autosuggest) | ![d](https://img.shields.io/npm/dm/@aivue/autosuggest) | AI suggestions |
| 6 | [@aivue/360-spin](#6-360-spin) | ![v](https://img.shields.io/npm/v/@aivue/360-spin) | ![d](https://img.shields.io/npm/dm/@aivue/360-spin) | 360° viewer |
| 7 | [@aivue/image-caption](#7-image-caption) | ![v](https://img.shields.io/npm/v/@aivue/image-caption) | ![d](https://img.shields.io/npm/dm/@aivue/image-caption) | AI image captions |
| 8 | [@aivue/voice-actions](#8-voice-actions) | ![v](https://img.shields.io/npm/v/@aivue/voice-actions) | ![d](https://img.shields.io/npm/dm/@aivue/voice-actions) | Voice commands |
| 9 | [@aivue/emotion-ui](#9-emotion-ui) | ![v](https://img.shields.io/npm/v/@aivue/emotion-ui) | ![d](https://img.shields.io/npm/dm/@aivue/emotion-ui) | Emotion-aware UI |
| 10 | [@aivue/predictive-input](#10-predictive-input) | ![v](https://img.shields.io/npm/v/@aivue/predictive-input) | ![d](https://img.shields.io/npm/dm/@aivue/predictive-input) | Predictive text |
| 11 | [@aivue/doc-intelligence](#11-doc-intelligence) | ![v](https://img.shields.io/npm/v/@aivue/doc-intelligence) | ![d](https://img.shields.io/npm/dm/@aivue/doc-intelligence) | Document OCR |
| 12 | [@aivue/smart-notify](#12-smart-notify) | ![v](https://img.shields.io/npm/v/@aivue/smart-notify) | ![d](https://img.shields.io/npm/dm/@aivue/smart-notify) | Smart notifications |
| 13 | [@aivue/analytics](#13-analytics) | ![v](https://img.shields.io/npm/v/@aivue/analytics) | ![d](https://img.shields.io/npm/dm/@aivue/analytics) | AI analytics |

---

## 🚀 Installation

### Quick Install

```bash
# Install core (required for all packages)
npm install @aivue/core

# Install any UI component
npm install @aivue/chatbot
npm install @aivue/smartform
npm install @aivue/smart-datatable
# ... etc
```

### Install All Packages

```bash
npm install @aivue/core @aivue/chatbot @aivue/smartform @aivue/smart-datatable @aivue/autosuggest @aivue/360-spin @aivue/image-caption @aivue/voice-actions @aivue/emotion-ui @aivue/predictive-input @aivue/doc-intelligence @aivue/smart-notify @aivue/analytics
```

---

## 1. Core

**Foundation package for all AIVue components**

### Features

- 🔌 **Multi-Provider Support** - OpenAI, Claude, Gemini, HuggingFace, Ollama, DeepSeek
- 🌐 **Fallback Mechanism** - Works without API keys during development
- 🔄 **Streaming Support** - Real-time streaming responses
- 🛡️ **Type Safety** - Full TypeScript support
- 🧩 **Modular Design** - Use only what you need
- 🔧 **Customizable** - Configure providers, models, parameters

### Installation

```bash
npm install @aivue/core
```

### Usage

#### Vue 3
```vue
<script setup>
import { AIClient } from '@aivue/core';

const client = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: 'gpt-4o'
});

async function chat() {
  const response = await client.chat([
    { role: 'user', content: 'Hello!' }
  ]);
  console.log(response);
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
      })
    };
  },
  methods: {
    async chat() {
      const response = await this.client.chat([
        { role: 'user', content: 'Hello!' }
      ]);
      console.log(response);
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
  selector: 'app-ai',
  template: `<button (click)="chat()">Chat</button>`
})
export class AiComponent {
  private client: AIClient;

  constructor() {
    this.client = new AIClient({
      provider: 'openai',
      apiKey: environment.openaiApiKey,
      model: 'gpt-4o'
    });
  }

  async chat() {
    const response = await this.client.chat([
      { role: 'user', content: 'Hello!' }
    ]);
    console.log(response);
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

function AiComponent() {
  const [response, setResponse] = useState('');

  async function chat() {
    const result = await client.chat([
      { role: 'user', content: 'Hello!' }
    ]);
    setResponse(result);
  }

  return <button onClick={chat}>Chat</button>;
}
```

### Configuration

```typescript
interface AIClientConfig {
  provider: 'openai' | 'anthropic' | 'gemini' | 'huggingface' | 'ollama' | 'deepseek';
  apiKey?: string;
  model?: string;
  temperature?: number;      // 0-1, default: 0.7
  maxTokens?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  baseURL?: string;
}
```

### Supported Providers

| Provider | Models | Streaming | Vision |
|----------|--------|-----------|--------|
| OpenAI | gpt-4o, gpt-4-turbo, gpt-3.5-turbo | ✅ | ✅ |
| Claude | claude-3-7-sonnet, claude-3-opus | ✅ | ✅ |
| Gemini | gemini-pro, gemini-pro-vision | ✅ | ✅ |
| Ollama | llama2, mistral, codellama | ✅ | ❌ |
| HuggingFace | Various models | ✅ | ✅ |
| DeepSeek | deepseek-chat, deepseek-coder | ✅ | ❌ |

### Streaming

```typescript
client.chatStream(
  [{ role: 'user', content: 'Write a poem' }],
  {
    onStart: () => console.log('Started'),
    onToken: (token) => console.log(token),
    onComplete: (text) => console.log('Done:', text),
    onError: (error) => console.error(error)
  }
);
```

---

## 2. Chatbot

**Enterprise-grade AI chat with RAG support**

### Features

#### Core
- 💬 **Chat Interface** - Beautiful, customizable UI
- 🗄️ **Database Storage** - localStorage, Supabase, Firebase, MongoDB, PostgreSQL
- 🎤 **Voice Integration** - Speech-to-text, text-to-speech
- 🤖 **Multi-Model AI** - Switch between providers
- 📊 **Analytics** - Usage metrics, insights
- 🧵 **Threading** - Organize by topics
- 📎 **File Attachments** - PDFs, images, audio
- 👥 **Collaboration** - Shared conversations
- 🔒 **Security** - Encryption, privacy
- 🔒 **Proxy Support** - Secure API requests
- 🌍 **i18n** - 5 languages

#### RAG (v2.5.0+)
- 📄 **Document Upload** - PDFs, text files
- 🔗 **URL Scraping** - Web pages as knowledge
- 🧠 **Smart Retrieval** - Find relevant info
- 💡 **Context Injection** - Seamless integration
- 💾 **Persistent Storage** - localStorage
- 🎯 **Relevance Scoring** - TF-IDF ranking
- 🔧 **Customizable** - Configure parameters

### Installation

```bash
npm install @aivue/chatbot @aivue/core
```

### Usage

#### Vue 3 - Simple Chat
```vue
<template>
  <AiChatWindow
    provider="openai"
    :api-key="apiKey"
    model="gpt-4o"
    title="AI Assistant"
  />
</template>

<script setup>
import { AiChatWindow } from '@aivue/chatbot';
import '@aivue/chatbot/dist/chatbot.css';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
</script>
```


