/**
 * AI Provider types for 360° generation
 */
export type AIProvider = 'openai' | 'stability-ai' | 'huggingface';

/**
 * Generation status
 */
export type GenerationStatus = 'idle' | 'uploading' | 'analyzing' | 'generating' | 'complete' | 'error';

/**
 * Configuration for AI 360° generation
 */
export interface AI360GeneratorConfig {
  /** AI provider to use */
  provider: AIProvider;
  
  /** API key for the provider */
  apiKey: string;
  
  /** Number of frames to generate (default: 36) */
  frameCount?: number;
  
  /** Image quality (0-100, default: 90) */
  quality?: number;
  
  /** Background color for generated images (default: 'white') */
  backgroundColor?: string;
  
  /** Whether to maintain original product size (default: true) */
  maintainSize?: boolean;
  
  /** Custom prompt additions */
  promptAdditions?: string;
  
  /** Timeout in milliseconds (default: 120000 - 2 minutes) */
  timeout?: number;
}

/**
 * Generated frame information
 */
export interface GeneratedFrame {
  /** Frame index (0-based) */
  index: number;
  
  /** Rotation angle in degrees */
  angle: number;
  
  /** Generated image URL (base64 or blob URL) */
  url: string;
  
  /** Generation timestamp */
  timestamp: number;
}

/**
 * Generation result
 */
export interface GenerationResult {
  /** Array of generated frames */
  frames: GeneratedFrame[];
  
  /** Total generation time in milliseconds */
  duration: number;
  
  /** Provider used */
  provider: AIProvider;
  
  /** Success status */
  success: boolean;
  
  /** Error message if failed */
  error?: string;
}

/**
 * Generation progress callback
 */
export interface GenerationProgress {
  /** Current status */
  status: GenerationStatus;
  
  /** Progress percentage (0-100) */
  progress: number;
  
  /** Current frame being generated */
  currentFrame?: number;
  
  /** Total frames to generate */
  totalFrames: number;
  
  /** Status message */
  message: string;
}

/**
 * OpenAI DALL-E specific options
 */
export interface OpenAIOptions {
  /** DALL-E model version (default: 'dall-e-3') */
  model?: 'dall-e-2' | 'dall-e-3';
  
  /** Image size (default: '1024x1024') */
  size?: '256x256' | '512x512' | '1024x1024' | '1792x1024' | '1024x1792';
  
  /** Style (DALL-E 3 only) */
  style?: 'vivid' | 'natural';
}

/**
 * Stability AI specific options
 */
export interface StabilityAIOptions {
  /** Model to use (default: 'stable-video-3d') */
  model?: 'stable-video-3d' | 'stable-fast-3d';
  
  /** Number of inference steps (default: 50) */
  steps?: number;
  
  /** CFG scale (default: 7.5) */
  cfgScale?: number;
}

/**
 * Complete configuration with provider-specific options
 */
export interface AI360GeneratorFullConfig extends AI360GeneratorConfig {
  openai?: OpenAIOptions;
  stabilityAI?: StabilityAIOptions;
}

/**
 * Default configuration
 */
export const DEFAULT_CONFIG: Partial<AI360GeneratorConfig> = {
  frameCount: 36,
  quality: 90,
  backgroundColor: 'white',
  maintainSize: true,
  timeout: 120000
};

