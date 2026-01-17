import { ref, Ref } from 'vue';
import { WebLLMProvider } from '../providers/webllm-provider';
import type { 
  BrowserLLMMessage, 
  ChatOptions, 
  GenerationStats, 
  ModelDownloadProgress 
} from '../types';

export interface UseWebLLMReturn {
  loadModel: (modelId: string) => Promise<void>;
  unloadModel: () => Promise<void>;
  chat: (messages: BrowserLLMMessage[], options?: ChatOptions) => Promise<string>;
  streamChat: (messages: BrowserLLMMessage[], options?: ChatOptions) => AsyncGenerator<string>;
  getStats: () => Promise<GenerationStats | null>;
  resetChat: () => Promise<void>;
  isModelLoaded: Ref<boolean>;
  currentModel: Ref<string | null>;
  downloadProgress: Ref<ModelDownloadProgress | null>;
  error: Ref<Error | null>;
}

/**
 * Composable for WebLLM integration
 */
export function useWebLLM(): UseWebLLMReturn {
  const isModelLoaded = ref(false);
  const currentModel = ref<string | null>(null);
  const downloadProgress = ref<ModelDownloadProgress | null>(null);
  const error = ref<Error | null>(null);

  const provider = new WebLLMProvider(
    (progress) => {
      downloadProgress.value = progress;
    },
    (err) => {
      error.value = err;
    }
  );

  const loadModel = async (modelId: string): Promise<void> => {
    try {
      error.value = null;
      downloadProgress.value = null;
      isModelLoaded.value = false;
      
      await provider.loadModel(modelId);
      
      isModelLoaded.value = true;
      currentModel.value = modelId;
      downloadProgress.value = null;
    } catch (err) {
      error.value = err instanceof Error ? err : new Error(String(err));
      isModelLoaded.value = false;
      currentModel.value = null;
      throw err;
    }
  };

  const unloadModel = async (): Promise<void> => {
    try {
      await provider.unloadModel();
      isModelLoaded.value = false;
      currentModel.value = null;
      downloadProgress.value = null;
      error.value = null;
    } catch (err) {
      error.value = err instanceof Error ? err : new Error(String(err));
      throw err;
    }
  };

  const chat = async (
    messages: BrowserLLMMessage[],
    options?: ChatOptions
  ): Promise<string> => {
    try {
      error.value = null;
      return await provider.chat(messages, options);
    } catch (err) {
      error.value = err instanceof Error ? err : new Error(String(err));
      throw err;
    }
  };

  const streamChat = async function* (
    messages: BrowserLLMMessage[],
    options?: ChatOptions
  ): AsyncGenerator<string> {
    try {
      error.value = null;
      yield* provider.streamChat(messages, options);
    } catch (err) {
      error.value = err instanceof Error ? err : new Error(String(err));
      throw err;
    }
  };

  const getStats = async (): Promise<GenerationStats | null> => {
    try {
      return await provider.getGenerationStats();
    } catch (err) {
      error.value = err instanceof Error ? err : new Error(String(err));
      return null;
    }
  };

  const resetChat = async (): Promise<void> => {
    try {
      await provider.resetChat();
    } catch (err) {
      error.value = err instanceof Error ? err : new Error(String(err));
      throw err;
    }
  };

  return {
    loadModel,
    unloadModel,
    chat,
    streamChat,
    getStats,
    resetChat,
    isModelLoaded,
    currentModel,
    downloadProgress,
    error,
  };
}

