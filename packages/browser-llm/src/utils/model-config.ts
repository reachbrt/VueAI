import type { ModelInfo } from '../types';

/**
 * Predefined model configurations
 * These are high-quality models optimized for browser inference
 */
export const BROWSER_LLM_MODELS: ModelInfo[] = [
  // Llama Models
  {
    model_id: 'Llama-3.2-3B-Instruct-q4f16_1-MLC',
    model: 'https://huggingface.co/mlc-ai/Llama-3.2-3B-Instruct-q4f16_1-MLC',
    size: '~2GB',
    description: 'Llama 3.2 3B - Balanced performance and quality',
    vram_required_MB: 2048,
    low_resource_required: false,
  },
  {
    model_id: 'Llama-3.2-1B-Instruct-q4f16_1-MLC',
    model: 'https://huggingface.co/mlc-ai/Llama-3.2-1B-Instruct-q4f16_1-MLC',
    size: '~800MB',
    description: 'Llama 3.2 1B - Fast and efficient for most tasks',
    vram_required_MB: 896,
    low_resource_required: true,
  },
  {
    model_id: 'Llama-3.1-8B-Instruct-q4f32_1-MLC',
    model: 'https://huggingface.co/mlc-ai/Llama-3.1-8B-Instruct-q4f32_1-MLC',
    size: '~5GB',
    description: 'Llama 3.1 8B - High quality responses, requires more resources',
    vram_required_MB: 5120,
    low_resource_required: false,
  },
  
  // Phi Models
  {
    model_id: 'Phi-3.5-mini-instruct-q4f16_1-MLC',
    model: 'https://huggingface.co/mlc-ai/Phi-3.5-mini-instruct-q4f16_1-MLC',
    size: '~2.5GB',
    description: 'Phi 3.5 Mini - Excellent for reasoning and coding',
    vram_required_MB: 2560,
    low_resource_required: false,
  },
  {
    model_id: 'Phi-3-mini-4k-instruct-q4f16_1-MLC',
    model: 'https://huggingface.co/mlc-ai/Phi-3-mini-4k-instruct-q4f16_1-MLC',
    size: '~2.3GB',
    description: 'Phi 3 Mini - Great for general tasks',
    vram_required_MB: 2304,
    low_resource_required: false,
  },
  
  // Gemma Models
  {
    model_id: 'gemma-2-2b-it-q4f16_1-MLC',
    model: 'https://huggingface.co/mlc-ai/gemma-2-2b-it-q4f16_1-MLC',
    size: '~1.5GB',
    description: 'Gemma 2 2B - Google\'s efficient model',
    vram_required_MB: 1536,
    low_resource_required: true,
  },
  
  // Mistral Models
  {
    model_id: 'Mistral-7B-Instruct-v0.3-q4f16_1-MLC',
    model: 'https://huggingface.co/mlc-ai/Mistral-7B-Instruct-v0.3-q4f16_1-MLC',
    size: '~4GB',
    description: 'Mistral 7B - High quality general purpose model',
    vram_required_MB: 4096,
    low_resource_required: false,
  },
  
  // Qwen Models (通义千问)
  {
    model_id: 'Qwen2.5-7B-Instruct-q4f16_1-MLC',
    model: 'https://huggingface.co/mlc-ai/Qwen2.5-7B-Instruct-q4f16_1-MLC',
    size: '~4.5GB',
    description: 'Qwen 2.5 7B - Excellent multilingual support',
    vram_required_MB: 4608,
    low_resource_required: false,
  },
  {
    model_id: 'Qwen2.5-3B-Instruct-q4f16_1-MLC',
    model: 'https://huggingface.co/mlc-ai/Qwen2.5-3B-Instruct-q4f16_1-MLC',
    size: '~2GB',
    description: 'Qwen 2.5 3B - Balanced multilingual model',
    vram_required_MB: 2048,
    low_resource_required: false,
  },
  {
    model_id: 'Qwen2.5-1.5B-Instruct-q4f16_1-MLC',
    model: 'https://huggingface.co/mlc-ai/Qwen2.5-1.5B-Instruct-q4f16_1-MLC',
    size: '~1GB',
    description: 'Qwen 2.5 1.5B - Fast multilingual model',
    vram_required_MB: 1024,
    low_resource_required: true,
  },
];

/**
 * Get model by ID
 */
export function getModelById(modelId: string): ModelInfo | undefined {
  return BROWSER_LLM_MODELS.find(m => m.model_id === modelId);
}

/**
 * Get models suitable for low-resource devices
 */
export function getLowResourceModels(): ModelInfo[] {
  return BROWSER_LLM_MODELS.filter(m => m.low_resource_required);
}

/**
 * Get models by size category
 */
export function getModelsBySize(size: 'small' | 'medium' | 'large'): ModelInfo[] {
  const sizeRanges = {
    small: [0, 1500],      // < 1.5GB
    medium: [1500, 3500],  // 1.5GB - 3.5GB
    large: [3500, 10000],  // > 3.5GB
  };
  
  const [min, max] = sizeRanges[size];
  return BROWSER_LLM_MODELS.filter(m => {
    const vram = m.vram_required_MB || 0;
    return vram >= min && vram < max;
  });
}

/**
 * Get default recommended model
 */
export function getDefaultModel(): ModelInfo {
  return BROWSER_LLM_MODELS[1]; // Llama-3.2-1B-Instruct - good balance
}

