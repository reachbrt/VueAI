# @aivue/browser-llm

<div align="center">

### 🚀 High-Performance In-Browser LLM Inference for Vue.js

[![npm version](https://img.shields.io/npm/v/@aivue/browser-llm.svg)](https://www.npmjs.com/package/@aivue/browser-llm)
[![npm downloads](https://img.shields.io/npm/dm/@aivue/browser-llm.svg)](https://www.npmjs.com/package/@aivue/browser-llm)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Run powerful AI models **completely locally** in your browser with **zero API costs** and **100% privacy**!

[Demo](https://aivue.netlify.app) | [Documentation](https://github.com/reachbrt/vueai) | [Report Bug](https://github.com/reachbrt/vueai/issues)

</div>

---

## ✨ Features

### 🔒 **100% Privacy** - All processing happens locally, no data sent to servers
### 💰 **Zero Cost** - No API keys needed, no usage fees
### ⚡ **WebGPU Accelerated** - Hardware-accelerated inference using GPU
### 📦 **Model Caching** - Models cached in browser for offline use
### 🔄 **OpenAI-Compatible API** - Same interface as existing chatbot packages
### 🎯 **Multiple Models** - Support for Llama, Phi, Gemma, Mistral, Qwen, and more
### 📱 **Progressive Loading** - Show download progress for models
### 🔌 **Drop-in Replacement** - Works with existing @aivue/chatbot components
### 🌐 **Vue 2 & 3 Compatible** - Works with both Vue 2.6+ and Vue 3.x

---

## 📦 Installation

```bash
npm install @aivue/browser-llm
# or
yarn add @aivue/browser-llm
# or
pnpm add @aivue/browser-llm
```

---

## 🚀 Quick Start

### Basic Usage

```vue
<template>
  <div>
    <!-- Model Selector -->
    <ModelSelector
      :available-models="availableModels"
      :current-model="currentModel"
      :is-loading="isLoading"
      :download-progress="downloadProgress"
      :error="error"
      :is-web-g-p-u-supported="isWebGPUSupported"
      @load-model="loadModel"
    />

    <!-- Chat Interface -->
    <BrowserLLMChat
      :messages="messages"
      :is-model-loaded="isModelLoaded"
      :is-loading="isLoading"
      :current-model="currentModel"
      :error="error"
      :tokens-per-second="tokensPerSecond"
      @send-message="sendMessage"
      @stream-message="handleStreamMessage"
      @clear="clearMessages"
    />
  </div>
</template>

<script setup>
import { useBrowserLLM, ModelSelector, BrowserLLMChat } from '@aivue/browser-llm';

const {
  availableModels,
  selectedModel,
  loadModel,
  messages,
  sendMessage,
  streamMessage,
  clearMessages,
  isModelLoaded,
  isLoading,
  downloadProgress,
  error,
  isWebGPUSupported,
  tokensPerSecond,
  currentModel,
} = useBrowserLLM({
  defaultModel: 'Llama-3.2-1B-Instruct-q4f16_1-MLC',
  temperature: 0.7,
  systemPrompt: 'You are a helpful AI assistant.',
});

const handleStreamMessage = async (content) => {
  for await (const chunk of streamMessage(content)) {
    // Handle streaming chunks if needed
  }
};
</script>
```

---

## 📚 Available Models

| Model | Size | Speed | Use Case |
|-------|------|-------|----------|
| **Llama 3.2 1B** | ~800MB | ⚡⚡⚡ | Fast chat, mobile-friendly |
| **Llama 3.2 3B** | ~2GB | ⚡⚡ | Balanced performance |
| **Llama 3.1 8B** | ~5GB | ⚡ | High quality responses |
| **Phi 3.5 Mini** | ~2.5GB | ⚡⚡ | Excellent for reasoning |
| **Gemma 2 2B** | ~1.5GB | ⚡⚡⚡ | Google's efficient model |
| **Mistral 7B** | ~4GB | ⚡ | High quality general purpose |
| **Qwen 2.5 1.5B** | ~1GB | ⚡⚡⚡ | Fast multilingual |
| **Qwen 2.5 7B** | ~4.5GB | ⚡ | Excellent multilingual |

---

## 🎯 API Reference

### `useBrowserLLM(options)`

Main composable for browser LLM functionality.

#### Options

```typescript
interface BrowserLLMOptions {
  defaultModel?: string;        // Default model to load
  temperature?: number;          // 0.0 - 2.0 (default: 0.7)
  topP?: number;                // 0.0 - 1.0 (default: 0.9)
  maxTokens?: number;           // Max tokens to generate (default: 2048)
  systemPrompt?: string;        // System prompt for the model
}
```

#### Returns

```typescript
interface UseBrowserLLMReturn {
  // Model Management
  availableModels: Ref<ModelInfo[]>;
  selectedModel: Ref<string>;
  loadModel: (modelId: string) => Promise<void>;
  unloadModel: () => Promise<void>;
  isModelLoaded: Ref<boolean>;
  
  // Chat
  messages: Ref<BrowserLLMMessage[]>;
  sendMessage: (content: string, options?: ChatOptions) => Promise<string>;
  streamMessage: (content: string, options?: ChatOptions) => AsyncGenerator<string>;
  clearMessages: () => void;
  
  // Progress & Status
  downloadProgress: Ref<ModelDownloadProgress | null>;
  isLoading: Ref<boolean>;
  error: Ref<Error | null>;
  isWebGPUSupported: Ref<boolean>;
  
  // Performance
  tokensPerSecond: Ref<number>;
  generationStats: Ref<GenerationStats | null>;
}
```

---

## 🔧 Advanced Usage

### Using Composable Only

```vue
<script setup>
import { useBrowserLLM } from '@aivue/browser-llm';

const { loadModel, sendMessage, messages } = useBrowserLLM();

// Load a model
await loadModel('Llama-3.2-1B-Instruct-q4f16_1-MLC');

// Send a message
const response = await sendMessage('Hello, how are you?');
console.log(response);
```

### Streaming Responses

```vue
<script setup>
import { useBrowserLLM } from '@aivue/browser-llm';

const { loadModel, streamMessage } = useBrowserLLM();

await loadModel('Llama-3.2-1B-Instruct-q4f16_1-MLC');

// Stream a response
for await (const chunk of streamMessage('Tell me a story')) {
  console.log(chunk); // Print each chunk as it arrives
}
```

### Custom Chat Options

```vue
<script setup>
import { useBrowserLLM } from '@aivue/browser-llm';

const { sendMessage } = useBrowserLLM();

// Send with custom options
const response = await sendMessage('Explain quantum physics', {
  temperature: 0.3,      // More focused
  max_tokens: 500,       // Limit response length
  top_p: 0.95,
});
```

### Checking WebGPU Support

```vue
<script setup>
import { checkWebGPUSupport, getWebGPUErrorMessage } from '@aivue/browser-llm';

const gpuInfo = await checkWebGPUSupport();

if (!gpuInfo.supported) {
  console.error(getWebGPUErrorMessage());
} else {
  console.log('WebGPU supported!', gpuInfo);
}
```

---

## 🌐 Browser Requirements

- **WebGPU Support**: Chrome 113+, Edge 113+, or WebGPU-enabled browser
- **RAM**: 4GB+ recommended (8GB+ for larger models)
- **Storage**: 2-8GB for model caching
- **Internet**: Required for initial model download (then works offline)

### Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 113+ | ✅ Fully Supported |
| Edge | 113+ | ✅ Fully Supported |
| Firefox | Nightly (with flag) | ⚠️ Experimental |
| Safari | Not yet | ❌ Not Supported |

---

## 💡 Use Cases

### 🔒 **Privacy-First Applications**
- Medical/Healthcare apps with sensitive data
- Legal document analysis
- Personal journaling with AI assistance

### 💰 **Cost-Effective Solutions**
- Educational platforms
- Prototyping and development
- High-volume applications

### 📱 **Offline-Capable Apps**
- Field work applications
- Remote area tools
- Airplane mode functionality

### 🎓 **Learning & Education**
- AI/ML education without API costs
- Student projects
- Research and experimentation

---

## 🎨 Components

### `<BrowserLLMChat>`

Full-featured chat interface component.

**Props:**
- `title` (string): Chat window title
- `placeholder` (string): Input placeholder text
- `messages` (BrowserLLMMessage[]): Chat messages
- `isModelLoaded` (boolean): Whether model is loaded
- `isLoading` (boolean): Loading state
- `currentModel` (string | null): Current model ID
- `error` (Error | null): Error state
- `tokensPerSecond` (number): Performance metric
- `useStreaming` (boolean): Enable streaming (default: true)

**Events:**
- `@send-message`: Emitted when user sends a message
- `@stream-message`: Emitted when streaming a message
- `@clear`: Emitted when clearing chat

### `<ModelSelector>`

Model selection and loading component.

**Props:**
- `availableModels` (ModelInfo[]): Available models
- `currentModel` (string | null): Currently loaded model
- `isLoading` (boolean): Loading state
- `downloadProgress` (ModelDownloadProgress | null): Download progress
- `error` (Error | null): Error state
- `isWebGPUSupported` (boolean): WebGPU support status

**Events:**
- `@load-model`: Emitted when loading a model
- `@select-model`: Emitted when selecting a model

---

## 🔍 Troubleshooting

### WebGPU Not Supported

**Problem:** Browser doesn't support WebGPU

**Solution:**
- Update to Chrome 113+ or Edge 113+
- Enable WebGPU in browser flags (chrome://flags)
- Check GPU drivers are up to date

### Model Download Fails

**Problem:** Model fails to download

**Solution:**
- Check internet connection
- Clear browser cache
- Try a smaller model first
- Check available disk space

### Out of Memory

**Problem:** Browser runs out of memory

**Solution:**
- Use a smaller model (1B-3B parameters)
- Close other browser tabs
- Increase system RAM if possible
- Use low-resource models

### Slow Performance

**Problem:** Model runs slowly

**Solution:**
- Ensure WebGPU is enabled (not CPU fallback)
- Close background applications
- Try a smaller model
- Check GPU is being utilized

---

## 📊 Performance Tips

1. **Start Small**: Begin with 1B-3B parameter models
2. **Cache Models**: Models are cached after first download
3. **Use Streaming**: Better UX with streaming responses
4. **Monitor Performance**: Check `tokensPerSecond` metric
5. **Optimize Prompts**: Shorter prompts = faster responses

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

MIT © [reachbrt](https://github.com/reachbrt)

---

## 🙏 Acknowledgments

- Built with [WebLLM](https://webllm.mlc.ai/) by MLC AI
- Powered by [WebGPU](https://www.w3.org/TR/webgpu/)
- Part of the [@aivue](https://github.com/reachbrt/vueai) ecosystem

---

## 🔗 Links

- [GitHub Repository](https://github.com/reachbrt/vueai)
- [npm Package](https://www.npmjs.com/package/@aivue/browser-llm)
- [Live Demo](https://aivue.netlify.app)
- [Report Issues](https://github.com/reachbrt/vueai/issues)

---

<div align="center">

**Made with ❤️ by [reachbrt](https://github.com/reachbrt)**

If you find this package useful, please consider giving it a ⭐ on [GitHub](https://github.com/reachbrt/vueai)!

</div>

