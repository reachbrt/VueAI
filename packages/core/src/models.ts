export interface CatalogMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface CatalogChatOptions {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
  stopSequences?: string[];
}

export type CatalogProvider = 'openai' | 'claude' | 'gemini' | 'huggingface' | 'ollama' | 'deepseek';

export interface ModelChoice {
  id: string;
  label: string;
  provider: CatalogProvider;
}

/**
 * Current chat models as of October 2026.
 * Defaults are the first entry for each provider.
 */
export const MODEL_CATALOG: Record<CatalogProvider, ModelChoice[]> = {
  openai: [
    { id: 'gpt-6.1-sol', label: 'GPT-6.1 Sol', provider: 'openai' },
    { id: 'gpt-5.6-sol', label: 'GPT-5.6 Sol', provider: 'openai' }
  ],
  claude: [
    { id: 'claude-sonnet-5-5', label: 'Claude Sonnet 5.5', provider: 'claude' },
    { id: 'claude-opus-5-5', label: 'Claude Opus 5.5', provider: 'claude' },
    { id: 'claude-haiku-5-5', label: 'Claude Haiku 5.5', provider: 'claude' }
  ],
  gemini: [
    { id: 'gemini-3.8-flash', label: 'Gemini 3.8 Flash', provider: 'gemini' },
    { id: 'gemini-4-argon', label: 'Gemini 4 Argon', provider: 'gemini' },
    { id: 'gemini-3.5-flash-lite', label: 'Gemini 3.5 Flash-Lite', provider: 'gemini' }
  ],
  deepseek: [
    { id: 'deepseek-flash', label: 'DeepSeek Flash', provider: 'deepseek' },
    { id: 'deepseek-v4-pro', label: 'DeepSeek V4 Pro', provider: 'deepseek' }
  ],
  huggingface: [
    { id: 'meta-llama/Llama-3.3-70B-Instruct', label: 'Llama 3.3 70B', provider: 'huggingface' }
  ],
  ollama: [
    { id: 'llama3.2', label: 'Llama 3.2', provider: 'ollama' },
    { id: 'llama3', label: 'Llama 3', provider: 'ollama' }
  ]
};

export function defaultModel(provider: string): string {
  const choices = MODEL_CATALOG[provider as CatalogProvider];
  return choices?.[0]?.id ?? MODEL_CATALOG.openai[0].id;
}

export function listModels(provider?: string): ModelChoice[] {
  if (!provider) {
    return Object.values(MODEL_CATALOG).flat();
  }
  return MODEL_CATALOG[provider as CatalogProvider] ?? [];
}

/** Newer OpenAI models reject max_tokens and sampling penalties. */
export function usesCompletionTokenLimit(model: string): boolean {
  return /^(gpt-5|gpt-6|o\d)/.test(model);
}

export function chatCompletionBody(
  model: string,
  messages: CatalogMessage[],
  options: CatalogChatOptions | undefined,
  stream: boolean
): Record<string, unknown> {
  const reasoning = usesCompletionTokenLimit(model);
  const body: Record<string, unknown> = {
    model,
    messages,
    stream
  };

  if (!reasoning) {
    body.temperature = options?.temperature ?? 0.7;
    body.top_p = options?.topP ?? 1;
    body.frequency_penalty = options?.frequencyPenalty ?? 0;
    body.presence_penalty = options?.presencePenalty ?? 0;
  }

  if (options?.maxTokens) {
    body[reasoning ? 'max_completion_tokens' : 'max_tokens'] = options.maxTokens;
  }

  if (options?.stopSequences?.length) {
    body.stop = options.stopSequences;
  }

  return body;
}

export function claudeBody(
  model: string,
  messages: CatalogMessage[],
  options: CatalogChatOptions | undefined,
  stream: boolean
): Record<string, unknown> {
  const system = messages
    .filter((message) => message.role === 'system')
    .map((message) => message.content)
    .join('\n');
  const chat = messages
    .filter((message) => message.role !== 'system')
    .map((message) => ({ role: message.role, content: message.content }));

  return {
    model,
    max_tokens: options?.maxTokens ?? 1024,
    temperature: options?.temperature,
    stream,
    ...(system ? { system } : {}),
    messages: chat.length ? chat : [{ role: 'user', content: '' }]
  };
}

export function geminiBody(
  messages: CatalogMessage[],
  options: CatalogChatOptions | undefined
): Record<string, unknown> {
  const system = messages
    .filter((message) => message.role === 'system')
    .map((message) => message.content)
    .join('\n');
  const contents = messages
    .filter((message) => message.role !== 'system')
    .map((message) => ({
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: message.content }]
    }));

  return {
    contents: contents.length ? contents : [{ role: 'user', parts: [{ text: '' }] }],
    ...(system ? { systemInstruction: { parts: [{ text: system }] } } : {}),
    generationConfig: {
      temperature: options?.temperature ?? 0.7,
      maxOutputTokens: options?.maxTokens,
      topP: options?.topP
    }
  };
}
