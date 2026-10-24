import { describe, expect, it } from 'vitest';
import { chatCompletionBody, claudeBody, defaultModel, geminiBody, listModels } from '../src/models';

describe('model catalog', () => {
  it('defaults to the current model for each provider', () => {
    expect(defaultModel('openai')).toBe('gpt-6.1-sol');
    expect(defaultModel('claude')).toBe('claude-sonnet-5-5');
    expect(defaultModel('gemini')).toBe('gemini-3.8-flash');
    expect(defaultModel('deepseek')).toBe('deepseek-flash');
    expect(defaultModel('huggingface')).toBe('meta-llama/Llama-3.3-70B-Instruct');
    expect(defaultModel('ollama')).toBe('llama3.2');
  });

  it('lists every provider when no provider is given', () => {
    expect(listModels().length).toBeGreaterThan(8);
    expect(listModels('claude').map((model) => model.id)).toContain('claude-opus-5-5');
  });

  it('uses completion token limits for current OpenAI models', () => {
    const body = chatCompletionBody('gpt-6.1-sol', [{ role: 'user', content: 'Hi' }], { maxTokens: 200 }, false);
    expect(body.max_completion_tokens).toBe(200);
    expect(body.max_tokens).toBeUndefined();
    expect(body.temperature).toBeUndefined();
  });

  it('keeps sampling fields for earlier chat models', () => {
    const body = chatCompletionBody('gpt-4o', [{ role: 'user', content: 'Hi' }], { maxTokens: 200 }, true);
    expect(body.max_tokens).toBe(200);
    expect(body.temperature).toBe(0.7);
    expect(body.stream).toBe(true);
  });

  it('splits a Claude system message out of the thread', () => {
    const body = claudeBody('claude-sonnet-5-5', [
      { role: 'system', content: 'Be brief' },
      { role: 'user', content: 'Hello' }
    ], undefined, false);
    expect(body.system).toBe('Be brief');
    expect(body.messages).toEqual([{ role: 'user', content: 'Hello' }]);
    expect(body.model).toBe('claude-sonnet-5-5');
  });

  it('maps assistant turns to Gemini model turns', () => {
    const body = geminiBody([
      { role: 'user', content: 'Hello' },
      { role: 'assistant', content: 'Hi' }
    ], { maxTokens: 32 });
    expect(body.contents).toEqual([
      { role: 'user', parts: [{ text: 'Hello' }] },
      { role: 'model', parts: [{ text: 'Hi' }] }
    ]);
  });
});
