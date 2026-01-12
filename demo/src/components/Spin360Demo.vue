<template>
  <div class="spin360-demo">
    <div class="demo-header">
      <h2>🔄 360° Product Spin</h2>
      <p class="demo-description">
        Interactive 360-degree product view with <strong>real product photography sequences</strong>.
        Hover to see products rotate through 36 frames for a smooth 360° spin.
        Perfect for e-commerce product listings, carousels, and detail pages.
      </p>
    </div>

    <div class="demo-content">
      <!-- Main Demo Section -->
      <div class="demo-main">
        <div class="demo-section">
          <h3>🖼️ Frame Sequence Mode (Hover to Spin)</h3>
          <p class="section-description">Hover over the product to see a true 360° rotation through 36 product photos</p>
          
          <div class="demo-grid">
            <div class="product-card">
              <Ai360Spin
                :static-image="gifDemo.static"
                :animated-image="gifDemo.animated"
                mode="frames"
                trigger="hover"
                :frame-rate="24"
                :preload="false"
                :show-loading="false"
                alt="Watch 360 view"
                container-class="ai-360-spin--card"
                @animation-start="onAnimationStart"
                @animation-end="onAnimationEnd"
              />
              <div class="product-info">
                <h4>Luxury Car</h4>
                <p class="price">$45,999</p>
              </div>
            </div>

            <div class="product-card">
              <Ai360Spin
                :static-image="gifDemo2.static"
                :animated-image="gifDemo2.animated"
                mode="frames"
                trigger="hover"
                :frame-rate="24"
                :preload="false"
                :show-loading="false"
                alt="Nike Sneakers 360 view"
                container-class="ai-360-spin--card"
              />
              <div class="product-info">
                <h4>Nike Sneakers</h4>
                <p class="price">$189.99</p>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-section">
          <h3>🎬 Frame Sequence Mode (Drag to Spin)</h3>
          <p class="section-description">Drag or swipe to manually control the rotation</p>
          
          <div class="demo-large">
            <Ai360Spin
              :static-image="frameDemo.static"
              :animated-image="frameDemo.frames"
              mode="frames"
              trigger="hover"
              :frame-rate="30"
              :preload="false"
              :show-loading="false"
              enable-drag-spin
              :drag-sensitivity="8"
              alt="Product frame sequence"
              width="500px"
              height="500px"
              @frame-change="onFrameChange"
            />
            <div class="frame-info" v-if="currentFrame !== null">
              Frame: {{ currentFrame + 1 }} / {{ frameDemo.frames.length }}
            </div>
          </div>
        </div>

        <div class="demo-section">
          <h3>🛍️ Product Grid Example</h3>
          <p class="section-description">Typical e-commerce product listing layout</p>

          <div class="product-grid">
            <div v-for="(product, index) in products" :key="index" class="grid-item">
              <Ai360Spin
                :static-image="product.static"
                :animated-image="product.animated"
                mode="frames"
                :frame-rate="24"
                :alt="product.name"
                :preload="false"
                :show-loading="false"
                container-class="ai-360-spin--grid"
                trigger="hover"
              />
              <div class="grid-item-info">
                <h5>{{ product.name }}</h5>
                <p class="price">{{ product.price }}</p>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-section ai-generator-section">
          <h3>🤖 AI 360° Generator (Upload & Generate)</h3>
          <p class="section-description">Upload a single product image and AI will generate a 360° view with multiple angles</p>

          <div class="ai-generator-container">
            <!-- API Key Input -->
            <div v-if="!hasApiKey" class="api-key-input">
              <label for="openai-key">OpenAI API Key:</label>
              <input
                id="openai-key"
                v-model="openaiApiKey"
                type="password"
                placeholder="sk-..."
                @input="saveApiKey"
              />
              <p class="api-hint">Enter your OpenAI API key to use AI 360° generation</p>
            </div>

            <!-- Upload Section -->
            <div v-if="hasApiKey" class="upload-section">
              <div
                class="upload-area"
                :class="{ 'drag-over': isDragging }"
                @drop.prevent="handleDrop"
                @dragover.prevent="isDragging = true"
                @dragleave.prevent="isDragging = false"
              >
                <div v-if="!uploadedImage" class="upload-placeholder">
                  <div class="upload-icon">📤</div>
                  <p class="upload-text">Drag & drop a product image here</p>
                  <p class="upload-subtext">or</p>
                  <label class="upload-button">
                    <input
                      type="file"
                      accept="image/*"
                      @change="handleFileSelect"
                      style="display: none"
                    />
                    Choose File
                  </label>
                </div>

                <div v-else class="uploaded-preview">
                  <img :src="uploadedImage" alt="Uploaded product" />
                  <button class="clear-button" @click="clearUpload">✕ Clear</button>
                </div>
              </div>

              <!-- Generation Controls -->
              <div v-if="uploadedImage && !isGenerating" class="generation-controls">
                <div class="control-group">
                  <label>Frame Count:</label>
                  <select v-model.number="frameCount">
                    <option :value="12">12 frames (Fast)</option>
                    <option :value="24">24 frames (Balanced)</option>
                    <option :value="36">36 frames (Smooth)</option>
                  </select>
                </div>

                <div class="control-group">
                  <label>Background:</label>
                  <select v-model="backgroundColor">
                    <option value="white">White</option>
                    <option value="transparent">Transparent</option>
                    <option value="black">Black</option>
                  </select>
                </div>

                <button class="generate-button" @click="generateAI360">
                  🤖 Generate 360° View
                </button>
              </div>

              <!-- Progress Section -->
              <div v-if="isGenerating" class="progress-section">
                <div class="progress-header">
                  <h4>{{ generationStatus }}</h4>
                  <p class="progress-text">{{ generationProgress }}%</p>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" :style="{ width: generationProgress + '%' }"></div>
                </div>
                <p class="progress-detail">{{ generationDetail }}</p>
              </div>

              <!-- Generated Result -->
              <div v-if="generatedFrames.length > 0 && !isGenerating" class="generated-result">
                <h4>✨ Generated 360° View</h4>
                <p style="color: #666; margin-bottom: 15px;">
                  Hover over the image to see it spin, or drag to manually control the rotation.
                </p>
                <div class="result-viewer">
                  <Ai360Spin
                    :static-image="generatedFrames[0]"
                    :animated-image="generatedFrames"
                    mode="frames"
                    trigger="hover"
                    :frame-rate="24"
                    enable-drag-spin
                    :drag-sensitivity="8"
                    alt="AI Generated 360 view"
                    width="400px"
                    height="400px"
                  />
                </div>
                <div class="result-actions">
                  <button class="action-button" @click="downloadFrames">
                    💾 Download Frames
                  </button>
                  <button class="action-button secondary" @click="resetGenerator">
                    🔄 Generate Another
                  </button>
                </div>
                <div class="frame-preview">
                  <p class="preview-label">Generated Frames ({{ generatedFrames.length }} total):</p>
                  <div class="frame-grid">
                    <img
                      v-for="(frame, index) in generatedFrames.slice(0, 12)"
                      :key="index"
                      :src="frame"
                      :alt="`Frame ${index + 1}`"
                      class="frame-thumbnail"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Info Panel -->
      <div class="info-panel">
        <div class="info-card">
          <h3>✨ Features</h3>
          <ul class="feature-list">
            <li>✅ Static to animated on hover/tap</li>
            <li>✅ GIF and frame sequence support</li>
            <li>✅ Mobile drag-to-spin</li>
            <li>✅ Preloading for smooth UX</li>
            <li>✅ Product card integration</li>
            <li>✅ Carousel compatible</li>
            <li>✅ Customizable triggers</li>
            <li>✅ Responsive design</li>
          </ul>
        </div>

        <div class="info-card">
          <h3>🎯 Use Cases</h3>
          <ul class="use-case-list">
            <li><strong>Product Listings:</strong> Show 360° view on hover</li>
            <li><strong>Product Details:</strong> Interactive spin viewer</li>
            <li><strong>Carousels:</strong> Animated product showcases</li>
            <li><strong>Search Results:</strong> Enhanced product previews</li>
            <li><strong>Mobile Apps:</strong> Touch-enabled rotation</li>
          </ul>
        </div>

        <div class="info-card">
          <h3>⚙️ Configuration</h3>
          <div class="config-options">
            <div class="config-item">
              <label>
                <input type="checkbox" v-model="showAnimationStatus" />
                Show Animation Status
              </label>
            </div>
          </div>
          <div v-if="showAnimationStatus" class="status-display">
            <p><strong>Status:</strong> {{ animationStatus }}</p>
          </div>
        </div>

        <div class="info-card highlight-card">
          <h3>🚀 Quick Start</h3>
          <div class="code-example">
            <pre><code>&lt;Ai360Spin
  static-image="/product.jpg"
  animated-image="/product-360.gif"
  trigger="hover"
  alt="Product 360 view"
