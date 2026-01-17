<template>
  <div class="browser-llm-model-selector">
    <div class="model-selector-header">
      <h3>Select AI Model</h3>
      <span v-if="currentModel" class="current-model-badge">
        {{ currentModel }}
      </span>
    </div>

    <div v-if="!isWebGPUSupported" class="webgpu-warning">
      <div class="warning-icon">⚠️</div>
      <div class="warning-content">
        <strong>WebGPU Not Supported</strong>
        <p>{{ webgpuErrorMessage }}</p>
      </div>
    </div>

    <div class="model-list">
      <div
        v-for="model in availableModels"
        :key="model.model_id"
        class="model-item"
        :class="{ 
          'model-item-selected': selectedModelId === model.model_id,
          'model-item-loaded': currentModel === model.model_id 
        }"
        @click="selectModel(model.model_id)"
      >
        <div class="model-info">
          <div class="model-name">{{ getModelDisplayName(model.model_id) }}</div>
          <div class="model-description">{{ model.description }}</div>
          <div class="model-meta">
            <span class="model-size">{{ model.size }}</span>
            <span v-if="model.low_resource_required" class="model-badge">Low Resource</span>
          </div>
        </div>
        <div class="model-actions">
          <button
            v-if="currentModel !== model.model_id"
            class="btn-load"
            :disabled="isLoading"
            @click.stop="loadSelectedModel(model.model_id)"
          >
            {{ isLoading && selectedModelId === model.model_id ? 'Loading...' : 'Load' }}
          </button>
          <span v-else class="loaded-indicator">✓ Loaded</span>
        </div>
      </div>
    </div>

    <div v-if="downloadProgress" class="download-progress">
      <div class="progress-header">
        <span>{{ downloadProgress.text }}</span>
        <span>{{ (downloadProgress.progress * 100).toFixed(1) }}%</span>
      </div>
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          :style="{ width: `${downloadProgress.progress * 100}%` }"
        ></div>
      </div>
    </div>

    <div v-if="error" class="error-message">
      <div class="error-icon">❌</div>
      <div class="error-content">
        <strong>Error</strong>
        <p>{{ error.message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import type { ModelInfo, ModelDownloadProgress } from '../types';
import { getWebGPUErrorMessage } from '../utils/webgpu-check';

interface Props {
  availableModels: ModelInfo[];
  currentModel: string | null;
  isLoading: boolean;
  downloadProgress: ModelDownloadProgress | null;
  error: Error | null;
  isWebGPUSupported: boolean;
}

interface Emits {
  (e: 'load-model', modelId: string): void;
  (e: 'select-model', modelId: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const selectedModelId = ref<string | null>(props.currentModel);

const webgpuErrorMessage = computed(() => getWebGPUErrorMessage());

const selectModel = (modelId: string) => {
  selectedModelId.value = modelId;
  emit('select-model', modelId);
};

const loadSelectedModel = (modelId: string) => {
  selectedModelId.value = modelId;
  emit('load-model', modelId);
};

const getModelDisplayName = (modelId: string): string => {
  // Extract a cleaner display name from model ID
  return modelId
    .replace(/-q4f\d+_\d+-MLC$/, '')
    .replace(/-MLC$/, '')
    .replace(/-/g, ' ');
};
</script>

<style scoped>
.browser-llm-model-selector {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  max-width: 800px;
  margin: 0 auto;
}

.model-selector-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.model-selector-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.current-model-badge {
  background: #4CAF50;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
}

.webgpu-warning,
.error-message {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.webgpu-warning {
  background: #fff3cd;
  border: 1px solid #ffc107;
}

.error-message {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
}

.warning-icon,
.error-icon {
  font-size: 1.5rem;
}

.warning-content,
.error-content {
  flex: 1;
}

.warning-content strong,
.error-content strong {
  display: block;
  margin-bottom: 0.25rem;
  color: #856404;
}

.error-content strong {
  color: #721c24;
}

.warning-content p,
.error-content p {
  margin: 0;
  font-size: 0.875rem;
  color: #856404;
}

.error-content p {
  color: #721c24;
}

.model-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.model-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.model-item:hover {
  border-color: #2196F3;
  background: #f5f5f5;
}

.model-item-selected {
  border-color: #2196F3;
  background: #e3f2fd;
}

.model-item-loaded {
  border-color: #4CAF50;
  background: #e8f5e9;
}

.model-info {
  flex: 1;
}

.model-name {
  font-weight: 600;
  font-size: 1.125rem;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.model-description {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.model-meta {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.model-size {
  font-size: 0.75rem;
  color: #999;
  font-weight: 500;
}

.model-badge {
  background: #2196F3;
  color: white;
  padding: 0.125rem 0.5rem;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 500;
}

.model-actions {
  margin-left: 1rem;
}

.btn-load {
  background: #2196F3;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-load:hover:not(:disabled) {
  background: #1976D2;
}

.btn-load:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.loaded-indicator {
  color: #4CAF50;
  font-weight: 600;
  font-size: 1rem;
}

.download-progress {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #666;
}

.progress-bar {
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #2196F3, #4CAF50);
  transition: width 0.3s ease;
}
</style>
