<template>
  <div class="ai-360-generator">
    <div class="generator-header">
      <h3>{{ title }}</h3>
      <p class="generator-description">{{ description }}</p>
    </div>

    <!-- Upload Section -->
    <div v-if="!isGenerating && !isComplete" class="upload-section">
      <div 
        class="upload-dropzone"
        :class="{ 'dragover': isDragging }"
        @drop.prevent="handleDrop"
        @dragover.prevent="isDragging = true"
        @dragleave.prevent="isDragging = false"
      >
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          @change="handleFileSelect"
          class="file-input"
        />
        
        <div class="upload-content">
          <div class="upload-icon">📸</div>
          <p class="upload-text">
            Drag & drop a product image here, or click to browse
          </p>
          <button @click="triggerFileInput" class="upload-button">
            Choose Image
          </button>
        </div>
      </div>

      <!-- Preview uploaded image -->
      <div v-if="uploadedImage" class="image-preview">
        <img :src="uploadedImage" alt="Uploaded product" />
        <button @click="clearImage" class="clear-button">✕</button>
      </div>

      <!-- Generate button -->
      <button
        v-if="uploadedImage"
        @click="startGeneration"
        class="generate-button"
        :disabled="isGenerating"
      >
        🚀 Generate 360° View
      </button>
    </div>

    <!-- Progress Section -->
    <div v-if="isGenerating" class="progress-section">
      <div class="progress-header">
        <h4>{{ message }}</h4>
        <span class="progress-percentage">{{ progress }}%</span>
      </div>
      
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
      </div>

      <div class="progress-details">
        <span v-if="currentFrame > 0">
          Frame {{ currentFrame }} / {{ totalFrames }}
        </span>
        <span class="status-badge" :class="`status-${status}`">
          {{ status }}
        </span>
      </div>

      <button @click="cancelGeneration" class="cancel-button">
        Cancel
      </button>
    </div>

    <!-- Results Section -->
    <div v-if="isComplete && frames.length > 0" class="results-section">
      <div class="results-header">
        <h4>✅ Generation Complete!</h4>
        <p>Generated {{ frames.length }} frames in {{ formatDuration(result?.duration || 0) }}</p>
      </div>

      <!-- Frame preview grid -->
      <div class="frames-grid">
        <div
          v-for="frame in frames.slice(0, 12)"
          :key="frame.index"
          class="frame-item"
        >
          <img :src="frame.url" :alt="`Frame ${frame.index + 1}`" />
          <span class="frame-label">{{ frame.angle }}°</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="results-actions">
        <button @click="downloadAllFrames" class="action-button primary">
          📥 Download All Frames
        </button>
        <button @click="previewIn360Viewer" class="action-button">
          👁️ Preview in 360° Viewer
        </button>
        <button @click="reset" class="action-button">
          🔄 Generate Another
        </button>
      </div>
    </div>

    <!-- Error Section -->
    <div v-if="hasError" class="error-section">
      <div class="error-icon">⚠️</div>
      <h4>Generation Failed</h4>
      <p>{{ error }}</p>
      <button @click="reset" class="retry-button">
        Try Again
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAI360Generator } from '../composables/useAI360Generator';
import type { AI360GeneratorFullConfig } from '../types';

// Props
const props = withDefaults(defineProps<{
  title?: string;
  description?: string;
  provider?: 'openai' | 'stability-ai';
  apiKey: string;
  frameCount?: number;
  quality?: number;
  backgroundColor?: string;
}>(), {
  title: 'AI 360° Generator',
  description: 'Upload a product image and AI will generate a complete 360° view',
  provider: 'openai',
  frameCount: 36,
  quality: 90,
  backgroundColor: 'white'
});

// Emits
const emit = defineEmits<{
  complete: [frames: any[]];
  error: [error: string];
}>();

// Config
const config = computed<AI360GeneratorFullConfig>(() => ({
  provider: props.provider,
  apiKey: props.apiKey,
  frameCount: props.frameCount,
  quality: props.quality,
  backgroundColor: props.backgroundColor
}));

// Use composable
const {
  status,
  progress,
  currentFrame,
  totalFrames,
  message,
  result,
  error,
  isGenerating,
  isComplete,
  hasError,
  frames,
  generate,
  cancel,
  reset: resetGenerator,
  downloadFrames
} = useAI360Generator(config.value);

// Local state
const fileInput = ref<HTMLInputElement | null>(null);
const uploadedImage = ref<string | null>(null);
const uploadedFile = ref<File | null>(null);
const isDragging = ref(false);