/&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Ai360Spin } from '@aivue/360-spin';
import '@aivue/360-spin/360-spin.css';
import { AIClient } from '@aivue/core';

// Animation status
const animationStatus = ref('Idle');
const showAnimationStatus = ref(true);
const currentFrame = ref<number | null>(null);

// AI Generator state
const openaiApiKey = ref('');
const hasApiKey = computed(() => openaiApiKey.value.trim().length > 0);
const uploadedImage = ref<string | null>(null);
const uploadedFile = ref<File | null>(null);
const isDragging = ref(false);
const isGenerating = ref(false);
const generationStatus = ref('');
const generationProgress = ref(0);
const generationDetail = ref('');
const generatedFrames = ref<string[]>([]);
const frameCount = ref(36);
const backgroundColor = ref('white');

// Load API key from localStorage
onMounted(() => {
  const savedKey = localStorage.getItem('openai_api_key');
  if (savedKey) {
    openaiApiKey.value = savedKey;
  }
});

// Demo data - Using REAL 360° product spin image sequences from Scaleflex CDN
// These are actual 360-degree product photography sequences, not just two static images!

// Car demo - 36 frames for smooth 360° rotation (iris car)
const carFrames = Array.from({ length: 36 }, (_, i) =>
  `https://scaleflex.cloudimg.io/v7/demo/360-car/iris-${i + 1}.jpeg`
);

