<template>
  <div style="min-height: 100vh; background: #f5f7fa; padding: 2rem;">
    <!-- Main header -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 3rem; border-radius: 16px; margin-bottom: 2rem; box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);">
      <h1 style="margin: 0 0 1rem 0; font-size: 3rem; font-weight: 700;">🚀 Browser LLM - Local AI in Your Browser</h1>
      <p style="margin: 0; font-size: 1.2rem; opacity: 0.95; line-height: 1.6;">
        Run powerful AI models completely locally with zero API costs and 100% privacy!
        All processing happens in your browser using WebGPU acceleration.
      </p>
    </div>

    <!-- Debug/Error Section -->
    <div v-if="componentError" class="error-alert">
      <div class="alert-icon">❌</div>
      <div class="alert-content">
        <h3>Component Error</h3>
        <p>{{ componentError }}</p>
        <p class="alert-hint">Check the browser console for more details.</p>
      </div>
    </div>

    <div v-if="!isComponentReady" class="loading-alert">
      <div class="alert-icon">⏳</div>
      <div class="alert-content">
        <h3>Loading Browser LLM Components...</h3>
        <p>Please wait while we initialize the components.</p>
      </div>
    </div>

    <!-- WebGPU Status -->
    <div v-if="!isWebGPUSupported" class="webgpu-alert">
      <div class="alert-icon">⚠️</div>
      <div class="alert-content">
        <h3>WebGPU Not Supported</h3>
        <p>{{ webgpuErrorMessage }}</p>
        <div style="margin-top: 1rem; padding: 1rem; background: rgba(0,0,0,0.1); border-radius: 8px; font-size: 0.9rem;">
          <strong>Troubleshooting:</strong>
          <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
            <li>Chrome version: Check if you're on Chrome 113+ (you mentioned Chrome 144, which should work)</li>
            <li>Enable WebGPU: Go to <code>chrome://flags</code> and search for "WebGPU" - make sure it's enabled</li>
            <li>GPU drivers: Ensure your GPU drivers are up to date</li>
            <li>Hardware acceleration: Go to <code>chrome://settings</code> → System → Enable "Use hardware acceleration when available"</li>
            <li>Try opening this page in a new incognito window (extensions might interfere)</li>
          </ul>
          <p style="margin-top: 0.5rem;">
            <strong>Debug info:</strong> navigator.gpu = {{ typeof navigator !== 'undefined' && navigator.gpu ? 'available' : 'not available' }}
          </p>
          <button @click="testWebGPU" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #667eea; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
            🔍 Test WebGPU Again
          </button>
          <p v-if="webgpuTestResult" style="margin-top: 0.5rem; padding: 0.5rem; background: rgba(0,0,0,0.1); border-radius: 4px; font-size: 0.85rem;">
            {{ webgpuTestResult }}
          </p>
        </div>
      </div>
    </div>

    <div v-else class="webgpu-success">
      <div class="success-icon">✅</div>
      <div class="success-content">
        <strong>WebGPU Supported!</strong>
        <span v-if="webgpuInfo">
          Adapter: {{ webgpuInfo.adapter }}
        </span>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🔒</div>
        <h3>100% Privacy</h3>
        <p>All processing happens locally. No data sent to servers.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💰</div>
        <h3>Zero Cost</h3>
        <p>No API keys needed. No usage fees. Completely free.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>WebGPU Accelerated</h3>
        <p>Hardware-accelerated inference using your GPU.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📦</div>
        <h3>Offline Capable</h3>
        <p>Models cached in browser. Works without internet.</p>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="!isComponentReady" class="loading-section">
      <div class="loading-spinner"></div>
      <p>Loading Browser LLM components...</p>
      <p v-if="componentLoadError" style="color: red; margin-top: 1rem;">
        Error: {{ componentLoadError }}
      </p>
    </div>

    <!-- Model Selector -->
    <div v-else class="demo-section">
      <h2>📚 Select AI Model</h2>
      <p class="section-description">
        Choose from various models optimized for browser inference. Larger models provide better quality but require more resources.
      </p>

      <!-- Loading Status Banner -->
      <div v-if="isLoading" class="loading-banner">
        <div class="loading-spinner-small"></div>
        <div class="loading-text">
          <strong>Loading Model...</strong>
          <p v-if="downloadProgress">
            {{ downloadProgress.text }} - {{ (downloadProgress.progress * 100).toFixed(1) }}%
          </p>
          <p v-else>Initializing...</p>
        </div>
      </div>

      <!-- Success Banner -->
      <div v-if="isModelLoaded && currentModel" class="success-banner">
        <div class="success-icon">✅</div>
        <div class="success-text">
          <strong>Model Loaded Successfully!</strong>
          <p>{{ currentModel }} is ready to chat</p>
        </div>
      </div>

      <component
        v-if="ModelSelector"
        :is="ModelSelector"
        :available-models="availableModels"
        :current-model="currentModel"
        :is-loading="isLoading"
        :download-progress="downloadProgress"
        :error="error"
        :is-web-g-p-u-supported="isWebGPUSupported"
        @load-model="handleLoadModel"
        @select-model="handleSelectModel"
      />
      <div v-else style="padding: 2rem; background: #fff3cd; border-radius: 8px; color: #856404;">
        ⚠️ Model selector component not loaded
      </div>
    </div>

    <!-- Chat Interface -->
    <div v-if="isModelLoaded && BrowserLLMChat" class="demo-section">
      <h2>💬 Chat with Local AI</h2>
      <p class="section-description">
        Chat with the AI model running completely in your browser.
        <span v-if="tokensPerSecond > 0" class="performance-info">
          Performance: <strong>{{ tokensPerSecond.toFixed(1) }} tokens/second</strong>
        </span>
      </p>

      <component
        :is="BrowserLLMChat"
        title="Local AI Assistant"
        placeholder="Ask me anything..."
        :messages="messages"
        :is-model-loaded="isModelLoaded"
        :is-loading="isLoading"
        :current-model="currentModel"
        :error="error"
        :tokens-per-second="tokensPerSecond"
        :use-streaming="true"
        @send-message="handleSendMessage"
        @stream-message="handleStreamMessage"
        @clear="handleClear"
      />
    </div>

    <!-- Code Example -->
    <div class="demo-section">
      <h2>📝 Code Example</h2>
      <div class="code-block">
        <pre><code>{{ codeExample }}</code></pre>
      </div>
    </div>

    <!-- Info Section -->
    <div class="info-section">
      <h2>ℹ️ How It Works</h2>
      <div class="info-grid">
        <div class="info-item">
          <h3>1. Model Download</h3>
          <p>Models are downloaded once and cached in your browser's storage.</p>
        </div>
        <div class="info-item">
          <h3>2. WebGPU Acceleration</h3>
          <p>Uses your GPU for fast inference through WebGPU API.</p>
        </div>
        <div class="info-item">
          <h3>3. Local Processing</h3>
          <p>All computation happens in your browser. No server calls.</p>
        </div>
        <div class="info-item">
          <h3>4. Offline Ready</h3>
          <p>After initial download, works completely offline.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, shallowRef } from 'vue';
