import { ref, computed, onMounted, Ref } from 'vue';
import { useWebLLM } from './useWebLLM';
import { checkWebGPUSupport } from '../utils/webgpu-check';
import { BROWSER_LLM_MODELS, getDefaultModel } from '../utils/model-config';
import type { 
  BrowserLLMOptions, 
  BrowserLLMMessage, 
  ChatOptions, 
  ModelInfo,
  GenerationStats,
  ModelDownloadProgress,
  WebGPUInfo
} from '../types';

export interface UseBrowserLLMReturn {
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
  webgpuInfo: Ref<WebGPUInfo | null>;
  
  // Performance
  tokensPerSecond: Ref<number>;
  generationStats: Ref<GenerationStats | null>;
}

/**
 * Main composable for Browser LLM functionality
 */
export function useBrowserLLM(options: BrowserLLMOptions = {}): UseBrowserLLMReturn {
  const {
    defaultModel = getDefaultModel().model_id,
    temperature = 0.7,
    topP = 0.9,
    maxTokens = 2048,
    systemPrompt = 'You are a helpful AI assistant.',
  } = options;

  // State
  const availableModels = ref<ModelInfo[]>(BROWSER_LLM_MODELS);
  const selectedModel = ref<string>(defaultModel);
  const messages = ref<BrowserLLMMessage[]>([]);
  const isLoading = ref(false);
  const isWebGPUSupported = ref(false);
  const webgpuInfo = ref<WebGPUInfo | null>(null);
  const tokensPerSecond = ref(0);
  const generationStats = ref<GenerationStats | null>(null);

  // WebLLM integration
  const webllm = useWebLLM();

  // Check WebGPU support on mount
  onMounted(async () => {
    const gpuInfo = await checkWebGPUSupport();
    webgpuInfo.value = gpuInfo;
    isWebGPUSupported.value = gpuInfo.supported;

    if (!gpuInfo.supported) {
      console.warn('⚠️ WebGPU is not supported in this browser');
    } else {
      console.log('✅ WebGPU is supported:', gpuInfo);
    }
  });

  // Load model
  const loadModel = async (modelId: string): Promise<void> => {
    isLoading.value = true;
    try {
      await webllm.loadModel(modelId);
      selectedModel.value = modelId;
      
      // Add system message if provided
      if (systemPrompt && messages.value.length === 0) {
        messages.value.push({
          role: 'system',
          content: systemPrompt,
          timestamp: Date.now(),
        });
      }
    } finally {
      isLoading.value = false;
    }
  };

  // Unload model
  const unloadModel = async (): Promise<void> => {
    isLoading.value = true;
    try {
      await webllm.unloadModel();
    } finally {
      isLoading.value = false;
    }
  };

  // Send message
  const sendMessage = async (
    content: string,
    chatOptions?: ChatOptions
  ): Promise<string> => {
    isLoading.value = true;
    
    try {
      // Add user message
      const userMessage: BrowserLLMMessage = {
        role: 'user',
        content,
        timestamp: Date.now(),
      };
      messages.value.push(userMessage);

      // Get response
      const opts: ChatOptions = {
        temperature: chatOptions?.temperature ?? temperature,
        top_p: chatOptions?.top_p ?? topP,
        max_tokens: chatOptions?.max_tokens ?? maxTokens,
        ...chatOptions,
      };

      const response = await webllm.chat(messages.value, opts);

      // Add assistant message
      const assistantMessage: BrowserLLMMessage = {
        role: 'assistant',
        content: response,
        timestamp: Date.now(),
      };
      messages.value.push(assistantMessage);

      // Update stats
      const stats = await webllm.getStats();
      if (stats) {
        generationStats.value = stats;
        tokensPerSecond.value = stats.tokensPerSecond;
      }

      return response;
    } finally {
      isLoading.value = false;
    }
  };

  // Stream message
  const streamMessage = async function* (
    content: string,
    chatOptions?: ChatOptions
  ): AsyncGenerator<string> {
    isLoading.value = true;

    try {
      // Add user message
      const userMessage: BrowserLLMMessage = {
        role: 'user',
        content,
        timestamp: Date.now(),
      };
      messages.value.push(userMessage);

      // Stream response
      const opts: ChatOptions = {
        temperature: chatOptions?.temperature ?? temperature,
        top_p: chatOptions?.top_p ?? topP,
        max_tokens: chatOptions?.max_tokens ?? maxTokens,
        ...chatOptions,
      };

      let fullResponse = '';
      for await (const chunk of webllm.streamChat(messages.value, opts)) {
        fullResponse += chunk;
        yield chunk;
      }

      // Add assistant message
      const assistantMessage: BrowserLLMMessage = {
        role: 'assistant',
        content: fullResponse,
        timestamp: Date.now(),
      };
      messages.value.push(assistantMessage);

      // Update stats
      const stats = await webllm.getStats();
      if (stats) {
        generationStats.value = stats;
        tokensPerSecond.value = stats.tokensPerSecond;
      }
    } finally {
      isLoading.value = false;
    }
  };

  // Clear messages
  const clearMessages = (): void => {
    messages.value = [];

    // Re-add system message if provided
    if (systemPrompt) {
      messages.value.push({
        role: 'system',
        content: systemPrompt,
        timestamp: Date.now(),
      });
    }

    // Reset chat in engine
    webllm.resetChat();
  };

  return {
    // Model Management
    availableModels,
    selectedModel,
    loadModel,
    unloadModel,
    isModelLoaded: webllm.isModelLoaded,

    // Chat
    messages,
    sendMessage,
    streamMessage,
    clearMessages,

    // Progress & Status
    downloadProgress: webllm.downloadProgress,
    isLoading,
    error: webllm.error,
    isWebGPUSupported,
    webgpuInfo,

    // Performance
    tokensPerSecond,
    generationStats,
  };
}
