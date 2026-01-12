# 📦 AIVue Packages - Complete Documentation

> **Comprehensive guide for all @aivue packages with detailed features and instructions for creating Angular and React versions**

**Author**: reachbrt  
**Organization**: @aivue  
**Repository**: https://github.com/reachbrt/vueai  
**NPM**: https://www.npmjs.com/org/aivue  
**Demo**: https://aivue.netlify.app/  

---

## 📋 Table of Contents

1. [Package Overview](#package-overview)
2. [Core Package](#1-aivuecore)
3. [UI Components](#ui-components)
4. [AI Features](#ai-features)
5. [Utilities](#utilities)
6. [Architecture & Design Patterns](#architecture--design-patterns)
7. [Creating Angular Version](#creating-angular-version)
8. [Creating React Version](#creating-react-version)
9. [Common Implementation Patterns](#common-implementation-patterns)
10. [Deployment & Publishing](#deployment--publishing)

---

## 📦 Package Overview

### All Packages (17 Total)

| Package | Version | Downloads | Description |
|---------|---------|-----------|-------------|
| [@aivue/core](#1-aivuecore) | Latest | 360/month | Core AI functionality - Multi-provider AI client |
| [@aivue/chatbot](#2-aivuechatbot) | v2.5.0 | 501/month | Enterprise AI chat with RAG, voice, storage |
| [@aivue/autosuggest](#3-aivueautosuggest) | Latest | 169/month | AI-powered smart suggestions |
| [@aivue/smartform](#4-aivuesmartform) | Latest | 164/month | AI form validation & auto-correction |
| [@aivue/analytics](#5-aivueanalytics) | Latest | 97/month | AI-powered analytics & insights |
| [@aivue/image-caption](#6-aivueimage-caption) | Latest | - | AI image captioning with GPT-4 Vision |
| [@aivue/emotion-ui](#7-aivueemotion-ui) | v1.0.1 | 274/month | Emotion-aware adaptive UI components |
| [@aivue/doc-intelligence](#8-aivuedoc-intelligence) | v1.0.1 | 285/month | Document OCR & intelligent extraction |
| [@aivue/predictive-input](#9-aivuepredictive-input) | v1.0.2 | 283/month | AI predictive text completion |
| [@aivue/smart-notify](#10-aivuesmart-notify) | Latest | 196/month | AI-powered smart notifications |
| [@aivue/voice-actions](#11-aivuevoice-actions) | Latest | 185/month | Voice commands & speech recognition |
| [@aivue/smart-datatable](#12-aivuesmart-datatable) | Latest | 188/month | AI-native data tables with NLP queries |
| [@aivue/360-spin](#13-aivue360-spin) | v2.0.0 | - | Interactive 360° product viewer |
| [@aivue/ai-360-generator](#14-aivueai-360-generator) | Latest | - | AI-powered 360° view generation |
| [@aivue/chatbot-server](#15-aivuechatbot-server) | Latest | - | Backend utilities for chatbot |
| [@aivue/chatbot-storage](#16-aivuechatbot-storage) | Latest | - | Storage integration for chatbot |

---

## 1. @aivue/core

**The Foundation Package** - All other packages depend on this

### 🎯 Purpose
Unified interface for multiple AI providers with consistent API across OpenAI, Claude, Gemini, HuggingFace, Ollama, DeepSeek, and more.

### ✨ Key Features
- 🔌 **Multi-provider support** - 7+ AI providers with single API
- 🌐 **Fallback mechanism** - Works without API keys in development
- 🔄 **Streaming support** - Real-time AI response streaming
- 🛡️ **Type safety** - Full TypeScript support
- 🧩 **Modular design** - Use only what you need
- 🔧 **Customizable** - Configure providers, models, parameters

### 📦 Installation
```bash
npm install @aivue/core
```

### 🚀 Basic Usage
```javascript
import { AIClient } from '@aivue/core';

const client = new AIClient({
  provider: 'openai',
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-4o'
});

// Chat
const response = await client.chat([
  { role: 'user', content: 'Hello!' }
]);

// Streaming
client.chatStream(
  [{ role: 'user', content: 'Write a poem' }],
  {
    onToken: (token) => console.log(token),
    onComplete: (text) => console.log('Done:', text)
  }
);
```

### 🔑 Supported Providers
1. **OpenAI** - GPT-4, GPT-4o, GPT-3.5-turbo
2. **Anthropic** - Claude 3.7 Sonnet, Claude 3 Opus
3. **Google** - Gemini Pro, Gemini Ultra
4. **HuggingFace** - Open-source models
5. **Ollama** - Local LLM deployment
6. **DeepSeek** - DeepSeek models
7. **Fallback** - Mock responses for development

### 📁 File Structure
```
packages/core/
├── src/
│   ├── index.ts              # Main exports
│   ├── types/                # TypeScript definitions
│   ├── providers/            # AI provider implementations
│   │   ├── openai.ts
│   │   ├── claude.ts
│   │   ├── gemini.ts
│   │   ├── huggingface.ts
│   │   ├── ollama.ts
│   │   ├── deepseek.ts
│   │   └── fallback.ts
│   └── utils/                # Utility functions
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## UI Components

## 2. @aivue/chatbot

**Enterprise-Grade Conversational AI**

### 🎯 Purpose
Production-ready AI chatbot with advanced features: database storage, voice integration, RAG, multi-model support, and analytics.

### ✨ Key Features

#### Core Features
- 💬 **Conversational UI** - Modern chat interface with typing indicators
- 🗄️ **Database Storage** - localStorage, Supabase, Firebase, MongoDB, PostgreSQL
- 🎤 **Voice Integration** - Speech-to-text input, text-to-speech responses
- 🤖 **Multi-Model AI** - Intelligent switching between AI providers
- 📊 **Analytics Dashboard** - Usage metrics, conversation insights
- 🧵 **Conversation Threading** - Organize chats by topics
- 📎 **File Attachments** - PDFs, documents, images, audio
- 👥 **Collaborative Features** - Shared conversations, team workspaces

#### Advanced Features (v2.0+)
- 🔒 **Proxy Support** - Secure API requests through proxy servers
- 🌍 **Internationalization** - 5 languages with customizable texts
- 📚 **RAG Support** - Retrieval-Augmented Generation with knowledge base
- 🔐 **Privacy & Security** - End-to-end encryption, local storage
- 🎨 **Multiple Themes** - Light, dark, and custom themes
- 📱 **Responsive Design** - Mobile-first approach

### 📦 Installation
```bash
npm install @aivue/chatbot @aivue/core
```

### 🚀 Basic Usage
```vue
<template>
  <AiChatWindow
    provider="openai"
    :api-key="apiKey"
    model="gpt-4o"
    placeholder="Ask me anything..."
  />
</template>

<script setup>
import { AiChatWindow } from '@aivue/chatbot';
import '@aivue/chatbot/dist/chatbot.css';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
</script>
```

### 🔥 Advanced Usage - RAG (v2.5.0)
```vue
<template>
  <AiChatRAG
    provider="openai"
    :api-key="apiKey"
    model="gpt-4o"
    :rag-config="{
      enabled: true,
      topK: 3,
      chunkSize: 500
    }"
  />
</template>
```

### 📁 File Structure
```
packages/chatbot/
├── src/
│   ├── components/
│   │   ├── AiChatWindow.vue       # Main chat component
│   │   ├── AiChatRAG.vue          # RAG-enabled chat
│   │   ├── ChatMessage.vue        # Message component
│   │   └── ChatInput.vue          # Input component
│   ├── composables/
│   │   ├── useChatbot.ts          # Main composable
│   │   ├── useRAG.ts              # RAG functionality
│   │   └── useVoice.ts            # Voice features
│   ├── types/                     # TypeScript types
│   ├── utils/                     # Utilities
│   └── index.ts
├── tests/                         # Unit tests
├── package.json
└── vite.config.ts
```

---

## 3. @aivue/autosuggest

**AI-Powered Smart Suggestions**

### 🎯 Purpose
Intelligent, context-aware suggestions for forms, search boxes, and text inputs powered by AI.

### ✨ Key Features
- 🔍 **Smart suggestions** - Context-aware AI-powered suggestions
- ⚡ **Fast & responsive** - Optimized with debouncing
- 🧠 **Multiple AI providers** - Works with all @aivue/core providers
- 🎯 **Relevance scoring** - Suggestions ranked by relevance
- 🔧 **Customizable** - Easy styling and configuration
- 📱 **Mobile-friendly** - Responsive design
- 🛡️ **Type safety** - Full TypeScript support

### 📦 Installation
```bash
npm install @aivue/autosuggest @aivue/core
```

### 🚀 Basic Usage
```vue
<template>
  <Autosuggest
    v-model="searchQuery"
    :client="aiClient"
    placeholder="Search..."
    :debounce="300"
    :min-length="2"
    @suggestion-selected="handleSelection"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Autosuggest } from '@aivue/autosuggest';
import { AIClient } from '@aivue/core';

const searchQuery = ref('');
const aiClient = new AIClient({
  provider: 'openai',
  apiKey: process.env.VITE_OPENAI_API_KEY
});
</script>
```

---

## 4. @aivue/smartform

**AI Form Validation & Auto-Correction**

### 🎯 Purpose
Intelligent form validation that understands user intent and provides helpful, context-aware feedback.

### ✨ Key Features
- 🧠 **AI-powered validation** - Contextual validation with user intent understanding
- 🔄 **Self-healing forms** - Automatically fix common input errors
- 📝 **Helpful error messages** - Human-like explanations
- 🛡️ **Traditional validation** - Combine with standard rules
- 🎯 **Field-level validation** - Apply AI to specific fields
- 🔧 **Customizable** - Easy integration with existing forms
- 📱 **Mobile-friendly** - Responsive design

### 📦 Installation
```bash
npm install @aivue/smartform @aivue/core
```

### 🚀 Basic Usage
```vue
<template>
  <SmartForm
    :schema="formSchema"
    :form-data="formData"
    :errors="errors"
    @change="handleChange"
    @submit="handleSubmit"
  />
</template>

<script setup>
import { ref } from 'vue';
import { SmartForm, useSmartValidation } from '@aivue/smartform';

const formData = ref({
  email: '',
  phone: '',
  address: ''
});

const formSchema = {
  email: { type: 'email', required: true, aiValidation: true },
  phone: { type: 'tel', required: true, aiValidation: true },
  address: { type: 'text', required: false, aiValidation: true }
};
</script>
```

---

## 5. @aivue/analytics

**AI-Powered Analytics & Insights**

### 🎯 Purpose
Track user interactions, monitor AI usage, analyze conversations, and gain valuable insights with beautiful dashboard components.

### ✨ Key Features
- 📊 **Real-time Analytics** - Track interactions and AI usage
- 🤖 **AI-Powered Insights** - Generate intelligent insights from data
- 💬 **Conversation Analytics** - Analyze chat patterns, sentiment, topics
- 📈 **Beautiful Dashboards** - Pre-built Vue components for visualization
- 🔍 **Performance Monitoring** - Track response times and error rates
- 📱 **Responsive Design** - Works on all screen sizes
- 🎨 **Customizable** - Flexible theming and configuration
- 🔒 **Privacy-First** - Local storage by default

### 📦 Installation
```bash
npm install @aivue/analytics @aivue/core
```

### 🚀 Basic Usage
```vue
<template>
  <AiAnalyticsDashboard
    :ai-client="aiClient"
    :show-conversation-analytics="true"
  />
</template>

<script setup>
import { AiAnalyticsDashboard, useAnalytics } from '@aivue/analytics';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: process.env.VITE_OPENAI_API_KEY
});

const analytics = useAnalytics({
  config: {
    enabled: true,
    trackInteractions: true,
    trackAIRequests: true
  },
  aiClient
});
</script>
```

---

## 6. @aivue/image-caption

**AI Image Captioning with GPT-4 Vision**

### 🎯 Purpose
Generate intelligent, contextual captions for images using GPT-4 Vision for accessibility, content management, and social media.

### ✨ Key Features
- 🤖 **GPT-4 Vision** - Most advanced image understanding AI
- 🎯 **Easy Integration** - Drop-in Vue component
- 📱 **Drag & Drop Upload** - Intuitive file upload with preview
- 🌐 **URL Support** - Caption images from URLs
- 📊 **Batch Processing** - Process multiple images at once
- 📈 **History Tracking** - Keep track of generated captions
- 💾 **Export Data** - Export captions as JSON or CSV
- 🎨 **Beautiful UI** - Modern, responsive design

### 📦 Installation
```bash
npm install @aivue/image-caption
```

### 🚀 Basic Usage
```vue
<template>
  <AiImageCaption
    :api-key="openaiApiKey"
    @caption-generated="onCaptionGenerated"
  />
</template>

<script setup>
import { AiImageCaption } from '@aivue/image-caption';
import '@aivue/image-caption/dist/image-caption.css';

const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

const onCaptionGenerated = (result) => {
  console.log('Caption:', result.caption);
};
</script>
```

---

## 7. @aivue/emotion-ui

**Emotion-Aware Adaptive UI Components**

### 🎯 Purpose
UI components that adapt based on user sentiment detected from text, voice, and interaction patterns.

### ✨ Key Features

#### Multi-Modal Emotion Detection
- **Text Sentiment Analysis** - Detect emotions from text input
- **Voice Tone Analysis** - Analyze pitch, speed, energy
- **Typing Pattern Analysis** - Track speed, corrections, pauses
- **Click/Interaction Patterns** - Identify rage clicks, hesitation
- **Facial Expression Detection** - Optional webcam-based detection

#### Adaptive UI Components
- **EmotionAwareInput** - Input fields that adapt to user mood
- **EmotionAwareButton** - Buttons that adjust based on emotional context
- **EmotionAwareNotification** - Empathetic notifications
- **Smart Validation** - Context-aware error messages
- **Dynamic Placeholders** - Encouraging placeholders

#### Smart Intervention System
- **Frustration Detection** - Detect when users are struggling
- **Contextual Help** - Offer assistance when confusion detected
- **Positive Reinforcement** - Celebrate successes
- **Adaptive Error Messages** - Gentler messages when frustrated
- **UI Simplification** - Reduce complexity when stress detected

### 📦 Installation
```bash
npm install @aivue/emotion-ui @aivue/core
```

### 🚀 Basic Usage
```vue
<template>
  <div>
    <EmotionAwareInput
      v-model="username"
      label="Username"
      placeholder="Enter your username"
      :validation-message="usernameError"
      validation-state="error"
    />

    <EmotionAwareButton
      text="Submit"
      variant="primary"
      encouraging-text="You've got this!"
      @click="handleSubmit"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { EmotionAwareInput, EmotionAwareButton } from '@aivue/emotion-ui';

const username = ref('');
const usernameError = ref('');
</script>
```

---

## 8. @aivue/doc-intelligence

**Document OCR & Intelligent Extraction**

### 🎯 Purpose
AI-powered document parser and extractor - Upload PDFs/images, extract structured data from invoices, receipts, forms, and IDs.

### ✨ Key Features

#### Multi-Format Document Support
- **PDF Processing** - Extract text from PDF documents
- **Image Processing** - PNG, JPG, JPEG support
- **Drag & Drop Upload** - Intuitive file upload
- **Multi-File Processing** - Process multiple documents

#### Intelligent Document Understanding
- **Document Type Detection** - Auto-identifies invoices, receipts, forms, IDs, passports, licenses, business cards, contracts
- **AI-Powered Classification** - Optional AI enhancement
- **Pattern Matching** - Fast, offline detection

#### OCR & Text Extraction
- **Offline OCR** - Uses Tesseract.js for privacy
- **Multi-Language Support** - 100+ languages
- **High Accuracy** - Advanced OCR with confidence scores
- **PDF Text Extraction** - Native extraction with OCR fallback

#### Entity Recognition
- **Dates** - Various formats
- **Monetary Amounts** - Currency values
- **Names** - Person and company names
- **Email Addresses** - Contact extraction
- **Phone Numbers** - Multiple formats
- **Addresses** - Street addresses
- **Invoice Numbers** - Receipt/invoice IDs
- **Tax IDs** - Tax identification numbers

### 📦 Installation
```bash
npm install @aivue/doc-intelligence
```

### 🚀 Basic Usage
```vue
<template>
  <div>
    <DocumentUpload
      @files-selected="handleFilesSelected"
      :multiple="true"
      :max-file-size="10"
    />

    <DocumentViewer
      v-if="currentDocument"
      :document-url="currentDocument.url"
      :extracted-data="currentDocument.extractedData"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DocumentUpload, DocumentViewer } from '@aivue/doc-intelligence';

const currentDocument = ref(null);

const handleFilesSelected = (files) => {
  console.log('Files:', files);
};
</script>
```

---

## 9. @aivue/predictive-input

**AI Predictive Text Completion**

### 🎯 Purpose
Transform text inputs with intelligent, AI-powered predictions and smart text completions.

### ✨ Key Features
- 🎯 **Smart Predictions** - AI-powered text predictions
- **Context-Aware** - Understands context for better predictions
- **Text Completion** - Suggests complete thoughts and phrases
- **Confidence Scoring** - Shows prediction reliability
- 🤖 **AI Integration** - Works with multiple providers
- ⚡ **Performance** - Lightweight, fast, responsive
- **Keyboard Navigation** - Full keyboard support

### 📦 Installation
```bash
npm install @aivue/predictive-input
```

### 🚀 Basic Usage
```vue
<template>
  <PredictiveInput
    v-model="text"
    :client="aiClient"
    placeholder="Start typing..."
    @prediction-selected="handlePrediction"
  />
</template>

<script setup>
import { ref } from 'vue';
import { PredictiveInput } from '@aivue/predictive-input';
import { AIClient } from '@aivue/core';

const text = ref('');
const aiClient = new AIClient({
  provider: 'openai',
  apiKey: process.env.VITE_OPENAI_API_KEY
});
</script>
```

---

## 10. @aivue/smart-notify

**AI-Powered Smart Notifications**

### 🎯 Purpose
Context-aware notification system with AI-powered prioritization, intelligent timing, and user attention detection.

### ✨ Key Features
- 🎯 **AI-Powered Urgency Detection** - Auto-classifies notification urgency using NLP
- ⏰ **Optimal Timing Prediction** - Learns when users engage most
- 📁 **Intelligent Grouping** - Groups related notifications using semantic similarity
- 👁️ **Attention Detection** - Respects user focus
- 📦 **Smart Batching** - Reduces interruptions
- 🎨 **Personalized Styles** - Priority-based visual styling
- 💾 **Offline Learning** - Client-side AI processing
- 🔒 **Privacy-Focused** - No data leaves device

### 📦 Installation
```bash
npm install @aivue/smart-notify
```

### 🚀 Basic Usage
```vue
<template>
  <div>
    <NotificationCenter :show-stats="true" />
    <button @click="sendNotification">Send Notification</button>
  </div>
</template>

<script setup>
import { NotificationCenter, useSmartNotify } from '@aivue/smart-notify';
import '@aivue/smart-notify/dist/smart-notify.css';

const { notify } = useSmartNotify();

const sendNotification = () => {
  notify({
    title: 'New Message',
    message: 'You have a new message',
    category: 'message',
    priority: 'high'
  });
};
</script>
```

---

## 11. @aivue/voice-actions

**Voice Commands & Speech Recognition**

### 🎯 Purpose
AI-powered voice command controller with speech recognition, natural language processing, and custom actions.

### ✨ Key Features

#### Core Features
- 🎤 **Speech Recognition** - Real-time voice-to-text
- 🗣️ **Text-to-Speech** - Voice feedback for commands
- 🤖 **AI Processing** - Natural language understanding
- ⚡ **Custom Commands** - Register custom voice commands
- 🔄 **Continuous Mode** - Keep listening for commands
- 👂 **Wake Word Detection** - Activate with custom wake words
- 🌍 **Multi-language** - Support for 12+ languages
- 📊 **Command History** - Track executed commands

#### UI Features
- 🎨 **Customizable Themes** - Light and dark mode
- 📱 **Responsive Design** - Works on all devices
- 🔊 **Volume Indicator** - Visual audio feedback
- 💬 **Live Transcript** - Real-time transcription
- ✅ **Confidence Score** - Visual confidence indicator
- 💡 **Smart Suggestions** - Contextual command suggestions

### 📦 Installation
```bash
npm install @aivue/voice-actions @aivue/core
```

### 🚀 Basic Usage
```vue
<template>
  <VoiceActions
    :ai-client="aiClient"
    :commands="commands"
    show-transcript
    show-suggestions
    voice-feedback
    @command="handleCommand"
  />
</template>

<script setup>
import { VoiceActions } from '@aivue/voice-actions';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: process.env.VITE_OPENAI_API_KEY
});

const commands = [
  {
    pattern: /open (.*)/i,
    action: (matches) => {
      window.location.href = `/${matches[1]}`;
    },
    description: 'Open a page'
  }
];
</script>
```

---

## 12. @aivue/smart-datatable

**AI-Native Data Tables with NLP Queries**

### 🎯 Purpose
The world's first truly AI-powered datatable that understands your data, not just displays it.

### ✨ Key Features

#### AI-Native Features
- 🗣️ **Natural Language Querying** - "show orders from India last 30 days where total > 500"
- 🧠 **Auto-Insights** - One-click AI analysis with trends, outliers, recommendations
- 🤖 **Row Agents** - AI operations on individual rows (explain, predict, generate)
- ✨ **AI Transformations** - Intelligent data cleaning, enrichment, standardization
- 💬 **Chat Interface** - Conversational queries about your data
- 📋 **OpenAPI Integration** - Auto-generate columns from API schemas

#### Traditional Features
- 📊 **Sorting & Filtering** - Multi-column sorting, advanced filters
- 📄 **Pagination** - Client and server-side pagination
- 🔍 **Search** - Global and column-specific search
- 📱 **Responsive** - Mobile-friendly design
- 🎨 **Customizable** - Themes, styling, templates
- 📤 **Export** - CSV, JSON, Excel export

### 📦 Installation
```bash
npm install @aivue/smart-datatable @aivue/core
```

### 🚀 Basic Usage
```vue
<template>
  <SmartDataTable
    :data="orders"
    :columns="columns"
    :ai-client="aiClient"
    :ai-search="true"
    :ai-insights="true"
  />
</template>

<script setup>
import { ref } from 'vue';
import { SmartDataTable } from '@aivue/smart-datatable';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: process.env.VITE_OPENAI_API_KEY
});

const orders = ref([
  { id: 1, customer: 'John', product: 'Laptop', total: 1200 },
  { id: 2, customer: 'Jane', product: 'Phone', total: 800 }
]);

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'customer', label: 'Customer' },
  { key: 'product', label: 'Product' },
  { key: 'total', label: 'Total', type: 'currency' }
];
</script>
```

---

## 13. @aivue/360-spin

**Interactive 360° Product Viewer**

### 🎯 Purpose
Interactive 360-degree product image spin component with AI-powered generation capabilities.

### ✨ Key Features

#### Viewer Features
- 🔄 **360° Rotation** - Smooth product rotation
- 🖱️ **Multiple Triggers** - Hover, click, auto-play
- 📱 **Touch Support** - Drag to spin on mobile
- 🎬 **GIF & Frame Modes** - Support for GIF or frame sequences
- ⚡ **Performance** - Optimized with image preloading
- 🎨 **Customizable** - Styling, speed, behavior
- 📐 **Responsive** - Adapts to container size

#### AI Generator Features (NEW!)
- 📤 **Upload & Generate** - Upload one image, get 360° views
- 🎨 **OpenAI DALL-E 3** - High-quality AI-generated frames
- 🔄 **Stability AI Support** - Alternative AI provider
- 🎯 **Customizable** - Frame count (12/24/36/72), background, quality
- 📊 **Real-time Progress** - Track generation progress
- 💾 **Download Frames** - Export all generated frames
- 🔍 **Vision Analysis** - GPT-4 Vision analyzes product

### 📦 Installation
```bash
npm install @aivue/360-spin
```

### 🚀 Basic Usage - Viewer
```vue
<template>
  <Ai360Spin
    :static-image="product.thumbnail"
    :animated-image="product.frames"
    mode="frames"
    trigger="hover"
    :enable-drag-spin="true"
  />
</template>

<script setup>
import { Ai360Spin } from '@aivue/360-spin';
import '@aivue/360-spin/360-spin.css';

const product = {
  thumbnail: '/product-0.jpg',
  frames: [
    '/product-0.jpg',
    '/product-10.jpg',
    '/product-20.jpg',
    // ... more frames
  ]
};
</script>
```

### 🚀 Advanced Usage - AI Generator
```vue
<template>
  <Ai360Generator
    provider="openai"
    :api-key="apiKey"
    :frame-count="36"
    @frames-generated="handleFrames"
  />
</template>

<script setup>
import { Ai360Generator } from '@aivue/360-spin';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const handleFrames = (frames) => {
  console.log('Generated frames:', frames);
};
</script>
```

---

## 14. @aivue/ai-360-generator

**AI-Powered 360° View Generation**

### 🎯 Purpose
Transform a single product image into a complete 360° rotation view using AI (OpenAI DALL-E 3 or Stability AI).

### ✨ Key Features
- 🤖 **AI-Powered Generation** - Uses DALL-E 3 or Stability AI
- 📸 **Single Image Input** - Upload one photo, get 36 frames
- 🔄 **Complete 360° Rotation** - Views from all angles
- 🎨 **Customizable Output** - Frame count, quality, background color
- 📊 **Real-time Progress** - Live updates during generation
- 💾 **Export Options** - Download frames or complete sequence
- 🎬 **360° Viewer Integration** - Works with @aivue/360-spin

### 📦 Installation
```bash
npm install @aivue/ai-360-generator @aivue/core
```

---

## 15. @aivue/chatbot-server

**Backend Utilities for Chatbot**

### 🎯 Purpose
Server-side utilities and database integration for the chatbot package.

### ✨ Key Features
- 🗄️ **Database Models** - Sequelize/Mongoose models for conversations and messages
- 🔐 **Authentication** - User authentication utilities
- 📡 **API Endpoints** - RESTful API for chat operations
- 💾 **Storage Adapters** - Multiple database support

---

## 16. @aivue/chatbot-storage

**Storage Integration for Chatbot**

### 🎯 Purpose
Storage adapters for persisting chat conversations across different storage providers.

### ✨ Key Features
- 💾 **localStorage** - Browser local storage
- 🔥 **Firebase** - Firebase Realtime Database
- 🗄️ **Supabase** - Supabase PostgreSQL
- 🍃 **MongoDB** - MongoDB Atlas
- 🐘 **PostgreSQL** - Direct PostgreSQL connection

---

## Architecture & Design Patterns

### 🏗️ Monorepo Structure

```
vueai/
├── packages/                    # All @aivue packages
│   ├── core/                   # Foundation package
│   ├── chatbot/                # Chat components
│   ├── autosuggest/            # Suggestion components
│   ├── smartform/              # Form validation
│   ├── analytics/              # Analytics & insights
│   ├── image-caption/          # Image captioning
│   ├── emotion-ui/             # Emotion-aware UI
│   ├── doc-intelligence/       # Document processing
│   ├── predictive-input/       # Predictive text
│   ├── smart-notify/           # Smart notifications
│   ├── voice-actions/          # Voice commands
│   ├── smart-datatable/        # AI data tables
│   ├── 360-spin/               # 360° viewer
│   ├── ai-360-generator/       # AI 360° generation
│   ├── chatbot-server/         # Backend utilities
│   └── chatbot-storage/        # Storage adapters
├── demo/                       # Live demo application
├── scripts/                    # Build & deployment scripts
├── docs/                       # Documentation
├── package.json                # Root package.json
└── README.md                   # Main README
```

### 🎨 Common Design Patterns

#### 1. **Composable Pattern**
All packages provide Vue composables for programmatic usage:

```typescript
// Example: useAnalytics composable
import { useAnalytics } from '@aivue/analytics';

const analytics = useAnalytics({
  config: { enabled: true },
  aiClient
});

// Track events
analytics.track('button_click', { button: 'submit' });
```

#### 2. **Component Pattern**
Pre-built Vue components for quick integration:

```vue
<template>
  <AiChatWindow
    provider="openai"
    :api-key="apiKey"
  />
</template>
```

#### 3. **Provider Pattern**
Unified interface for multiple AI providers:

```typescript
// All providers implement the same interface
const client = new AIClient({
  provider: 'openai' | 'claude' | 'gemini' | 'ollama'
});
```

#### 4. **Event-Driven Pattern**
Components emit events for parent communication:

```vue
<AiChatWindow
  @message-sent="handleMessage"
  @error="handleError"
  @typing="handleTyping"
/>
```

### 🔧 Build Configuration

Each package uses:
- **Vite** - Fast build tool
- **TypeScript** - Type safety
- **tsup** - TypeScript bundler (some packages)
- **Vitest** - Unit testing (where applicable)

### 📦 Package.json Structure

```json
{
  "name": "@aivue/package-name",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./dist/*.css": "./dist/*.css"
  },
  "files": ["dist"],
  "scripts": {
    "build": "vite build && tsc --emitDeclarationOnly",
    "dev": "vite build --watch",
    "test": "vitest"
  },
  "peerDependencies": {
    "vue": "^2.6.0 || ^3.0.0"
  },
  "dependencies": {
    "@aivue/core": "workspace:*"
  }
}
```

---

## Creating Angular Version

### 📋 Project Setup

#### 1. Create New Angular Project

```bash
# Create new Angular workspace
ng new angularai --routing --style=scss
cd angularai

# Create library workspace
ng generate library @angularai/core
ng generate library @angularai/chatbot
ng generate library @angularai/autosuggest
# ... create all libraries
```

#### 2. Project Structure

```
angularai/
├── projects/
│   ├── angularai-core/          # @angularai/core
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── services/
│   │   │   │   │   └── ai-client.service.ts
│   │   │   │   ├── providers/
│   │   │   │   │   ├── openai.provider.ts
│   │   │   │   │   ├── claude.provider.ts
│   │   │   │   │   └── ...
│   │   │   │   └── models/
│   │   │   │       └── ai-config.model.ts
│   │   │   └── public-api.ts
│   │   └── package.json
│   ├── angularai-chatbot/       # @angularai/chatbot
│   │   ├── src/
│   │   │   ├── lib/
│   │   │   │   ├── components/
│   │   │   │   │   ├── chat-window/
│   │   │   │   │   │   ├── chat-window.component.ts
│   │   │   │   │   │   ├── chat-window.component.html
│   │   │   │   │   │   └── chat-window.component.scss
│   │   │   │   │   ├── chat-message/
│   │   │   │   │   └── chat-input/
│   │   │   │   ├── services/
│   │   │   │   │   └── chatbot.service.ts
│   │   │   │   └── models/
│   │   │   └── public-api.ts
│   │   └── package.json
│   └── ... (other libraries)
├── src/                         # Demo application
│   ├── app/
│   │   ├── pages/
│   │   │   ├── chatbot-demo/
│   │   │   ├── autosuggest-demo/
│   │   │   └── ...
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   └── environments/
├── angular.json
├── package.json
└── tsconfig.json
```

### 🔄 Migration Guide: Vue to Angular

#### Core Package (@angularai/core)

**Vue Version (Composable)**:
```typescript
// Vue composable
import { AIClient } from '@aivue/core';

const client = new AIClient({
  provider: 'openai',
  apiKey: 'key'
});
```

**Angular Version (Service)**:
```typescript
// ai-client.service.ts
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

export interface AIConfig {
  provider: 'openai' | 'claude' | 'gemini';
  apiKey: string;
  model?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AIClientService {
  private config: AIConfig;

  constructor() {}

  configure(config: AIConfig): void {
    this.config = config;
  }

  chat(messages: any[]): Observable<string> {
    return from(this.chatAsync(messages));
  }

  private async chatAsync(messages: any[]): Promise<string> {
    // Implementation similar to Vue version
    const response = await fetch(this.getEndpoint(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`
      },
      body: JSON.stringify({ messages, model: this.config.model })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  }

  private getEndpoint(): string {
    switch (this.config.provider) {
      case 'openai':
        return 'https://api.openai.com/v1/chat/completions';
      case 'claude':
        return 'https://api.anthropic.com/v1/messages';
      default:
        throw new Error(`Unknown provider: ${this.config.provider}`);
    }
  }
}
```

#### Chatbot Component (@angularai/chatbot)

**Vue Version**:
```vue
<template>
  <div class="chat-window">
    <div class="messages">
      <div v-for="msg in messages" :key="msg.id">
        {{ msg.content }}
      </div>
    </div>
    <input v-model="input" @keyup.enter="sendMessage" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AIClient } from '@aivue/core';

const messages = ref([]);
const input = ref('');
const client = new AIClient({ provider: 'openai', apiKey: 'key' });

async function sendMessage() {
  const response = await client.chat([
    { role: 'user', content: input.value }
  ]);
  messages.value.push({ id: Date.now(), content: response });
  input.value = '';
}
</script>
```

**Angular Version**:
```typescript
// chat-window.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { AIClientService } from '@angularai/core';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

@Component({
  selector: 'ai-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  @Input() provider: 'openai' | 'claude' | 'gemini' = 'openai';
  @Input() apiKey: string = '';
  @Input() model: string = 'gpt-4o';

  messages: Message[] = [];
  input: string = '';
  isLoading: boolean = false;

  constructor(private aiClient: AIClientService) {}

  ngOnInit(): void {
    this.aiClient.configure({
      provider: this.provider,
      apiKey: this.apiKey,
      model: this.model
    });
  }

  sendMessage(): void {
    if (!this.input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: this.input
    };

    this.messages.push(userMessage);
    this.isLoading = true;

    this.aiClient.chat([
      { role: 'user', content: this.input }
    ]).subscribe({
      next: (response) => {
        this.messages.push({
          id: Date.now(),
          role: 'assistant',
          content: response
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    });

    this.input = '';
  }
}
```

```html
<!-- chat-window.component.html -->
<div class="chat-window">
  <div class="messages">
    <div *ngFor="let msg of messages"
         [class.user-message]="msg.role === 'user'"
         [class.assistant-message]="msg.role === 'assistant'">
      {{ msg.content }}
    </div>
  </div>

  <div class="input-container">
    <input
      [(ngModel)]="input"
      (keyup.enter)="sendMessage()"
      [disabled]="isLoading"
      placeholder="Type a message..."
    />
    <button (click)="sendMessage()" [disabled]="isLoading">
      Send
    </button>
  </div>
</div>
```

```scss
// chat-window.component.scss
.chat-window {
  display: flex;
  flex-direction: column;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;

  .messages {
    flex: 1;
    overflow-y: auto;
    padding: 20px;

    .user-message {
      background: #007bff;
      color: white;
      padding: 10px;
      border-radius: 8px;
      margin-bottom: 10px;
      max-width: 70%;
      margin-left: auto;
    }

    .assistant-message {
      background: #f1f1f1;
      padding: 10px;
      border-radius: 8px;
      margin-bottom: 10px;
      max-width: 70%;
    }
  }

  .input-container {
    display: flex;
    padding: 15px;
    border-top: 1px solid #ddd;

    input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-right: 10px;
    }

    button {
      padding: 10px 20px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
}
```

### 📦 Package Configuration

**package.json for @angularai/core**:
```json
{
  "name": "@angularai/core",
  "version": "1.0.0",
  "peerDependencies": {
    "@angular/common": "^17.0.0",
    "@angular/core": "^17.0.0"
  },
  "dependencies": {
    "tslib": "^2.3.0"
  },
  "sideEffects": false
}
```

### 🚀 Publishing to NPM

```bash
# Build all libraries
ng build @angularai/core
ng build @angularai/chatbot
ng build @angularai/autosuggest
# ... build all libraries

# Navigate to dist and publish
cd dist/angularai-core
npm publish --access public

cd ../angularai-chatbot
npm publish --access public

# ... publish all libraries
```

---

## Creating React Version

### 📋 Project Setup

#### 1. Create New React Project with Monorepo

```bash
# Create new React project with Vite
npm create vite@latest reactai -- --template react-ts
cd reactai

# Install dependencies
npm install

# Set up monorepo structure
mkdir -p packages/{core,chatbot,autosuggest,smartform,analytics}
```

#### 2. Project Structure

```
reactai/
├── packages/
│   ├── core/                    # @reactai/core
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── AIClient.ts
│   │   │   ├── providers/
│   │   │   │   ├── openai.ts
│   │   │   │   ├── claude.ts
│   │   │   │   └── ...
│   │   │   ├── hooks/
│   │   │   │   └── useAIClient.ts
│   │   │   └── types/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── chatbot/                 # @reactai/chatbot
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── components/
│   │   │   │   ├── ChatWindow.tsx
│   │   │   │   ├── ChatMessage.tsx
│   │   │   │   └── ChatInput.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useChatbot.ts
│   │   │   ├── styles/
│   │   │   │   └── chatbot.css
│   │   │   └── types/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── ... (other packages)
├── demo/                        # Demo application
│   ├── src/
│   │   ├── App.tsx
│   │   ├── pages/
│   │   │   ├── ChatbotDemo.tsx
│   │   │   ├── AutosuggestDemo.tsx
│   │   │   └── ...
│   │   └── main.tsx
│   └── index.html
├── package.json                 # Root package.json
└── tsconfig.json
```

#### 3. Root package.json

```json
{
  "name": "reactai",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*",
    "demo"
  ],
  "scripts": {
    "dev": "npm run dev --workspace demo",
    "build": "npm run build --workspaces",
    "build:core": "npm run build --workspace @reactai/core",
    "build:chatbot": "npm run build --workspace @reactai/chatbot",
    "publish:packages": "npm run build && npm publish --access public --workspaces"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

### 🔄 Migration Guide: Vue to React

#### Core Package (@reactai/core)

**Vue Version (Composable)**:
```typescript
// Vue
import { ref } from 'vue';
import { AIClient } from '@aivue/core';

export function useAI() {
  const client = new AIClient({ provider: 'openai', apiKey: 'key' });
  const response = ref('');

  async function chat(message: string) {
    response.value = await client.chat([{ role: 'user', content: message }]);
  }

  return { response, chat };
}
```

**React Version (Hook)**:
```typescript
// useAIClient.ts
import { useState, useCallback } from 'react';

export interface AIConfig {
  provider: 'openai' | 'claude' | 'gemini';
  apiKey: string;
  model?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useAIClient(config: AIConfig) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const chat = useCallback(async (messages: Message[]): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      const endpoint = getEndpoint(config.provider);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
          messages,
          model: config.model || getDefaultModel(config.provider)
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  const chatStream = useCallback(async (
    messages: Message[],
    onToken: (token: string) => void,
    onComplete?: (fullText: string) => void
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const endpoint = getEndpoint(config.provider);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
          messages,
          model: config.model || getDefaultModel(config.provider),
          stream: true
        })
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter(line => line.trim());

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);
              const token = parsed.choices[0]?.delta?.content || '';
              if (token) {
                fullText += token;
                onToken(token);
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }

      onComplete?.(fullText);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  return { chat, chatStream, isLoading, error };
}

function getEndpoint(provider: string): string {
  switch (provider) {
    case 'openai':
      return 'https://api.openai.com/v1/chat/completions';
    case 'claude':
      return 'https://api.anthropic.com/v1/messages';
    case 'gemini':
      return 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';
    default:
      throw new Error(`Unknown provider: ${provider}`);
  }
}

function getDefaultModel(provider: string): string {
  switch (provider) {
    case 'openai':
      return 'gpt-4o';
    case 'claude':
      return 'claude-3-7-sonnet-20250219';
    case 'gemini':
      return 'gemini-pro';
    default:
      return 'gpt-4o';
  }
}
```

#### Chatbot Component (@reactai/chatbot)

**Vue Version**:
```vue
<template>
  <div class="chat-window">
    <div class="messages">
      <div v-for="msg in messages" :key="msg.id">
        {{ msg.content }}
      </div>
    </div>
    <input v-model="input" @keyup.enter="sendMessage" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AIClient } from '@aivue/core';

const messages = ref([]);
const input = ref('');
const client = new AIClient({ provider: 'openai', apiKey: 'key' });

async function sendMessage() {
  const response = await client.chat([
    { role: 'user', content: input.value }
  ]);
  messages.value.push({ id: Date.now(), content: response });
  input.value = '';
}
</script>
```

**React Version**:
```typescript
// ChatWindow.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useAIClient, Message } from '@reactai/core';
import './ChatWindow.css';

export interface ChatWindowProps {
  provider: 'openai' | 'claude' | 'gemini';
  apiKey: string;
  model?: string;
  placeholder?: string;
  onMessageSent?: (message: Message) => void;
  onError?: (error: Error) => void;
}

interface ChatMessage extends Message {
  id: number;
  timestamp: Date;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  provider,
  apiKey,
  model = 'gpt-4o',
  placeholder = 'Type a message...',
  onMessageSent,
  onError
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { chat, isLoading, error } = useAIClient({
    provider,
    apiKey,
    model
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (error) {
      onError?.(error);
    }
  }, [error, onError]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    onMessageSent?.(userMessage);
    setInput('');

    try {
      const response = await chat([
        { role: 'user', content: userMessage.content }
      ]);

      const assistantMessage: ChatMessage = {
        id: Date.now(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.role === 'user' ? 'user-message' : 'assistant-message'}`}
          >
            <div className="message-content">{msg.content}</div>
            <div className="message-timestamp">
              {msg.timestamp.toLocaleTimeString()}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading || !input.trim()}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};
```

```css
/* ChatWindow.css */
.chat-window {
  display: flex;
  flex-direction: column;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: #f9f9f9;
}

.message {
  margin-bottom: 15px;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.user-message {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-message .message-content {
  background: #007bff;
  color: white;
  padding: 12px 16px;
  border-radius: 18px 18px 4px 18px;
  max-width: 70%;
  word-wrap: break-word;
}

.assistant-message {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.assistant-message .message-content {
  background: white;
  color: #333;
  padding: 12px 16px;
  border-radius: 18px 18px 18px 4px;
  max-width: 70%;
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.message-timestamp {
  font-size: 11px;
  color: #999;
  margin-top: 4px;
}

.input-container {
  display: flex;
  padding: 15px;
  background: white;
  border-top: 1px solid #ddd;
}

.input-container input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 24px;
  margin-right: 10px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.input-container input:focus {
  border-color: #007bff;
}

.input-container button {
  padding: 12px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.input-container button:hover:not(:disabled) {
  background: #0056b3;
}

.input-container button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### 📦 Package Configuration for React

**package.json for @reactai/chatbot**:
```json
{
  "name": "@reactai/chatbot",
  "version": "1.0.0",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./dist/*.css": "./dist/*.css"
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsc && vite build",
    "dev": "vite build --watch"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "dependencies": {
    "@reactai/core": "workspace:*"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

**vite.config.ts**:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactAIChatbot',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@reactai/core'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
```

---

## Common Implementation Patterns

### 🎯 Pattern 1: API Key Management

**Environment Variables** (Recommended):
```bash
# .env
VITE_OPENAI_API_KEY=sk-...
VITE_ANTHROPIC_API_KEY=sk-ant-...
VITE_GOOGLE_API_KEY=...
```

**Usage**:
```typescript
// Vue
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

// Angular
const apiKey = environment.openaiApiKey;

// React
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
```

### 🎯 Pattern 2: Error Handling

**Vue**:
```typescript
import { ref } from 'vue';

const error = ref<Error | null>(null);

try {
  const response = await client.chat(messages);
} catch (err) {
  error.value = err instanceof Error ? err : new Error('Unknown error');
}
```

**Angular**:
```typescript
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

this.aiClient.chat(messages).pipe(
  catchError(error => {
    console.error('Error:', error);
    return of('Error occurred');
  })
).subscribe(response => {
  // Handle response
});
```

**React**:
```typescript
const [error, setError] = useState<Error | null>(null);

try {
  const response = await chat(messages);
} catch (err) {
  setError(err instanceof Error ? err : new Error('Unknown error'));
}
```

### 🎯 Pattern 3: Loading States

**Vue**:
```vue
<template>
  <div>
    <button @click="sendMessage" :disabled="isLoading">
      {{ isLoading ? 'Sending...' : 'Send' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);

async function sendMessage() {
  isLoading.value = true;
  try {
    await client.chat(messages);
  } finally {
    isLoading.value = false;
  }
}
</script>
```

**Angular**:
```typescript
export class ChatComponent {
  isLoading = false;

  sendMessage(): void {
    this.isLoading = true;
    this.aiClient.chat(messages).subscribe({
      next: (response) => {
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}
```

**React**:
```typescript
const [isLoading, setIsLoading] = useState(false);

const sendMessage = async () => {
  setIsLoading(true);
  try {
    await chat(messages);
  } finally {
    setIsLoading(false);
  }
};
```

### 🎯 Pattern 4: Streaming Responses

**Vue**:
```typescript
const streamingText = ref('');

client.chatStream(
  messages,
  {
    onToken: (token) => {
      streamingText.value += token;
    },
    onComplete: (fullText) => {
      console.log('Complete:', fullText);
    }
  }
);
```

**Angular**:
```typescript
streamingText = '';

this.aiClient.chatStream(messages).subscribe({
  next: (token) => {
    this.streamingText += token;
  },
  complete: () => {
    console.log('Complete:', this.streamingText);
  }
});
```

**React**:
```typescript
const [streamingText, setStreamingText] = useState('');

chatStream(
  messages,
  (token) => {
    setStreamingText(prev => prev + token);
  },
  (fullText) => {
    console.log('Complete:', fullText);
  }
);
```

---

## Deployment & Publishing

### 📦 NPM Publishing

#### 1. Build All Packages

**Vue (AIVue)**:
```bash
npm run build:packages
```

**Angular (AngularAI)**:
```bash
ng build @angularai/core
ng build @angularai/chatbot
# ... build all libraries
```

**React (ReactAI)**:
```bash
npm run build --workspaces
```

#### 2. Publish to NPM

```bash
# Login to NPM
npm login

# Publish individual package
cd packages/core
npm publish --access public

# Or publish all workspaces (from root)
npm publish --access public --workspaces
```

#### 3. Version Management

```bash
# Update version
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# Publish with new version
npm publish --access public
```

### 🚀 GitHub Publishing

```bash
# Configure npm for GitHub Packages
echo "@yourorg:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc

# Publish to GitHub
npm publish
```

### 🌐 Netlify Deployment (Demo)

#### 1. Build Configuration

**netlify.toml**:
```toml
[build]
  command = "npm run build"
  publish = "demo/dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 2. Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### 📊 Package Badges

Add to README.md:

```markdown
[![npm version](https://img.shields.io/npm/v/@yourorg/package.svg)](https://www.npmjs.com/package/@yourorg/package)
[![npm downloads](https://img.shields.io/npm/dm/@yourorg/package.svg)](https://www.npmjs.com/package/@yourorg/package)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
```

---

## 🎓 Best Practices

### 1. **TypeScript First**
- Use TypeScript for all packages
- Export type definitions
- Provide comprehensive interfaces

### 2. **Documentation**
- README.md for each package
- Code examples
- API reference
- Migration guides

### 3. **Testing**
- Unit tests for utilities
- Component tests
- Integration tests
- E2E tests for demo

### 4. **Versioning**
- Follow Semantic Versioning (SemVer)
- Maintain CHANGELOG.md
- Document breaking changes

### 5. **Performance**
- Tree-shaking support
- Lazy loading
- Code splitting
- Optimize bundle size

### 6. **Accessibility**
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast

---

## 📞 Support & Resources

- **GitHub**: https://github.com/reachbrt/vueai
- **NPM**: https://www.npmjs.com/org/aivue
- **Demo**: https://aivue.netlify.app/
- **Issues**: https://github.com/reachbrt/vueai/issues
- **Discussions**: https://github.com/reachbrt/vueai/discussions

---

## 📝 License

MIT © [reachbrt](https://github.com/reachbrt)

---

**Created with ❤️ by reachbrt**
**Mentored by Manoj and Thiru**