const gifDemo = {
  static: carFrames[0], // First frame as static
  animated: carFrames  // All 36 frames for 360° spin
};

// Nike shoe demo - 35 frames for smooth 360° rotation
const nikeFrames = Array.from({ length: 35 }, (_, i) =>
  `https://scaleflex.cloudimg.io/v7/demo/360-nike/nike-${i + 1}.jpg`
);

const gifDemo2 = {
  static: nikeFrames[0], // First frame as static
  animated: nikeFrames  // All 36 frames for 360° spin
};

// Car demo (large) - 36 frames for smooth 360° rotation with drag
const frameDemo = {
  static: carFrames[0], // First frame as static
  frames: carFrames  // All 36 frames for 360° spin
};

// Product grid data - Each with real 360° spin sequences
const products = [
  {
    name: 'Luxury Car',
    price: '$45,999',
    static: carFrames[0],
    animated: carFrames
  },
  {
    name: 'Nike Sneakers',
    price: '$189.99',
    static: nikeFrames[0],
    animated: nikeFrames
  },
  {
    name: 'Sports Car',
    price: '$52,999',
    static: carFrames[0],
    animated: carFrames
  },
  {
    name: 'Running Shoes',
    price: '$159.99',
    static: nikeFrames[0],
    animated: nikeFrames
  }
];

// Event handlers
function onAnimationStart() {
  animationStatus.value = 'Animating...';
}

function onAnimationEnd() {
  animationStatus.value = 'Idle';
}

function onFrameChange(frame: number) {
  currentFrame.value = frame;
}

