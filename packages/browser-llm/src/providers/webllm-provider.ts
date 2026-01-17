import { CreateMLCEngine, MLCEngine, ChatCompletionMessageParam, InitProgressReport } from '@mlc-ai/web-llm';
import type { BrowserLLMMessage, ChatOptions, GenerationStats, ModelDownloadProgress } from '../types';

export class WebLLMProvider {
  private engine: MLCEngine | null = null;
  private currentModel: string | null = null;
  private progressCallback?: (progress: ModelDownloadProgress) => void;
  private errorCallback?: (error: Error) => void;

  constructor(
    onProgress?: (progress: ModelDownloadProgress) => void,
    onError?: (error: Error) => void
  ) {
    this.progressCallback = onProgress;
    this.errorCallback = onError;
  }

  /**
   * Load a model
   */
  async loadModel(modelId: string): Promise<void> {
    try {
      console.log(`🔄 Loading model: ${modelId}`);
      
      // Unload existing model if any
      if (this.engine && this.currentModel !== modelId) {
        await this.unloadModel();
      }

      // Create engine with progress callback
      this.engine = await CreateMLCEngine(
        modelId,
        {
          initProgressCallback: (report: InitProgressReport) => {
            const progress: ModelDownloadProgress = {
              progress: report.progress,
              timeElapsed: 0,
              text: report.text,
            };
            
            console.log(`📥 ${report.text} (${(report.progress * 100).toFixed(1)}%)`);
            
            if (this.progressCallback) {
              this.progressCallback(progress);
            }
          },
        }
      );

      this.currentModel = modelId;
      console.log(`✅ Model loaded successfully: ${modelId}`);
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      console.error('❌ Failed to load model:', err);
      
      if (this.errorCallback) {
        this.errorCallback(err);
      }
      
      throw err;
    }
  }

  /**
   * Unload the current model
   */
  async unloadModel(): Promise<void> {
    if (this.engine) {
      console.log(`🔄 Unloading model: ${this.currentModel}`);
      await this.engine.unload();
      this.engine = null;
      this.currentModel = null;
      console.log('✅ Model unloaded');
    }
  }

  /**
   * Send a chat message and get a response
   */
  async chat(
    messages: BrowserLLMMessage[],
    options: ChatOptions = {}
  ): Promise<string> {
    if (!this.engine) {
      throw new Error('Model not loaded. Please load a model first.');
    }

    const webllmMessages: ChatCompletionMessageParam[] = messages.map(msg => ({
      role: msg.role,
      content: msg.content,
    }));

    const response = await this.engine.chat.completions.create({
      messages: webllmMessages,
      temperature: options.temperature,
      top_p: options.top_p,
      max_tokens: options.max_tokens,
      frequency_penalty: options.frequency_penalty,
      presence_penalty: options.presence_penalty,
      logprobs: options.logprobs,
      top_logprobs: options.top_logprobs,
    });

    return response.choices[0]?.message?.content || '';
  }

  /**
   * Stream a chat message
   */
  async *streamChat(
    messages: BrowserLLMMessage[],
    options: ChatOptions = {}
  ): AsyncGenerator<string> {
    if (!this.engine) {
      throw new Error('Model not loaded. Please load a model first.');
    }

    const webllmMessages: ChatCompletionMessageParam[] = messages.map(msg => ({
      role: msg.role,
      content: msg.content,
    }));

    console.log('🔍 Sending messages to WebLLM:', webllmMessages);
    console.log('🔍 Current model:', this.currentModel);
    console.log('🔍 Chat options:', options);

    const chunks = await this.engine.chat.completions.create({
      messages: webllmMessages,
      temperature: options.temperature,
      top_p: options.top_p,
      max_tokens: options.max_tokens,
      frequency_penalty: options.frequency_penalty,
      presence_penalty: options.presence_penalty,
      stream: true,
      stream_options: { include_usage: true },
    });

    let fullResponse = '';
    for await (const chunk of chunks) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        fullResponse += content;
        yield content;
      }
    }

    console.log('✅ Full response from WebLLM:', fullResponse);
  }

  /**
   * Get generation statistics
   */
  async getGenerationStats(): Promise<GenerationStats | null> {
    if (!this.engine) {
      return null;
    }

    try {
      const runtimeStats = await this.engine.runtimeStatsText();

      // Parse the stats text to extract metrics
      // Example format: "prefill: 123.45 tok/s, decode: 67.89 tok/s"
      const prefillMatch = runtimeStats.match(/prefill:\s*([\d.]+)\s*tok\/s/);
      const decodeMatch = runtimeStats.match(/decode:\s*([\d.]+)\s*tok\/s/);

      return {
        tokensGenerated: 0,
        timeElapsed: 0,
        tokensPerSecond: decodeMatch ? parseFloat(decodeMatch[1]) : 0,
        prefillTokensPerSecond: prefillMatch ? parseFloat(prefillMatch[1]) : 0,
        decodeTokensPerSecond: decodeMatch ? parseFloat(decodeMatch[1]) : 0,
      };
    } catch (error) {
      console.error('Failed to get generation stats:', error);
      return null;
    }
  }

  /**
   * Check if a model is currently loaded
   */
  isModelLoaded(): boolean {
    return this.engine !== null;
  }

  /**
   * Get the currently loaded model ID
   */
  getCurrentModel(): string | null {
    return this.currentModel;
  }

  /**
   * Reset the chat (clear conversation history in engine)
   */
  async resetChat(): Promise<void> {
    if (this.engine) {
      await this.engine.resetChat();
    }
  }
}

