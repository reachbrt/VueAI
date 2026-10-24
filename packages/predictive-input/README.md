<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/studio-bar.svg" alt="VueAI" width="100%"></a>
</p>

# 🧠 @aivue/predictive-input

### AI-Powered Predictive Text Input for Vue 3

Transform your text inputs with intelligent, AI-powered predictions. Get smart text completions and suggestions powered by your AI provider.

[![npm version](https://img.shields.io/npm/v/@aivue/predictive-input.svg?color=34d399&labelColor=09090b)](https://www.npmjs.com/package/@aivue/predictive-input)
[![npm downloads](https://img.shields.io/badge/downloads-283%2Fmonth-34d399?style=flat-square&logo=npm&color=34d399&labelColor=09090b)](https://www.npmjs.com/package/@aivue/predictive-input)
[![License: MIT](https://img.shields.io/badge/license-MIT-34d399?style=flat-square&labelColor=09090b)](https://opensource.org/licenses/MIT)

---

## ✨ Features

### 🎯 **Smart Predictions**
- **AI-Powered** - Uses AI to generate intelligent text predictions
- **Context-Aware** - Understands context for better predictions
- **Text Completion** - Suggests complete thoughts and phrases
- **Confidence Scoring** - Shows prediction reliability

### 🤖 **AI Integration**
- **Multiple Providers** - Works with OpenAI, Claude, Gemini, and more
- **Flexible** - Use any AI client from @aivue/core
- **Customizable** - Configure prediction behavior
- **Real-time** - Get predictions as you type

### ⚡ **Performance**
- **Lightweight** - Minimal bundle size
- **Fast** - Real-time predictions with debouncing
- **Responsive** - Smooth user experience
- **Keyboard Navigation** - Full keyboard support

---

## 📦 Installation

```bash
npm install @aivue/predictive-input
```

---

## 🚀 Quick Start

### Basic Usage

```vue
<template>
  <div>
    <PredictiveInput
      v-model="text"
      :client="aiClient"
      placeholder="Start typing..."
      @prediction-selected="handlePrediction"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PredictiveInput } from '@aivue/predictive-input';
import { createOpenAIClient } from '@aivue/core';
import '@aivue/predictive-input/dist/predictive-input.css';

const text = ref('');

// Create AI client
const aiClient = createOpenAIClient({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

const handlePrediction = (prediction) => {
  console.log('Selected:', prediction.text, 'Confidence:', prediction.confidence);
};
</script>
```

---

## 📖 Components

### PredictiveInput

Main input component with AI-powered predictions.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | Input value (v-model) |
| `placeholder` | `string` | `'Start typing...'` | Placeholder text |
| `disabled` | `boolean` | `false` | Disable input |
| `multiline` | `boolean` | `false` | Use textarea instead of input |
| `rows` | `number` | `3` | Rows for textarea |
| `type` | `string` | `'text'` | Input type |
| `maxPredictions` | `number` | `5` | Maximum predictions to show |
| `minConfidence` | `number` | `0.1` | Minimum confidence threshold |
| `suggestionsPosition` | `'above' \| 'below'` | `'below'` | Position of suggestions |
| `enableTraining` | `boolean` | `true` | Auto-train on input |
| `storageKey` | `string` | `'aivue_predictive_input'` | LocalStorage key |

#### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when value changes |
| `prediction-accepted` | `Prediction` | Emitted when prediction is accepted |
| `training-complete` | - | Emitted when training completes |

#### Keyboard Shortcuts

- **↑/↓** - Navigate predictions
- **Tab/Enter** - Accept selected prediction
- **Esc** - Close suggestions

### TrainingPanel

Panel for training the AI model with custom text.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `storageKey` | `string` | `'aivue_predictive_input'` | LocalStorage key |

#### Events

| Event | Description |
|-------|-------------|
| `training-complete` | Emitted when training completes |
| `data-cleared` | Emitted when data is cleared |
| `data-imported` | Emitted when data is imported |

---

## 🎨 Composable API

### usePredictiveInput

```typescript
import { usePredictiveInput } from '@aivue/predictive-input';

const {
  predictions,
  isTraining,
  isTrained,
  train,
  getPredictions,
  updatePredictions,
  clearData,
  exportData,
  importData,
  getStats
} = usePredictiveInput({
  storageKey: 'my_app_predictions',
  autoSave: true,
  enableOffline: true,
  defaultLanguage: 'en'
});
```

---

## 🔧 Advanced Usage

### Custom Training

```typescript
import { usePredictiveInput } from '@aivue/predictive-input';

const { train, isTrained } = usePredictiveInput();

// Train with custom text
const trainingText = `
  Your writing samples here...
  Emails, documents, notes, etc.
`;

await train(trainingText);
console.log('Training complete:', isTrained.value);
```

### Manual Predictions

```typescript
const { getPredictions } = usePredictiveInput();

const context = {
  previousText: 'Hello, how are',
  currentWord: 'you',
  cursorPosition: 15,
  timestamp: Date.now()
};

const predictions = getPredictions(context);
predictions.forEach(pred => {
  console.log(pred.text, pred.confidence);
});
```

### Data Management

```typescript
const { exportData, importData, clearData } = usePredictiveInput();

// Export training data
await exportData('my-predictions.json');

// Import from file
const file = event.target.files[0];
await importData(file);

// Clear all data
await clearData();
```

---

## 🎯 Use Cases

### 📧 **Email Composition**
- Learn from past emails
- Suggest common phrases
- Speed up writing

### 📝 **Note Taking**
- Personal writing style
- Context-aware suggestions
- Faster documentation

### 💬 **Chat Applications**
- Quick responses
- Consistent tone
- Reduced typing

### 📄 **Form Filling**
- Common responses
- Address completion
- Repeated information

---

## 🌟 Why Choose This Package?

| Feature | @aivue/predictive-input | Traditional Autocomplete |
|---------|------------------------|-------------------------|
| **Learning** | ✅ Learns your style | ❌ Static dictionary |
| **Context** | ✅ Context-aware | ❌ Word-based only |
| **Sentences** | ✅ Full sentences | ❌ Single words |
| **Privacy** | ✅ 100% local | ⚠️ Often server-based |
| **Offline** | ✅ Works offline | ❌ Needs connection |
| **Languages** | ✅ 6 languages | ⚠️ Limited |

---

## 📊 Technical Details

### N-Gram Model
- Unigrams, bigrams, and trigrams
- Probability-based predictions
- Efficient pattern matching

### Pattern Learning
- Phrase extraction (2-5 words)
- Frequency tracking
- Context association
- Recency weighting

### Storage
- LocalStorage-based
- Automatic compression
- Export/import support
- Privacy-focused

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📦 Related Packages

Explore the complete @aivue ecosystem:

### 🧠 [@aivue/core](https://www.npmjs.com/package/@aivue/core)
Core AI functionality for Vue.js components

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

---

## 📄 License

MIT © [reachbrt](https://github.com/reachbrt)

---

## 🔗 Links

- [GitHub Repository](https://github.com/reachbrt/vueai)
- [npm Package](https://www.npmjs.com/package/@aivue/predictive-input)
- [Demo](https://aivue.netlify.app/)
- [Report Issues](https://github.com/reachbrt/vueai/issues)

---

## 🙏 Acknowledgments

Built with ❤️ using:
- Vue 3
- TypeScript
- Natural (NLP library)
- Compromise (NLP library)

---

**Made with 🧠 by the @aivue team**