import { useBrowserLLM } from '../../../packages/browser-llm/src/composables/useBrowserLLM';
import { getWebGPUErrorMessage } from '../../../packages/browser-llm/src/utils/webgpu-check';
import ModelSelector from '../../../packages/browser-llm/src/components/ModelSelector.vue';
import BrowserLLMChat from '../../../packages/browser-llm/src/components/BrowserLLMChat.vue';

// Component state
const isComponentReady = ref(true); // Set to true since we're importing directly
const componentLoadError = ref<string>('');
const webgpuTestResult = ref<string>('');
const autoLoadAttempted = ref(false);

// Initialize the composable directly
const {
  availableModels,
  selectedModel,
  loadModel,
  messages,
  sendMessage,
  streamMessage,
  clearMessages,
  isModelLoaded,
  isLoading,
  downloadProgress,
  error,
  isWebGPUSupported,
  webgpuInfo,
  tokensPerSecond,
  currentModel,
} = useBrowserLLM({
  defaultModel: 'Llama-3.2-1B-Instruct-q4f16_1-MLC',
  temperature: 0.7,
  systemPrompt: 'You are a helpful AI assistant running locally in the browser.',
});

// Auto-load default model when WebGPU is supported
watch([isComponentReady, isWebGPUSupported], async ([ready, supported]) => {
  if (ready && supported && !autoLoadAttempted.value && !isModelLoaded.value && !isLoading.value) {
    autoLoadAttempted.value = true;
    try {
      // Auto-load the smallest, fastest model for demo
      await handleLoadModel('Llama-3.2-1B-Instruct-q4f16_1-MLC');
    } catch (err) {
      console.error('Auto-load failed:', err);
    }
  }
});

const webgpuErrorMessage = computed(() => {
  if (getWebGPUErrorMessage) {
    return getWebGPUErrorMessage();
  }
  return 'WebGPU check not available';
});

