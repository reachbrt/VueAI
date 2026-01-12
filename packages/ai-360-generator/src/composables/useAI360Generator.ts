import { ref, computed, type Ref } from 'vue';
import { AI360Generator } from '../utils/ai-generator';
import type {
  AI360GeneratorFullConfig,
  GenerationResult,
  GenerationProgress,
  GenerationStatus
} from '../types';

/**
 * Vue composable for AI 360° generation
 */
export function useAI360Generator(config: AI360GeneratorFullConfig) {
  const generator = new AI360Generator(config);

  // State
  const status: Ref<GenerationStatus> = ref('idle');
  const progress = ref(0);
  const currentFrame = ref(0);
  const totalFrames = ref(config.frameCount || 36);
  const message = ref('');
  const result: Ref<GenerationResult | null> = ref(null);
  const error: Ref<string | null> = ref(null);

  // Computed
  const isGenerating = computed(() => 
    status.value === 'uploading' || 
    status.value === 'analyzing' || 
    status.value === 'generating'
  );

  const isComplete = computed(() => status.value === 'complete');
  const hasError = computed(() => status.value === 'error');
  const frames = computed(() => result.value?.frames || []);

  /**
   * Generate 360° frames from an image file
   */
  async function generate(imageFile: File): Promise<GenerationResult> {
    // Reset state
    status.value = 'idle';
    progress.value = 0;
    currentFrame.value = 0;
    error.value = null;
    result.value = null;

    try {
      const generationResult = await generator.generate(
        imageFile,
        (progressData: GenerationProgress) => {
          status.value = progressData.status;
          progress.value = progressData.progress;
          currentFrame.value = progressData.currentFrame || 0;
          totalFrames.value = progressData.totalFrames;
          message.value = progressData.message;
        }
      );

      result.value = generationResult;

      if (generationResult.success) {
        status.value = 'complete';
        progress.value = 100;
        message.value = `Successfully generated ${generationResult.frames.length} frames`;
      } else {
        status.value = 'error';
        error.value = generationResult.error || 'Generation failed';
        message.value = error.value;
      }

      return generationResult;
    } catch (err) {
      status.value = 'error';
      error.value = err instanceof Error ? err.message : 'Unknown error';
      message.value = error.value;

      return {
        frames: [],
        duration: 0,
        provider: config.provider,
        success: false,
        error: error.value
      };
    }
  }

  /**
   * Cancel ongoing generation
   */
  function cancel(): void {
    generator.cancel();
    status.value = 'idle';
    message.value = 'Generation cancelled';
  }

  /**
   * Reset state
   */
  function reset(): void {
    status.value = 'idle';
    progress.value = 0;
    currentFrame.value = 0;
    message.value = '';
    result.value = null;
    error.value = null;
  }

  /**
   * Download frames as ZIP
   */
  async function downloadFrames(filename = '360-frames'): Promise<void> {
    if (!result.value || result.value.frames.length === 0) {
      throw new Error('No frames to download');
    }

    // For now, download individual frames
    // In a real implementation, you'd use JSZip to create a ZIP file
    result.value.frames.forEach((frame, index) => {
      const link = document.createElement('a');
      link.href = frame.url;
      link.download = `${filename}-frame-${String(index + 1).padStart(3, '0')}.png`;
      link.click();
    });
  }

  return {
    // State
    status,
    progress,
    currentFrame,
    totalFrames,
    message,
    result,
    error,

    // Computed
    isGenerating,
    isComplete,
    hasError,
    frames,

    // Methods
    generate,
    cancel,
    reset,
    downloadFrames
  };
}

