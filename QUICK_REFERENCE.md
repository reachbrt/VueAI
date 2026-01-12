# 🚀 AIVue Quick Reference Card

> **One-page cheat sheet for all @aivue packages**

---

## 📦 Installation

```bash
npm install @aivue/core @aivue/chatbot @aivue/smartform
```

---

## 🎯 Quick Start

### 1. Core AI Client

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

### 2. Chatbot

```vue
<AiChatWindow provider="openai" :api-key="apiKey" model="gpt-4o" />
```

### 3. SmartForm

```vue
<SmartForm :client="aiClient" :schema="schema" @submit="handleSubmit" />
```

### 4. Smart DataTable

```vue
<SmartDataTable :data="data" :ai-client="aiClient" :ai-search="true" />
```

### 5. AutoSuggest

```vue
<Autosuggest v-model="query" :client="aiClient" :max-suggestions="5" />
```

### 6. 360 Spin

```vue
<Ai360Spin static-image="/product.jpg" animated-image="/product-360.gif" />
```

### 7. Image Caption

```vue
<AiImageCaption :api-key="apiKey" :auto-caption="true" />
```

### 8. Voice Actions

```vue
<VoiceActions :ai-client="aiClient" :commands="commands" />
```

### 9. Emotion UI

```vue
<EmotionAwareInput v-model="text" label="Username" />
```

### 10. Predictive Input

```vue
<PredictiveInput v-model="text" :client="aiClient" />
```

### 11. Doc Intelligence

```vue
<DocumentUpload @files-selected="handleFiles" />
```

### 12. Smart Notify

```vue
<NotificationCenter :show-stats="true" />
```

### 13. Analytics

```vue
<AiAnalyticsDashboard :ai-client="aiClient" />
```

---

## 🌐 Framework Support

| Framework | Import | Usage |
|-----------|--------|-------|
| **Vue 3** | `import { Component } from '@aivue/package'` | `<Component />` |
| **Vue 2** | `import { Component } from '@aivue/package'` | `<component />` |
| **Angular** | Create wrapper component | `<app-wrapper>` |
| **React** | Create wrapper with useEffect | `<Wrapper />` |

---

## 🔑 Environment Variables

```bash
# Vue (Vite)
VITE_OPENAI_API_KEY=sk-...
VITE_ANTHROPIC_API_KEY=sk-ant-...

# Vue (CLI)
VUE_APP_OPENAI_API_KEY=sk-...

# React
REACT_APP_OPENAI_API_KEY=sk-...

# Angular - use environment.ts
```

---

## 🎨 CSS Imports

```typescript
import '@aivue/chatbot/dist/chatbot.css';
import '@aivue/smartform/dist/smartform.css';
import '@aivue/360-spin/360-spin.css';
// ... etc
```

---

## 🔧 Common Props

### All AI Components

```typescript
{
  provider: 'openai' | 'anthropic' | 'gemini' | 'ollama' | 'huggingface' | 'deepseek',
  apiKey: string,
  model: string,
  temperature: number,  // 0-1
  maxTokens: number
}
```

### Chatbot

```typescript
{
  title: string,
  placeholder: string,
  theme: 'light' | 'dark',
  enableVoice: boolean,
  enableFileUpload: boolean,
  ragConfig: { enabled: boolean, topK: number },
  language: 'en' | 'es' | 'fr' | 'de' | 'zh'
}
```

### SmartForm

```typescript
{
  schema: object,
  validationMode: 'onChange' | 'onBlur' | 'onSubmit',
  initialData: object
}
```

---

## 📊 AI Providers

| Provider | Models | Streaming | Vision |
|----------|--------|-----------|--------|
| OpenAI | gpt-4o, gpt-4-turbo | ✅ | ✅ |
| Claude | claude-3-7-sonnet | ✅ | ✅ |
| Gemini | gemini-pro | ✅ | ✅ |
| Ollama | llama2, mistral | ✅ | ❌ |
| HuggingFace | Various | ✅ | ✅ |
| DeepSeek | deepseek-chat | ✅ | ❌ |

---

## 🚀 Build & Deploy

```bash
# Build
npm run build

# Deploy to Netlify
netlify deploy --prod

# Deploy to Vercel
vercel --prod
```

---

## 📚 Full Documentation

- 📖 **[Complete Guide](./ALL_PACKAGES_GUIDE.md)** - All packages with examples
- 🎯 **[Master Documentation](./MASTER_DOCUMENTATION.md)** - Detailed API reference
- 🌐 **[Live Demo](https://aivue.netlify.app/)** - Interactive examples

---

**Author:** [@reachbrt](https://github.com/reachbrt) | **License:** MIT | **Version:** 2.5.x