// Test WebGPU manually
const testWebGPU = async () => {
  webgpuTestResult.value = 'Testing...';

  try {
    if (typeof navigator === 'undefined') {
      webgpuTestResult.value = '❌ Navigator not available (not in browser context)';
      return;
    }

    if (!navigator.gpu) {
      webgpuTestResult.value = '❌ navigator.gpu is not available. WebGPU is not supported or not enabled in your browser.';
      return;
    }

    webgpuTestResult.value = '✅ navigator.gpu is available! Requesting adapter...';

    const adapter = await navigator.gpu.requestAdapter();

    if (!adapter) {
      webgpuTestResult.value = '❌ GPU adapter request failed. Your GPU might not support WebGPU, or drivers need updating.';
      return;
    }

    webgpuTestResult.value = `✅ WebGPU is working! Adapter: ${adapter.name || 'Unknown'}`;

    // Update the main state
    isWebGPUSupported.value = true;
    if (webgpuInfo.value) {
      webgpuInfo.value.supported = true;
      webgpuInfo.value.adapter = adapter.name || 'Unknown';
    }
  } catch (error) {
    webgpuTestResult.value = `❌ Error: ${error instanceof Error ? error.message : String(error)}`;
  }
};

const handleLoadModel = async (modelId: string) => {
  console.log('🔍 Loading model:', modelId);
  try {
    await loadModel(modelId);
    console.log('✅ Model loaded successfully');
  } catch (err) {
    console.error('❌ Failed to load model:', err);
  }
};

const handleSelectModel = (modelId: string) => {
  console.log('🔍 Selected model:', modelId);
  selectedModel.value = modelId;
};

const handleSendMessage = async (content: string) => {
  console.log('🔍 Sending message:', content);
  await sendMessage(content);
};

const handleStreamMessage = async (content: string) => {
  console.log('🔍 Streaming message:', content);
  for await (const chunk of streamMessage(content)) {
    // Streaming is handled automatically by the composable
  }
};

const handleClear = () => {
  console.log('🔍 Clearing messages');
  clearMessages();
};

const codeExample = `import { useBrowserLLM, BrowserLLMChat, ModelSelector } from '@aivue/browser-llm';

const {
  availableModels,
  loadModel,
  messages,
  sendMessage,
  isModelLoaded,
  isWebGPUSupported,
} = useBrowserLLM({
  defaultModel: 'Llama-3.2-1B-Instruct-q4f16_1-MLC',
  temperature: 0.7,
});

// Load a model
await loadModel('Llama-3.2-1B-Instruct-q4f16_1-MLC');

// Send a message
const response = await sendMessage('Hello, how are you?');
console.log(response);`;
</script>

<style scoped>
.browser-llm-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;
}

.demo-header h1 {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.demo-description {
  font-size: 1.125rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.loading-section {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-banner,
.success-banner {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  align-items: center;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loading-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.success-banner {
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  color: white;
}

.loading-spinner-small {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  flex-shrink: 0;
}

.success-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.loading-text,
.success-text {
  flex: 1;
}

.loading-text strong,
.success-text strong {
  display: block;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
}

.loading-text p,
.success-text p {
  margin: 0;
  font-size: 0.875rem;
  opacity: 0.9;
}

.error-alert,
.loading-alert,
.webgpu-alert,
.webgpu-success {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.error-alert {
  background: #f8d7da;
  border: 2px solid #f5c6cb;
}

.loading-alert {
  background: #d1ecf1;
  border: 2px solid #bee5eb;
}

.webgpu-alert {
  background: #fff3cd;
  border: 2px solid #ffc107;
}

.webgpu-success {
  background: #d4edda;
  border: 2px solid #28a745;
}

.alert-icon,
.success-icon {
  font-size: 2rem;
}

.alert-content h3,
.success-content strong {
  margin: 0 0 0.5rem 0;
  color: #856404;
}

.success-content strong {
  color: #155724;
  display: block;
  margin-bottom: 0.25rem;
}

.success-content span {
  color: #155724;
  font-size: 0.875rem;
}

.alert-content p {
  margin: 0.5rem 0;
  color: #856404;
}

.alert-hint {
  font-size: 0.875rem;
  font-style: italic;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1.25rem;
}

.feature-card p {
  margin: 0;
  color: #666;
  font-size: 0.875rem;
  line-height: 1.5;
}

.demo-section {
  margin-bottom: 3rem;
}

.demo-section h2 {
  font-size: 1.75rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.section-description {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.performance-info {
  color: #4CAF50;
  font-size: 0.875rem;
}

.performance-info strong {
  font-weight: 600;
}

.code-block {
  background: #2d2d2d;
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  color: #f8f8f2;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

.info-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem;
  border-radius: 12px;
  margin-top: 3rem;
}

.info-section h2 {
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.info-item h3 {
  color: white;
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
}

.info-item p {
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  line-height: 1.5;
}
</style>
