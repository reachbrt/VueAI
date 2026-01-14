// Main entry point for @aivue/image-caption

// Import CSS
import './styles/image-caption.css';

// Import Vue compatibility utilities from core
import {
  createCompatComponent,
  registerCompatComponent,
  createCompatPlugin
} from '@aivue/core';

// Import types first
import type {
  ImageCaptionConfig,
  ImageCaptionOptions,
  ImageCaptionResult,
  ImageCaptionError,
  ImageUploadEvent,
  CaptionHistory,
  ImageCaptionState,
  HuggingFaceResponse,
  ImageProcessingOptions,
  CaptionGenerationOptions,
  BatchCaptionRequest,
  BatchCaptionResult,
  ImageCaptionAnalytics,
  ModelInfo
} from './types';

import {
  AVAILABLE_MODELS,
  DEFAULT_CONFIG,
  SUPPORTED_IMAGE_TYPES,
  MAX_IMAGE_SIZE,
  MAX_BATCH_SIZE
} from './types';

import { useImageCaption } from './composables/useImageCaption';
import type { UseImageCaptionOptions, UseImageCaptionReturn } from './composables/useImageCaption';

// Import component
import AiImageCaptionComponent from './components/AiImageCaption.vue';

// Create compatible component
export const AiImageCaption = createCompatComponent(AiImageCaptionComponent);

// Export composables
export { useImageCaption };
export type { UseImageCaptionOptions, UseImageCaptionReturn };

// Export types
export type {
  ImageCaptionConfig,
  ImageCaptionOptions,
  ImageCaptionResult,
  ImageCaptionError,
  ImageUploadEvent,
  CaptionHistory,
  ImageCaptionState,
  HuggingFaceResponse,
  ImageProcessingOptions,
  CaptionGenerationOptions,
  BatchCaptionRequest,
  BatchCaptionResult,
  ImageCaptionAnalytics,
  ModelInfo
};

// Export constants
export {
  AVAILABLE_MODELS,
  DEFAULT_CONFIG,
  SUPPORTED_IMAGE_TYPES,
  MAX_IMAGE_SIZE,
  MAX_BATCH_SIZE
};

// Export utilities
export { createImageCaptionClient } from './utils/client';
export { validateImageFile, resizeImageFile, convertToBase64 } from './utils/image';

// Vue plugin
import type { App } from 'vue';

export interface ImageCaptionPluginOptions {
  apiKey?: string;
  defaultModel?: string;
  globalConfig?: Partial<ImageCaptionConfig>;
}

export const ImageCaptionPlugin = createCompatPlugin({
  install(app: App, options: ImageCaptionPluginOptions = {}) {
    // Register component globally using the compatibility helper
    registerCompatComponent(app, 'AiImageCaption', AiImageCaption);

    // Provide global configuration
    if (options.globalConfig || options.apiKey || options.defaultModel) {
      const globalConfig = {
        ...options.globalConfig,
        ...(options.apiKey && { apiKey: options.apiKey }),
        ...(options.defaultModel && { model: options.defaultModel })
      };

      app.provide('imageCaption:config', globalConfig);
    }
  }
});

// Default export for convenience
export default {
  AiImageCaption,
  useImageCaption,
  ImageCaptionPlugin,
  AVAILABLE_MODELS,
  DEFAULT_CONFIG
};