// Methods
function triggerFileInput() {
  fileInput.value?.click();
}

function handleFileSelect(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    processFile(file);
  }
}

function handleDrop(event: DragEvent) {
  isDragging.value = false;
  const file = event.dataTransfer?.files[0];
  if (file && file.type.startsWith('image/')) {
    processFile(file);
  }
}

function processFile(file: File) {
  uploadedFile.value = file;
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedImage.value = e.target?.result as string;
  };
  reader.readAsDataURL(file);
}

function clearImage() {
  uploadedImage.value = null;
  uploadedFile.value = null;
  if (fileInput.value) {
    fileInput.value.value = '';
  }
}

async function startGeneration() {
  if (!uploadedFile.value) return;

  try {
    const result = await generate(uploadedFile.value);
    if (result.success) {
      emit('complete', result.frames);
    } else {
      emit('error', result.error || 'Generation failed');
    }
  } catch (err) {
    emit('error', err instanceof Error ? err.message : 'Unknown error');
  }
}

function cancelGeneration() {
  cancel();
}

function reset() {
  resetGenerator();
  clearImage();
}

async function downloadAllFrames() {
  await downloadFrames('ai-360-frames');
}

function previewIn360Viewer() {
  // Emit event for parent to handle
  emit('complete', frames.value);
}

function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}
</script>

<style scoped>
.ai-360-generator {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, -apple-system, sans-serif;
}

.generator-header {
  text-align: center;
  margin-bottom: 2rem;
}

.generator-header h3 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
}

.generator-description {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

/* Upload Section */
.upload-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.upload-dropzone {
  border: 2px dashed #cbd5e0;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  background: #f7fafc;
}

.upload-dropzone:hover,
.upload-dropzone.dragover {
  border-color: #4299e1;
  background: #ebf8ff;
}

.file-input {
  display: none;
}

.upload-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.upload-icon {
  font-size: 3rem;
}

.upload-text {
  color: #4a5568;
  margin: 0;
}

.upload-button {
  padding: 0.75rem 2rem;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.upload-button:hover {
  background: #3182ce;
}

.image-preview {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.image-preview img {
  width: 100%;
  height: auto;
  display: block;
}

.clear-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.clear-button:hover {
  background: rgba(0, 0, 0, 0.9);
}

.generate-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.generate-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
}

.generate-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Progress Section */
.progress-section {
  padding: 2rem;
  background: #f7fafc;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.progress-header h4 {
  margin: 0;
  font-size: 1.1rem;
  color: #2d3748;
}

.progress-percentage {
  font-size: 1.5rem;
  font-weight: 700;
  color: #4299e1;
}

.progress-bar {
  height: 12px;
  background: #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4299e1 0%, #667eea 100%);
  transition: width 0.3s ease;
  border-radius: 6px;
}

.progress-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: #718096;
  font-size: 0.9rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.status-uploading { background: #bee3f8; color: #2c5282; }
.status-analyzing { background: #feebc8; color: #7c2d12; }
.status-generating { background: #c6f6d5; color: #22543d; }

.cancel-button {
  width: 100%;
  padding: 0.75rem;
  background: #fc8181;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.cancel-button:hover {
  background: #f56565;
}

/* Results Section */
.results-section {
  padding: 2rem;
  background: #f7fafc;
  border-radius: 12px;
}

.results-header {
  text-align: center;
  margin-bottom: 2rem;
}

.results-header h4 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.results-header p {
  color: #718096;
  margin: 0;
}

.frames-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.frame-item {
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.frame-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.frame-label {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.results-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-button {
  flex: 1;
  min-width: 150px;
  padding: 0.75rem 1.5rem;
  border: 2px solid #cbd5e0;
  background: white;
  color: #2d3748;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.action-button:hover {
  border-color: #4299e1;
  color: #4299e1;
  transform: translateY(-2px);
}

.action-button.primary {
  background: #4299e1;
  color: white;
  border-color: #4299e1;
}

.action-button.primary:hover {
  background: #3182ce;
  border-color: #3182ce;
  color: white;
}

/* Error Section */
.error-section {
  text-align: center;
  padding: 3rem 2rem;
  background: #fff5f5;
  border-radius: 12px;
  border: 2px solid #fc8181;
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-section h4 {
  color: #c53030;
  margin: 0 0 0.5rem 0;
}

.error-section p {
  color: #742a2a;
  margin: 0 0 1.5rem 0;
}

.retry-button {
  padding: 0.75rem 2rem;
  background: #4299e1;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.retry-button:hover {
  background: #3182ce;
}
</style>

