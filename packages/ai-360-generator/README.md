# @aivue/ai-360-generator

![AI 360 Generator](https://raw.githubusercontent.com/reachbrt/vueai/main/demo/src/assets/images/ai-360-illustration.svg)

🤖 **AI-Powered 360° Product View Generator for Vue.js**

Transform a single product image into a complete 360° rotation view using AI. Powered by OpenAI DALL-E 3 and Stability AI.

[![npm version](https://img.shields.io/npm/v/@aivue/ai-360-generator.svg?style=flat-square)](https://www.npmjs.com/package/@aivue/ai-360-generator)
[![npm downloads](https://img.shields.io/npm/dm/@aivue/ai-360-generator.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@aivue/ai-360-generator)
[![MIT License](https://img.shields.io/npm/l/@aivue/ai-360-generator.svg?style=flat-square)](https://github.com/reachbrt/vueai/blob/main/LICENSE)
[![Netlify Status](https://img.shields.io/netlify/5cb37fa7-9ee1-4af6-9ff4-d34ff0322ded?style=flat-square&logo=netlify)](https://aivue.netlify.app/)

---

## ✨ Features

### 🎯 **Core Capabilities**
- 🤖 **AI-Powered Generation** - Uses OpenAI DALL-E 3 or Stability AI to generate 360° views
- 📸 **Single Image Input** - Upload one product photo, get 36 frames
- 🔄 **Complete 360° Rotation** - Generates views from all angles
- 🎨 **Customizable Output** - Control frame count, quality, background color
- 📊 **Real-time Progress** - Live updates during generation
- 💾 **Export Options** - Download individual frames or complete sequence
- 🎬 **360° Viewer Integration** - Works seamlessly with @aivue/360-spin

### 🚀 **AI Providers**
- **OpenAI DALL-E 3** - High-quality, photorealistic generation
- **Stability AI** - Advanced 3D novel view synthesis
- **Multi-provider Support** - Switch between providers easily

### 🛠️ **Developer Experience**
- ✅ **TypeScript Support** - Full type definitions included
- 📦 **Vue 2 & 3 Compatible** - Works with both Vue versions
- 🎨 **Customizable UI** - Styled components with CSS variables
- 🔌 **Composable API** - Use the Vue composable or standalone class
- 📱 **Responsive Design** - Mobile-friendly interface

---

## 📦 Installation

```bash
npm install @aivue/ai-360-generator @aivue/core
```

---

## 🚀 Quick Start

### Basic Usage

```vue
<template>
  <AI360Generator
    :api-key="openaiApiKey"
    provider="openai"
    :frame-count="36"
    @complete="handleComplete"
  />
</template>

<script setup>
import { AI360Generator } from '@aivue/ai-360-generator';
import '@aivue/ai-360-generator/ai-360-generator.css';

const openaiApiKey = 'your-openai-api-key';

function handleComplete(frames) {
  console.log('Generated frames:', frames);
  // Use frames with @aivue/360-spin or download
}
</script>
```

### With 360° Viewer Integration

```vue
<template>
  <div>
    <!-- Step 1: Generate 360° frames -->
    <AI360Generator
      v-if="!generated360Frames"
      :api-key="apiKey"
      provider="openai"
      @complete="handle360Generated"
    />

    <!-- Step 2: Display in 360° viewer -->
    <Ai360Spin
      v-else
      :static-image="generated360Frames[0].url"
      :animated-image="generated360Frames.map(f => f.url)"
      mode="frames"
      enable-drag-spin
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AI360Generator } from '@aivue/ai-360-generator';
import { Ai360Spin } from '@aivue/360-spin';
import '@aivue/ai-360-generator/ai-360-generator.css';
import '@aivue/360-spin/360-spin.css';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const generated360Frames = ref(null);

function handle360Generated(frames) {
  generated360Frames.value = frames;
}
</script>
```

---

## 📖 API Reference

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiKey` | `string` | **required** | OpenAI or Stability AI API key |
| `provider` | `'openai' \| 'stability-ai'` | `'openai'` | AI provider to use |
| `frameCount` | `number` | `36` | Number of frames to generate |
| `quality` | `number` | `90` | Image quality (0-100) |
| `backgroundColor` | `string` | `'white'` | Background color for generated images |
| `title` | `string` | `'AI 360° Generator'` | Component title |
| `description` | `string` | Auto | Component description |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `complete` | `GeneratedFrame[]` | Emitted when generation completes successfully |
| `error` | `string` | Emitted when generation fails |

---

## 🎨 Using the Composable

For more control, use the `useAI360Generator` composable:

```vue
<script setup>
import { ref } from 'vue';
import { useAI360Generator } from '@aivue/ai-360-generator';

const config = {
  provider: 'openai',
  apiKey: 'your-api-key',
  frameCount: 36,
  quality: 90
};

const {
  status,
  progress,
  frames,
  isGenerating,
  isComplete,
  generate,
  cancel,
  downloadFrames
} = useAI360Generator(config);

async function handleFileUpload(file) {
  await generate(file);
}
</script>
```

---

## 🔧 Advanced Configuration

### OpenAI DALL-E Options

```typescript
const config = {
  provider: 'openai',
  apiKey: 'your-key',
  frameCount: 36,
  openai: {
    model: 'dall-e-3',
    size: '1024x1024',
    style: 'natural' // or 'vivid'
  }
};
```

### Stability AI Options

```typescript
const config = {
  provider: 'stability-ai',
  apiKey: 'your-key',
  frameCount: 36,
  stabilityAI: {
    model: 'stable-video-3d',
    steps: 50,
    cfgScale: 7.5
  }
};
```

---

## 💡 Use Cases

### E-commerce Product Photography
Generate 360° views for product listings without expensive photography equipment.

### Virtual Showrooms
Create interactive product displays from catalog images.

### AR/VR Applications
Generate multi-angle views for augmented reality experiences.

### Marketing Materials
Create dynamic product presentations from single photos.

---

## 🔐 API Keys

### OpenAI API Key
1. Sign up at [platform.openai.com](https://platform.openai.com)
2. Navigate to API Keys section
3. Create a new API key
4. Add billing information (DALL-E 3 is paid)

### Stability AI API Key
1. Sign up at [stability.ai](https://stability.ai)
2. Get API key from dashboard
3. Choose appropriate pricing plan

---

## 📊 Performance

- **Generation Time**: ~2-5 minutes for 36 frames (OpenAI DALL-E 3)
- **Cost**: ~$1.44 for 36 frames with DALL-E 3 ($0.04/image)
- **Quality**: HD 1024x1024 images
- **Frame Count**: Customizable (12, 24, 36, or more)

---

## 🤝 Integration with @aivue Ecosystem

Works seamlessly with:
- **@aivue/360-spin** - Display generated 360° views
- **@aivue/core** - Shared AI client utilities
- **@aivue/image-caption** - Add AI captions to products

---

## 📝 License

MIT © [reachbrt](https://github.com/reachbrt)

---

## 🔗 Links

- [Documentation](https://github.com/reachbrt/vueai#readme)
- [Live Demo](https://aivue.netlify.app)
- [GitHub](https://github.com/reachbrt/vueai)
- [npm](https://www.npmjs.com/package/@aivue/ai-360-generator)
- [Issues](https://github.com/reachbrt/vueai/issues)

