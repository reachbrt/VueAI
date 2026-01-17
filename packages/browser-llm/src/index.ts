// Components
export { default as BrowserLLMChat } from './components/BrowserLLMChat.vue';
export { default as ModelSelector } from './components/ModelSelector.vue';

// Composables
export { useBrowserLLM } from './composables/useBrowserLLM';
export { useWebLLM } from './composables/useWebLLM';

// Providers
export { WebLLMProvider } from './providers/webllm-provider';

// Utils
export { 
  checkWebGPUSupport, 
  getWebGPUErrorMessage, 
  estimateDeviceCapability 
} from './utils/webgpu-check';

export { 
  BROWSER_LLM_MODELS,
  getModelById,
  getLowResourceModels,
  getModelsBySize,
  getDefaultModel
} from './utils/model-config';

// Types
export type {
  BrowserLLMMessage,
  ModelInfo,
  ModelDownloadProgress,
  BrowserLLMOptions,
  ChatOptions,
  UseBrowserLLMReturn,
  GenerationStats,
  WebGPUInfo,
  ChatCompletionMessageParam,
} from './types';

// Plugin
import type { App } from 'vue';
import BrowserLLMChat from './components/BrowserLLMChat.vue';
import ModelSelector from './components/ModelSelector.vue';

export const BrowserLLMPlugin = {
  install(app: App) {
    app.component('BrowserLLMChat', BrowserLLMChat);
    app.component('ModelSelector', ModelSelector);
  }
};

export default BrowserLLMPlugin;

