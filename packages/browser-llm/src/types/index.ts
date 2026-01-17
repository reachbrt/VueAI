import type { ChatCompletionMessageParam } from '@mlc-ai/web-llm';

export interface BrowserLLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
  timestamp?: number;
}

export interface ModelInfo {
  model_id: string;
  model: string;
  model_lib?: string;
  vram_required_MB?: number;
  low_resource_required?: boolean;
  required_features?: string[];
  size?: string;
  description?: string;
}

export interface ModelDownloadProgress {
  progress: number;
  timeElapsed: number;
  text: string;
  loaded?: number;
  total?: number;
}

export interface BrowserLLMOptions {
  defaultModel?: string;
  temperature?: number;
  topP?: number;
  maxTokens?: number;
  systemPrompt?: string;
  onProgress?: (progress: ModelDownloadProgress) => void;
  onError?: (error: Error) => void;
  cacheModels?: boolean;
}

export interface ChatOptions {
  temperature?: number;
  top_p?: number;
  max_tokens?: number;
  stream?: boolean;
  frequency_penalty?: number;
  presence_penalty?: number;
  logprobs?: boolean;
  top_logprobs?: number;
}

export interface UseBrowserLLMReturn {
  // Model Management
  availableModels: any;
  selectedModel: any;
  loadModel: (modelId: string) => Promise<void>;
  unloadModel: () => Promise<void>;
  isModelLoaded: any;
  
  // Chat
  messages: any;
  sendMessage: (content: string, options?: ChatOptions) => Promise<string>;
  streamMessage: (content: string, options?: ChatOptions) => AsyncGenerator<string>;
  clearMessages: () => void;
  
  // Progress & Status
  downloadProgress: any;
  isLoading: any;
  error: any;
  isWebGPUSupported: any;
  
  // Performance
  tokensPerSecond: any;
  generationStats: any;
}

export interface GenerationStats {
  tokensGenerated: number;
  timeElapsed: number;
  tokensPerSecond: number;
  prefillTokensPerSecond?: number;
  decodeTokensPerSecond?: number;
}

export interface WebGPUInfo {
  supported: boolean;
  adapter?: string;
  features?: string[];
  limits?: Record<string, number>;
}

export { ChatCompletionMessageParam };