// AI Generator functions
function saveApiKey() {
  localStorage.setItem('openai_api_key', openaiApiKey.value);
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

function clearUpload() {
  uploadedImage.value = null;
  uploadedFile.value = null;
  generatedFrames.value = [];
}

function resetGenerator() {
  uploadedImage.value = null;
  uploadedFile.value = null;
  generatedFrames.value = [];
  generationProgress.value = 0;
  generationStatus.value = '';
  generationDetail.value = '';
}

async function generateAI360() {
  if (!uploadedImage.value || !openaiApiKey.value) return;

  isGenerating.value = true;
  generatedFrames.value = [];
  generationProgress.value = 0;
  generationStatus.value = 'Analyzing product...';
  generationDetail.value = 'Using GPT-4 Vision to understand your product';

  try {
    const aiClient = new AIClient({
      provider: 'openai',
      apiKey: openaiApiKey.value,
      model: 'gpt-4o'
    });

    // Step 1: Analyze the product
    generationProgress.value = 10;
    const analysisPrompt = `Analyze this product image and provide a detailed description focusing on:
- Product type and category
- Key visual features (color, shape, material, design)
- Notable details and characteristics
Keep it concise but descriptive for image generation purposes.`;

    const analysisResponse = await aiClient.chat([
      {
        role: 'user',
        content: [
          { type: 'text', text: analysisPrompt },
          { type: 'image_url', image_url: { url: uploadedImage.value } }
        ]
      }
    ]);

    const productDescription = typeof analysisResponse === 'string'
      ? analysisResponse
      : analysisResponse.content || '';

    generationProgress.value = 20;
    generationStatus.value = 'Generating 360° frames...';
    generationDetail.value = `Creating ${frameCount.value} frames from different angles`;

    // Step 2: Generate frames at different angles
    const frames: string[] = [];
    const angleStep = 360 / frameCount.value;

    for (let i = 0; i < frameCount.value; i++) {
      const angle = Math.round(i * angleStep);
      generationProgress.value = 20 + Math.round((i / frameCount.value) * 75);
      generationDetail.value = `Generating frame ${i + 1}/${frameCount.value} (${angle}° angle)`;

      const prompt = `Create a high-quality product photograph of: ${productDescription}

View angle: ${angle} degrees rotation (0° is front view, rotating clockwise when viewed from above)
Background: ${backgroundColor.value}
Style: Professional product photography, studio lighting, high detail, sharp focus
Maintain consistent: lighting, scale, and product appearance across all angles

Important: Show the SAME product from a ${angle}° rotated viewpoint. Keep all product features, colors, and details identical.`;

      try {
        // Use DALL-E 3 for image generation
        const response = await fetch('https://api.openai.com/v1/images/generations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiApiKey.value}`
          },
          body: JSON.stringify({
            model: 'dall-e-3',
            prompt: prompt,
            n: 1,
            size: '1024x1024',
            quality: 'hd',
            style: 'natural'
          })
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.statusText}`);
        }

        const data = await response.json();
        const imageUrl = data.data[0]?.url;

        if (imageUrl) {
          // Convert to base64 for local storage
          const base64 = await urlToBase64(imageUrl);
          frames.push(base64);
          generatedFrames.value = [...frames]; // Update preview
        }
      } catch (error) {
        console.error(`Error generating frame ${i + 1}:`, error);
        // Continue with next frame even if one fails
      }
    }

    generationProgress.value = 100;
    generationStatus.value = '✅ Generation Complete!';
    generationDetail.value = `Successfully generated ${frames.length} frames`;

    console.log('[AI360] Generation complete!', {
      framesGenerated: frames.length,
      isGenerating: isGenerating.value,
      generatedFramesLength: generatedFrames.value.length
    });

  } catch (error) {
    console.error('AI Generation error:', error);
    generationStatus.value = '❌ Generation Failed';
    generationDetail.value = error instanceof Error ? error.message : 'Unknown error occurred';
  } finally {
    isGenerating.value = false;
    console.log('[AI360] isGenerating set to false, generatedFrames:', generatedFrames.value.length);
  }
}

async function urlToBase64(url: string): Promise<string> {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function downloadFrames() {
  generatedFrames.value.forEach((frame, index) => {
    const link = document.createElement('a');
    link.href = frame;
    link.download = `360-frame-${String(index + 1).padStart(3, '0')}.png`;
    link.click();
  });
}
</script>

<style scoped>
.spin360-demo {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;
}

.demo-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.demo-description {
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.demo-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
}

.demo-main {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.demo-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.section-description {
  color: #666;
  margin-bottom: 1.5rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.product-card {
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.product-info {
  padding: 1rem;
  text-align: center;
}

.product-info h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #667eea;
}

.demo-large {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.frame-info {
  padding: 0.5rem 1rem;
  background: #667eea;
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.grid-item {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.grid-item:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.grid-item-info {
  padding: 1rem;
}

.grid-item-info h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.add-to-cart {
  width: 100%;
  padding: 0.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 0.5rem;
}

.add-to-cart:hover {
  background: #5568d3;
}

.info-panel {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.feature-list,
.use-case-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li,
.use-case-list li {
  padding: 0.5rem 0;
  color: #555;
  line-height: 1.5;
}

.use-case-list li {
  margin-bottom: 0.75rem;
}

.use-case-list strong {
  color: #667eea;
}

.config-options {
  margin-bottom: 1rem;
}

.config-item {
  margin-bottom: 0.75rem;
}

.config-item label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: #555;
}

.config-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.status-display {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.status-display p {
  margin: 0;
  color: #555;
}

.highlight-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.highlight-card h3 {
  color: white;
}

.code-example {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
}

.code-example pre {
  margin: 0;
  color: white;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.code-example code {
  color: white;
}

@media (max-width: 1024px) {
  .demo-content {
    grid-template-columns: 1fr;
  }

  .info-panel {
    order: -1;
  }
}

@media (max-width: 768px) {
  .spin360-demo {
    padding: 1rem;
  }

  .demo-header h2 {
    font-size: 2rem;
  }

  .demo-grid {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}

/* AI Generator Styles */
.ai-generator-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border: 2px solid #667eea;
}

.ai-generator-container {
  margin-top: 1rem;
}

.api-key-input {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.api-key-input label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.api-key-input input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.api-key-input input:focus {
  outline: none;
  border-color: #667eea;
}

.api-hint {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.upload-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.upload-area {
  background: white;
  border: 3px dashed #ccc;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-area.drag-over {
  border-color: #667eea;
  background: #f0f4ff;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.upload-icon {
  font-size: 4rem;
}

.upload-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.upload-subtext {
  color: #666;
  margin: 0;
}

.upload-button {
  padding: 0.75rem 2rem;
  background: #667eea;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.upload-button:hover {
  background: #5568d3;
}

.uploaded-preview {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}

.uploaded-preview img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.clear-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.clear-button:hover {
  background: rgba(255, 0, 0, 1);
}

.generation-controls {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-end;
}

.control-group {
  flex: 1;
  min-width: 150px;
}

.control-group label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.control-group select {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.control-group select:focus {
  outline: none;
  border-color: #667eea;
}

.generate-button {
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  white-space: nowrap;
}

.generate-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.progress-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.progress-header h4 {
  margin: 0;
  color: #333;
  font-size: 1.1rem;
}

.progress-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin: 0;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s ease;
}

.progress-detail {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.generated-result {
  background: white;
  padding: 2rem;
  border-radius: 8px;
}

.generated-result h4 {
  margin: 0 0 1.5rem 0;
  color: #333;
  font-size: 1.3rem;
}

.result-viewer {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.result-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.action-button {
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

.action-button.secondary {
  background: #6c757d;
}

.action-button.secondary:hover {
  background: #5a6268;
}

.frame-preview {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 2px solid #e0e0e0;
}

.preview-label {
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.frame-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.5rem;
}

.frame-thumbnail {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
  cursor: pointer;
}

.frame-thumbnail:hover {
  border-color: #667eea;
  transform: scale(1.05);
}
</style>

