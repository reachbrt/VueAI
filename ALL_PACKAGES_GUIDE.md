# 📚 AIVue - Complete Packages Guide

> **All 13 packages with features, usage, and cross-framework implementation**

🌐 **[Live Demo](https://aivue.netlify.app/)** | 📦 **[NPM](https://www.npmjs.com/org/aivue)** | 💻 **[GitHub](https://github.com/reachbrt/vueai)**

---

## 📦 Quick Reference

| Package | Key Features | Use Case |
|---------|--------------|----------|
| **[@aivue/core](#core)** | Multi-provider AI client, streaming | Foundation for all packages |
| **[@aivue/chatbot](#chatbot)** | RAG, voice, storage, i18n | Customer support, assistants |
| **[@aivue/smartform](#smartform)** | AI validation, auto-fix | Forms, surveys |
| **[@aivue/smart-datatable](#smart-datatable)** | NL queries, insights, agents | Data analysis, dashboards |
| **[@aivue/autosuggest](#autosuggest)** | Context-aware suggestions | Search, autocomplete |
| **[@aivue/360-spin](#360-spin)** | Product viewer, AI generation | E-commerce, catalogs |
| **[@aivue/image-caption](#image-caption)** | GPT-4 Vision captions | Accessibility, CMS |
| **[@aivue/voice-actions](#voice-actions)** | Speech recognition, commands | Voice interfaces |
| **[@aivue/emotion-ui](#emotion-ui)** | Sentiment detection, adaptive UI | UX optimization |
| **[@aivue/predictive-input](#predictive-input)** | Text completion | Writing tools |
| **[@aivue/doc-intelligence](#doc-intelligence)** | OCR, entity extraction | Document processing |
| **[@aivue/smart-notify](#smart-notify)** | AI prioritization, timing | Notifications |
| **[@aivue/analytics](#analytics)** | Usage tracking, insights | Analytics dashboards |

---

## 🎯 Installation

```bash
# Core (required)
npm install @aivue/core

# Any component
npm install @aivue/chatbot
npm install @aivue/smartform
# ... etc
```

---

## 📖 Package Details

### 1. Core

**Foundation AI client for all packages**

**Features:**
- ✅ 6 AI providers (OpenAI, Claude, Gemini, Ollama, HuggingFace, DeepSeek)
- ✅ Streaming support
- ✅ TypeScript
- ✅ Fallback mode

**Quick Start:**
```typescript
import { AIClient } from '@aivue/core';

const client = new AIClient({
  provider: 'openai',
  apiKey: 'your-key',
  model: 'gpt-4o'
});

const response = await client.chat([
  { role: 'user', content: 'Hello!' }
]);
```

**Demo Controls:**
- Provider selector
- Model selector
- Temperature slider
- Max tokens input
- Streaming toggle

---

### 2. Chatbot

**Enterprise AI chat with RAG**

**Features:**
- ✅ RAG (document upload, URL scraping)
- ✅ Voice input/output
- ✅ Database storage
- ✅ File attachments
- ✅ Multi-language (5 languages)
- ✅ Proxy support
- ✅ Analytics

**Quick Start:**
```vue
<template>
  <AiChatWindow
    provider="openai"
    :api-key="apiKey"
    model="gpt-4o"
    :rag-config="{ enabled: true, topK: 3 }"
  />
</template>

<script setup>
import { AiChatWindow } from '@aivue/chatbot';
import '@aivue/chatbot/dist/chatbot.css';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
</script>
```

**Demo Controls:**
- Provider/model selector
- Theme toggle (light/dark)
- Voice enable/disable
- RAG enable/disable
- Document upload
- Language selector
- Storage type selector
- Proxy URL input

**Props:**
```typescript
{
  provider: string;
  apiKey: string;
  model: string;
  title: string;
  placeholder: string;
  theme: 'light' | 'dark';
  showTimestamp: boolean;
  enableVoice: boolean;
  enableFileUpload: boolean;
  storage: object;
  ragConfig: {
    enabled: boolean;
    topK: number;
    chunkSize: number;
    chunkOverlap: number;
  };
  proxyUrl: string;
  language: 'en' | 'es' | 'fr' | 'de' | 'zh';
}
```

---

### 3. SmartForm

**AI-powered form validation**

**Features:**
- ✅ 7-stage validation pipeline
- ✅ AI semantic validation
- ✅ Auto-fix errors
- ✅ 12 field types
- ✅ Custom validation
- ✅ Type-specific validation

**Quick Start:**
```vue
<template>
  <SmartForm
    :client="aiClient"
    :schema="schema"
    @submit="handleSubmit"
  />
</template>

<script setup>
import { SmartForm } from '@aivue/smartform';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

const schema = {
  email: {
    type: 'email',
    label: 'Email',
    required: true,
    aiValidation: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  age: {
    type: 'number',
    label: 'Age',
    required: true,
    min: 18,
    max: 120
  }
};

function handleSubmit(data) {
  console.log('Submitted:', data);
}
</script>
```

**Demo Controls:**
- Validation mode (onChange, onBlur, onSubmit)
- AI validation toggle
- Auto-correct toggle
- Field type selector
- Show all field types

**Field Types:**
- text, email, password, number
- date, url, tel
- textarea, select (single/multiple)
- radio, checkbox

**Validation Stages:**
1. Required field check
2. Type-specific validation
3. Min/max length
4. Min/max value
5. Pattern/regex
6. Custom function
7. AI semantic validation

---

### 4. Smart DataTable

**AI-native data tables**

**Features:**
- ✅ Natural language queries
- ✅ Auto-insights
- ✅ Row agents
- ✅ AI transformations
- ✅ Chat interface
- ✅ OpenAPI integration

**Quick Start:**
```vue
<template>
  <SmartDataTable
    :data="orders"
    :ai-client="aiClient"
    :ai-search="true"
    :ai-insights="true"
    :show-chat="true"
  />
</template>

<script setup>
import { SmartDataTable } from '@aivue/smart-datatable';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

const orders = [
  { id: 1, customer: 'John', total: 500, country: 'USA' },
  { id: 2, customer: 'Jane', total: 750, country: 'UK' }
];
</script>
```

**Demo Controls:**
- AI search toggle
- AI insights toggle
- Chat toggle
- Row agents selector
- Transformation selector
- Export format (CSV, JSON, Excel)

---

### 5. AutoSuggest

**AI-powered suggestions**

**Features:**
- ✅ Context-aware suggestions
- ✅ Relevance scoring
- ✅ Debouncing
- ✅ Keyboard navigation

**Quick Start:**
```vue
<template>
  <Autosuggest
    v-model="query"
    :client="aiClient"
    placeholder="Search..."
    :max-suggestions="5"
    context="Vue.js topics"
    @suggestion-selected="handleSelect"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Autosuggest } from '@aivue/autosuggest';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

const query = ref('');

function handleSelect(suggestion) {
  console.log('Selected:', suggestion);
}
</script>
```

**Demo Controls:**
- Max suggestions slider
- Min length input
- Debounce delay input
- Context input

---

### 6. 360 Spin

**360° product viewer with AI generation**

**Features:**
- ✅ GIF or frame sequence mode
- ✅ Hover/click/auto-play
- ✅ Mobile drag support
- ✅ AI frame generation (DALL-E 3)
- ✅ Customizable frame count

**Quick Start:**
```vue
<template>
  <Ai360Spin
    static-image="/product.jpg"
    animated-image="/product-360.gif"
    alt="Product 360 view"
    width="400px"
    height="400px"
  />
</template>

<script setup>
import { Ai360Spin } from '@aivue/360-spin';
import '@aivue/360-spin/360-spin.css';
</script>
```

**Demo Controls:**
- Mode selector (GIF/frames)
- Trigger selector (hover/click/auto)
- Frame count selector (12/24/36/72)
- AI generation toggle
- Download frames button

---

### 7. Image Caption

**AI image captioning with GPT-4 Vision**

**Features:**
- ✅ GPT-4 Vision API
- ✅ Drag & drop upload
- ✅ URL support
- ✅ Batch processing
- ✅ History tracking
- ✅ Export (JSON/CSV)

**Quick Start:**
```vue
<template>
  <AiImageCaption
    :api-key="apiKey"
    :auto-caption="true"
    @caption-generated="onCaption"
  />
</template>

<script setup>
import { AiImageCaption } from '@aivue/image-caption';
import '@aivue/image-caption/dist/image-caption.css';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

function onCaption(result) {
  console.log('Caption:', result.caption);
}
</script>
```

**Demo Controls:**
- Model selector
- Auto-caption toggle
- Max history size input
- Export format selector

---

### 8. Voice Actions

**Voice command control**

**Features:**
- ✅ Speech recognition
- ✅ Text-to-speech
- ✅ AI processing
- ✅ Custom commands
- ✅ Continuous mode
- ✅ Wake word detection
- ✅ 12+ languages

**Quick Start:**
```vue
<template>
  <VoiceActions
    :ai-client="aiClient"
    :commands="commands"
    show-transcript
    voice-feedback
    @command="handleCommand"
  />
</template>

<script setup>
import { VoiceActions } from '@aivue/voice-actions';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

const commands = [
  {
    pattern: /open (.*)/i,
    action: (matches) => console.log('Opening:', matches[1]),
    description: 'Open a page'
  }
];

function handleCommand(command, result) {
  console.log('Command:', command, result);
}
</script>
```

**Demo Controls:**
- Language selector
- Continuous mode toggle
- Voice feedback toggle
- Wake word input
- Command list editor

---

### 9. Emotion UI

**Emotion-aware adaptive UI**

**Features:**
- ✅ Text sentiment analysis
- ✅ Voice tone analysis
- ✅ Typing pattern analysis
- ✅ Click pattern detection
- ✅ Adaptive components
- ✅ Smart interventions

**Quick Start:**
```vue
<template>
  <div>
    <EmotionAwareInput
      v-model="username"
      label="Username"
      :validation-message="error"
    />

    <EmotionAwareButton
      text="Submit"
      encouraging-text="You've got this!"
      @click="handleSubmit"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { EmotionAwareInput, EmotionAwareButton } from '@aivue/emotion-ui';
import '@aivue/emotion-ui/style.css';

const username = ref('');
const error = ref('');

function handleSubmit() {
  console.log('Submitted:', username.value);
}
</script>
```

**Demo Controls:**
- Emotion detection toggle
- Intervention threshold slider
- Feedback style selector

---

### 10. Predictive Input

**AI-powered text completion**

**Features:**
- ✅ AI predictions
- ✅ Context-aware
- ✅ Confidence scoring
- ✅ Keyboard navigation
- ✅ Training mode

**Quick Start:**
```vue
<template>
  <PredictiveInput
    v-model="text"
    :client="aiClient"
    placeholder="Start typing..."
    :max-predictions="5"
    @prediction-selected="handlePrediction"
  />
</template>

<script setup>
import { ref } from 'vue';
import { PredictiveInput } from '@aivue/predictive-input';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

const text = ref('');

function handlePrediction(prediction) {
  console.log('Selected:', prediction);
}
</script>
```

**Demo Controls:**
- Max predictions slider
- Min confidence slider
- Training toggle
- Multiline toggle

---

### 11. Doc Intelligence

**Document OCR & extraction**

**Features:**
- ✅ PDF processing
- ✅ Image OCR (Tesseract.js)
- ✅ Document type detection
- ✅ Entity recognition
- ✅ Auto-generated forms
- ✅ 100+ languages
- ✅ Privacy-first (local processing)

**Quick Start:**
```vue
<template>
  <div>
    <DocumentUpload
      @files-selected="handleFiles"
      :multiple="true"
    />

    <DocumentViewer
      v-if="currentDoc"
      :document-url="currentDoc.url"
      :extracted-data="currentDoc.extractedData"
    />

    <ExtractedDataForm
      v-if="currentDoc?.extractedData"
      :extracted-data="currentDoc.extractedData"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup>
import { DocumentUpload, DocumentViewer, ExtractedDataForm, useDocIntelligence } from '@aivue/doc-intelligence';
import '@aivue/doc-intelligence/style.css';

const { documents, addDocuments, currentDocument } = useDocIntelligence({
  autoProcess: true,
  ocrLanguage: 'eng'
});

async function handleFiles(files) {
  await addDocuments(files);
}

function handleSubmit(data) {
  console.log('Extracted data:', data);
}
</script>
```

**Demo Controls:**
- OCR language selector
- Document type filter
- Auto-process toggle
- Confidence threshold slider

---

### 12. Smart Notify

**AI-powered notifications**

**Features:**
- ✅ AI urgency detection
- ✅ Optimal timing prediction
- ✅ Intelligent grouping
- ✅ Attention detection
- ✅ Smart batching
- ✅ Priority-based styling

**Quick Start:**
```vue
<template>
  <div>
    <NotificationCenter :show-stats="true" />
    <button @click="sendNotification">Notify</button>
  </div>
</template>

<script setup>
import { NotificationCenter, useSmartNotify } from '@aivue/smart-notify';
import '@aivue/smart-notify/dist/smart-notify.css';

const { notify } = useSmartNotify();

function sendNotification() {
  notify({
    title: 'New Message',
    message: 'You have a new message',
    category: 'message',
    priority: 'high'
  });
}
</script>
```

**Demo Controls:**
- AI features toggle
- Grouping toggle
- Batching toggle
- Attention detection toggle
- Do not disturb toggle

---

### 13. Analytics

**AI-powered analytics**

**Features:**
- ✅ Real-time tracking
- ✅ AI insights
- ✅ Conversation analytics
- ✅ Performance monitoring
- ✅ Beautiful dashboards
- ✅ Privacy-first

**Quick Start:**
```vue
<template>
  <div>
    <AiAnalyticsDashboard
      :ai-client="aiClient"
      :show-conversation-analytics="true"
    />

    <button v-analytics="{ component: 'my-app', action: 'click' }">
      Track Click
    </button>
  </div>
</template>

<script setup>
import { AiAnalyticsDashboard, useAnalytics, vAnalytics } from '@aivue/analytics';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

const analytics = useAnalytics({
  config: {
    enabled: true,
    trackInteractions: true,
    trackAIRequests: true
  },
  aiClient
});

// Track custom events
analytics.trackInteraction('component', 'action', { value: 'test' });
</script>
```

**Demo Controls:**
- Tracking toggle
- AI insights toggle
- Conversation analytics toggle
- Export format selector

---

## 🌐 Cross-Framework Implementation

### Vue 2

```vue
<template>
  <div>
    <ai-chat-window
      :provider="provider"
      :api-key="apiKey"
      :model="model"
    />
  </div>
</template>

<script>
import { AiChatWindow } from '@aivue/chatbot';
import '@aivue/chatbot/dist/chatbot.css';

export default {
  components: { AiChatWindow },
  data() {
    return {
      provider: 'openai',
      apiKey: process.env.VUE_APP_OPENAI_API_KEY,
      model: 'gpt-4o'
    };
  }
};
</script>
```

### Vue 3

```vue
<template>
  <AiChatWindow
    provider="openai"
    :api-key="apiKey"
    model="gpt-4o"
  />
</template>

<script setup>
import { AiChatWindow } from '@aivue/chatbot';
import '@aivue/chatbot/dist/chatbot.css';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
</script>
```

### Angular

**1. Install Package**
```bash
npm install @aivue/chatbot @aivue/core
```

**2. Create Angular Wrapper Component**
```typescript
// ai-chat.component.ts
import { Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AiChatWindow } from '@aivue/chatbot';

@Component({
  selector: 'app-ai-chat',
  template: '<div #chatContainer></div>',
  styles: [`@import '@aivue/chatbot/dist/chatbot.css';`]
})
export class AiChatComponent implements AfterViewInit {
  @Input() provider = 'openai';
  @Input() apiKey = '';
  @Input() model = 'gpt-4o';
  @ViewChild('chatContainer', { static: false }) container!: ElementRef;

  ngAfterViewInit() {
    // Mount Vue component in Angular
    const chatWindow = new AiChatWindow({
      propsData: {
        provider: this.provider,
        apiKey: this.apiKey,
        model: this.model
      }
    });
    chatWindow.$mount(this.container.nativeElement);
  }
}
```

**3. Use in Angular Template**
```html
<app-ai-chat
  [provider]="'openai'"
  [apiKey]="apiKey"
  [model]="'gpt-4o'"
></app-ai-chat>
```

**4. Module Configuration**
```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { AiChatComponent } from './ai-chat.component';

@NgModule({
  declarations: [AiChatComponent],
  exports: [AiChatComponent]
})
export class AiComponentsModule {}
```

### React

**1. Install Package**
```bash
npm install @aivue/chatbot @aivue/core
```

**2. Create React Wrapper Component**
```tsx
// AiChat.tsx
import { useEffect, useRef } from 'react';
import { AiChatWindow } from '@aivue/chatbot';
import '@aivue/chatbot/dist/chatbot.css';

interface AiChatProps {
  provider?: string;
  apiKey: string;
  model?: string;
}

export function AiChat({ provider = 'openai', apiKey, model = 'gpt-4o' }: AiChatProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current && !instanceRef.current) {
      // Mount Vue component in React
      instanceRef.current = new AiChatWindow({
        propsData: { provider, apiKey, model }
      });
      instanceRef.current.$mount(containerRef.current);
    }

    return () => {
      if (instanceRef.current) {
        instanceRef.current.$destroy();
        instanceRef.current = null;
      }
    };
  }, []);

  // Update props when they change
  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.$props.provider = provider;
      instanceRef.current.$props.apiKey = apiKey;
      instanceRef.current.$props.model = model;
    }
  }, [provider, apiKey, model]);

  return <div ref={containerRef} />;
}
```

**3. Use in React Component**
```tsx
import { AiChat } from './AiChat';

function App() {
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY || '';

  return (
    <div>
      <h1>AI Chat</h1>
      <AiChat
        provider="openai"
        apiKey={apiKey}
        model="gpt-4o"
      />
    </div>
  );
}
```

---

## 🎛️ Demo Controls Reference

### Global Controls (All Components)

**Available in Demo Page:**
- **Provider Selector** - Choose AI provider (OpenAI, Claude, Gemini, etc.)
- **Model Selector** - Select specific model
- **API Key Input** - Enter API key (stored in localStorage)
- **Theme Toggle** - Switch between light/dark themes
- **Reset Button** - Clear all data and reset to defaults

### Component-Specific Controls

#### Chatbot
```typescript
{
  provider: 'openai' | 'anthropic' | 'gemini' | 'ollama' | 'huggingface' | 'deepseek',
  model: string,
  theme: 'light' | 'dark',
  enableVoice: boolean,
  enableFileUpload: boolean,
  ragEnabled: boolean,
  ragTopK: number,
  language: 'en' | 'es' | 'fr' | 'de' | 'zh',
  proxyUrl: string
}
```

#### SmartForm
```typescript
{
  validationMode: 'onChange' | 'onBlur' | 'onSubmit',
  aiValidation: boolean,
  autoCorrect: boolean,
  showAllFieldTypes: boolean
}
```

#### Smart DataTable
```typescript
{
  aiSearch: boolean,
  aiInsights: boolean,
  showChat: boolean,
  enableRowAgents: boolean,
  enableTransformations: boolean,
  exportFormat: 'csv' | 'json' | 'excel'
}
```

#### AutoSuggest
```typescript
{
  maxSuggestions: number,
  minLength: number,
  debounce: number,
  context: string
}
```

#### 360 Spin
```typescript
{
  mode: 'gif' | 'frames',
  trigger: 'hover' | 'click' | 'auto',
  frameCount: 12 | 24 | 36 | 72,
  enableAIGeneration: boolean
}
```

#### Image Caption
```typescript
{
  model: 'gpt-4o' | 'gpt-4-turbo',
  autoCaption: boolean,
  maxHistorySize: number,
  exportFormat: 'json' | 'csv'
}
```

#### Voice Actions
```typescript
{
  language: string,
  continuousMode: boolean,
  voiceFeedback: boolean,
  wakeWord: string,
  showTranscript: boolean,
  showHistory: boolean
}
```

#### Emotion UI
```typescript
{
  enableEmotionDetection: boolean,
  interventionThreshold: number,
  feedbackStyle: 'gentle' | 'neutral' | 'encouraging'
}
```

#### Predictive Input
```typescript
{
  maxPredictions: number,
  minConfidence: number,
  enableTraining: boolean,
  multiline: boolean
}
```

#### Doc Intelligence
```typescript
{
  ocrLanguage: string,
  documentTypeFilter: string[],
  autoProcess: boolean,
  confidenceThreshold: number
}
```

#### Smart Notify
```typescript
{
  enableAI: boolean,
  enableGrouping: boolean,
  enableBatching: boolean,
  enableAttentionDetection: boolean,
  doNotDisturb: boolean
}
```

#### Analytics
```typescript
{
  enableTracking: boolean,
  enableAIInsights: boolean,
  showConversationAnalytics: boolean,
  exportFormat: 'json' | 'csv'
}
```

---

## 📊 Feature Comparison Matrix

| Feature | Chatbot | SmartForm | DataTable | AutoSuggest | 360 Spin | Image Caption | Voice | Emotion | Predictive | Doc Intel | Notify | Analytics |
|---------|---------|-----------|-----------|-------------|----------|---------------|-------|---------|------------|-----------|--------|-----------|
| AI Provider Support | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ |
| Streaming | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| TypeScript | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Vue 2 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Vue 3 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Angular | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| React | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Storage | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ |
| i18n | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Themes | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 🔧 Environment Setup

### API Keys Configuration

**Vue (Vite)**
```bash
# .env
VITE_OPENAI_API_KEY=sk-...
VITE_ANTHROPIC_API_KEY=sk-ant-...
VITE_GOOGLE_API_KEY=...
VITE_HUGGINGFACE_API_KEY=hf_...
```

**Vue (Vue CLI)**
```bash
# .env
VUE_APP_OPENAI_API_KEY=sk-...
VUE_APP_ANTHROPIC_API_KEY=sk-ant-...
```

**Angular**
```typescript
// environment.ts
export const environment = {
  production: false,
  openaiApiKey: 'sk-...',
  anthropicApiKey: 'sk-ant-...'
};
```

**React**
```bash
# .env
REACT_APP_OPENAI_API_KEY=sk-...
REACT_APP_ANTHROPIC_API_KEY=sk-ant-...
```

### Security Best Practices

**❌ Never commit API keys to Git**
```bash
# .gitignore
.env
.env.local
.env.*.local
```

**✅ Use environment variables**
```typescript
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
```

**✅ Use proxy servers for production**
```vue
<AiChatWindow
  :proxy-url="'https://your-api-proxy.com/api'"
  :api-key="undefined"
/>
```

**✅ Implement rate limiting**
```typescript
const client = new AIClient({
  provider: 'openai',
  apiKey: apiKey,
  rateLimit: {
    maxRequests: 10,
    perMinutes: 1
  }
});
```

---

## 🚀 Deployment

### Build for Production

**Vue**
```bash
npm run build
```

**Angular**
```bash
ng build --configuration production
```

**React**
```bash
npm run build
```

### Deploy to Netlify

**1. Install Netlify CLI**
```bash
npm install -g netlify-cli
```

**2. Deploy**
```bash
netlify deploy --prod
```

**3. Environment Variables**
Set in Netlify Dashboard → Site Settings → Environment Variables

### Deploy to Vercel

**1. Install Vercel CLI**
```bash
npm install -g vercel
```

**2. Deploy**
```bash
vercel --prod
```

**3. Environment Variables**
```bash
vercel env add VITE_OPENAI_API_KEY
```

---

## 📖 Best Practices

### Performance Optimization

**1. Lazy Load Components**
```typescript
// Vue 3
const AiChatWindow = defineAsyncComponent(() =>
  import('@aivue/chatbot').then(m => m.AiChatWindow)
);

// React
const AiChat = lazy(() => import('./AiChat'));
```

**2. Debounce AI Requests**
```typescript
const debouncedValidate = debounce(validateField, 300);
```

**3. Cache Responses**
```typescript
const cache = new Map();

async function getCachedResponse(prompt) {
  if (cache.has(prompt)) {
    return cache.get(prompt);
  }
  const response = await client.chat([{ role: 'user', content: prompt }]);
  cache.set(prompt, response);
  return response;
}
```

**4. Use Streaming for Long Responses**
```typescript
client.chatStream(messages, {
  onToken: (token) => updateUI(token)
});
```

### Error Handling

**1. Graceful Degradation**
```typescript
try {
  const response = await client.chat(messages);
} catch (error) {
  console.error('AI request failed:', error);
  // Fall back to non-AI behavior
  return fallbackResponse;
}
```

**2. User-Friendly Error Messages**
```typescript
const errorMessages = {
  'rate_limit': 'Too many requests. Please try again in a moment.',
  'invalid_api_key': 'API key is invalid. Please check your configuration.',
  'network_error': 'Network error. Please check your connection.'
};
```

**3. Retry Logic**
```typescript
async function retryRequest(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

### Testing

**1. Unit Tests**
```typescript
import { describe, it, expect, vi } from 'vitest';
import { AIClient } from '@aivue/core';

describe('AIClient', () => {
  it('should create client with config', () => {
    const client = new AIClient({
      provider: 'openai',
      apiKey: 'test-key'
    });
    expect(client).toBeDefined();
  });

  it('should handle chat requests', async () => {
    const client = new AIClient({
      provider: 'openai',
      apiKey: 'test-key'
    });

    // Mock the API call
    vi.spyOn(client, 'chat').mockResolvedValue('Hello!');

    const response = await client.chat([
      { role: 'user', content: 'Hi' }
    ]);

    expect(response).toBe('Hello!');
  });
});
```

**2. Component Tests**
```typescript
import { mount } from '@vue/test-utils';
import { AiChatWindow } from '@aivue/chatbot';

describe('AiChatWindow', () => {
  it('renders correctly', () => {
    const wrapper = mount(AiChatWindow, {
      props: {
        provider: 'openai',
        apiKey: 'test-key'
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});
```

---

## 🎯 Use Case Examples

### Customer Support Chatbot

```vue
<template>
  <AiChatWindow
    provider="openai"
    :api-key="apiKey"
    model="gpt-4o"
    title="Customer Support"
    :rag-config="{
      enabled: true,
      topK: 3
    }"
    :system-prompt="supportPrompt"
  />
</template>

<script setup>
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const supportPrompt = `You are a helpful customer support agent.
Be polite, professional, and provide accurate information based on the knowledge base.`;
</script>
```

### Smart Contact Form

```vue
<template>
  <SmartForm
    :client="aiClient"
    :schema="contactSchema"
    @submit="handleSubmit"
  />
</template>

<script setup>
import { SmartForm } from '@aivue/smartform';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

const contactSchema = {
  name: {
    type: 'text',
    label: 'Full Name',
    required: true,
    minLength: 2,
    aiValidation: true
  },
  email: {
    type: 'email',
    label: 'Email',
    required: true,
    aiValidation: true
  },
  message: {
    type: 'textarea',
    label: 'Message',
    required: true,
    maxLength: 500,
    aiValidation: true
  }
};

function handleSubmit(data) {
  console.log('Form submitted:', data);
  // Send to backend
}
</script>
```

### E-commerce Product Viewer

```vue
<template>
  <div class="product-card">
    <Ai360Spin
      :static-image="product.image"
      :animated-image="product.spin360"
      :alt="product.name"
      trigger="hover"
    />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
  </div>
</template>

<script setup>
import { Ai360Spin } from '@aivue/360-spin';

const product = {
  name: 'Premium Headphones',
  price: '$299',
  image: '/products/headphones.jpg',
  spin360: '/products/headphones-360.gif'
};
</script>
```

---

## 📚 Additional Resources

### Documentation
- 📖 [Complete API Reference](./API_REFERENCE.md)
- 🎓 [Tutorial Series](./TUTORIALS.md)
- 💡 [Examples Repository](https://github.com/reachbrt/vueai/tree/main/examples)

### Community
- 💬 [Discord Server](https://discord.gg/aivue)
- 🐦 [Twitter](https://twitter.com/aivue)
- 📧 [Email Support](mailto:reachbrt@gmail.com)

### Contributing
- 🤝 [Contributing Guide](./CONTRIBUTING.md)
- 🐛 [Report Issues](https://github.com/reachbrt/vueai/issues)
- 💡 [Feature Requests](https://github.com/reachbrt/vueai/issues/new?template=feature_request.md)

---

## 📄 License

MIT © [Bharatkumar Subramanian](https://github.com/reachbrt)

---

## 🙏 Credits

**Author:** Bharatkumar Subramanian ([@reachbrt](https://github.com/reachbrt))
**LinkedIn:** [bharatkumarsubramanian](https://www.linkedin.com/in/bharatkumarsubramanian/)
**Mentors:** Manoj (Main Guidance), Thiru (AI Sessions)
**Community:** AI/ML enthusiasts worldwide

---

**Last Updated:** 2025-12-16
**Documentation Version:** 2.5.x
**Live Demo:** https://aivue.netlify.app/


