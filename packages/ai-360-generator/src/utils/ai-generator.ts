import type {
  AI360GeneratorFullConfig,
  GeneratedFrame,
  GenerationResult,
  GenerationProgress
} from '../types';

/**
 * AI 360° Generator - Core utility for generating 360° product views
 */
export class AI360Generator {
  private config: AI360GeneratorFullConfig;
  private abortController: AbortController | null = null;

  constructor(config: AI360GeneratorFullConfig) {
    this.config = config;
  }

  /**
   * Generate 360° frames from a single product image
   */
  async generate(
    imageFile: File,
    onProgress?: (progress: GenerationProgress) => void
  ): Promise<GenerationResult> {
    const startTime = Date.now();
    this.abortController = new AbortController();

    try {
      // Step 1: Upload and analyze the image
      onProgress?.({
        status: 'uploading',
        progress: 0,
        totalFrames: this.config.frameCount || 36,
        message: 'Uploading image...'
      });

      const imageBase64 = await this.fileToBase64(imageFile);

      // Step 2: Analyze the product
      onProgress?.({
        status: 'analyzing',
        progress: 10,
        totalFrames: this.config.frameCount || 36,
        message: 'Analyzing product...'
      });

      const productDescription = await this.analyzeProduct(imageBase64);

      // Step 3: Generate frames based on provider
      onProgress?.({
        status: 'generating',
        progress: 20,
        totalFrames: this.config.frameCount || 36,
        message: 'Generating 360° views...'
      });

      const frames = await this.generateFrames(
        imageBase64,
        productDescription,
        onProgress
      );

      const duration = Date.now() - startTime;

      return {
        frames,
        duration,
        provider: this.config.provider,
        success: true
      };
    } catch (error) {
      const duration = Date.now() - startTime;
      return {
        frames: [],
        duration,
        provider: this.config.provider,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Analyze product using AI vision
   */
  private async analyzeProduct(imageBase64: string): Promise<string> {
    if (this.config.provider === 'openai') {
      return this.analyzeWithOpenAI(imageBase64);
    }
    // For other providers, return a generic description
    return 'product on white background, studio lighting, professional photography';
  }

  /**
   * Analyze product with OpenAI GPT-4 Vision
   */
  private async analyzeWithOpenAI(imageBase64: string): Promise<string> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Describe this product in detail for 3D rendering. Focus on: type, color, material, key features. Keep it concise (max 50 words).'
              },
              {
                type: 'image_url',
                image_url: {
                  url: imageBase64
                }
              }
            ]
          }
        ],
        max_tokens: 100
      }),
      signal: this.abortController?.signal
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'product';
  }

  /**
   * Generate frames using the configured AI provider
   */
  private async generateFrames(
    imageBase64: string,
    productDescription: string,
    onProgress?: (progress: GenerationProgress) => void
  ): Promise<GeneratedFrame[]> {
    const frameCount = this.config.frameCount || 36;
    const frames: GeneratedFrame[] = [];

    for (let i = 0; i < frameCount; i++) {
      const angle = (360 / frameCount) * i;
      
      onProgress?.({
        status: 'generating',
        progress: 20 + Math.floor((i / frameCount) * 75),
        currentFrame: i + 1,
        totalFrames: frameCount,
        message: `Generating frame ${i + 1}/${frameCount} (${angle}°)...`
      });

      const frameUrl = await this.generateSingleFrame(
        productDescription,
        angle,
        i
      );

      frames.push({
        index: i,
        angle,
        url: frameUrl,
        timestamp: Date.now()
      });
    }

    return frames;
  }

  /**
   * Generate a single frame at a specific angle
   */
  private async generateSingleFrame(
    productDescription: string,
    angle: number,
    _frameIndex: number
  ): Promise<string> {
    if (this.config.provider === 'openai') {
      return this.generateWithOpenAI(productDescription, angle);
    } else if (this.config.provider === 'stability-ai') {
      return this.generateWithStabilityAI(productDescription, angle);
    }
    throw new Error(`Unsupported provider: ${this.config.provider}`);
  }

  /**
   * Generate frame using OpenAI DALL-E
   */
  private async generateWithOpenAI(
    productDescription: string,
    angle: number
  ): Promise<string> {
    const prompt = this.buildPrompt(productDescription, angle);
    const model = this.config.openai?.model || 'dall-e-3';
    const size = this.config.openai?.size || '1024x1024';

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`
      },
      body: JSON.stringify({
        model,
        prompt,
        n: 1,
        size,
        quality: 'hd',
        style: this.config.openai?.style || 'natural'
      }),
      signal: this.abortController?.signal
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`OpenAI DALL-E error: ${error.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const imageUrl = data.data[0]?.url;

    if (!imageUrl) {
      throw new Error('No image URL returned from OpenAI');
    }

    // Download and convert to base64
    return this.downloadAndConvertToBase64(imageUrl);
  }

  /**
   * Generate frame using Stability AI
   */
  private async generateWithStabilityAI(
    productDescription: string,
    angle: number,
    _imageBase64?: string
  ): Promise<string> {
    const prompt = this.buildPrompt(productDescription, angle);

    const response = await fetch('https://api.stability.ai/v2beta/stable-image/generate/core', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        prompt,
        output_format: 'png',
        aspect_ratio: '1:1'
      }),
      signal: this.abortController?.signal
    });

    if (!response.ok) {
      throw new Error(`Stability AI error: ${response.statusText}`);
    }

    const data = await response.json();
    return `data:image/png;base64,${data.image}`;
  }

  /**
   * Build prompt for specific angle
   */
  private buildPrompt(productDescription: string, angle: number): string {
    const viewDescription = this.getViewDescription(angle);
    const background = this.config.backgroundColor || 'white';
    const additions = this.config.promptAdditions || '';

    return `${productDescription}, viewed from ${viewDescription} (${angle} degrees rotation), ${background} background, studio lighting, professional product photography, high quality, detailed ${additions}`.trim();
  }

  /**
   * Get view description for angle
   */
  private getViewDescription(angle: number): string {
    if (angle === 0) return 'front';
    if (angle === 90) return 'right side';
    if (angle === 180) return 'back';
    if (angle === 270) return 'left side';
    if (angle < 90) return `front-right at ${angle}°`;
    if (angle < 180) return `right-back at ${angle}°`;
    if (angle < 270) return `back-left at ${angle}°`;
    return `left-front at ${angle}°`;
  }

  /**
   * Convert File to base64
   */
  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  /**
   * Download image and convert to base64
   */
  private async downloadAndConvertToBase64(url: string): Promise<string> {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  /**
   * Cancel ongoing generation
   */
  cancel(): void {
    this.abortController?.abort();
  }
}

