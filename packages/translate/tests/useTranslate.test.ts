import { describe, it, expect, vi } from 'vitest';
import { useTranslate } from '../src/composables/useTranslate';

describe('useTranslate', () => {
  it('parses translated JSON', async () => {
    const client = {
      chat: vi.fn().mockResolvedValue(
        JSON.stringify({ translatedText: 'Hola', detectedSource: 'en', confidence: 0.9 })
      )
    } as any;

    const { translate, result } = useTranslate({ client, targetLang: 'es' });
    const out = await translate('Hello');
    expect(out.translatedText).toBe('Hola');
    expect(result.value?.detectedSource).toBe('en');
  });

  it('requires target language', async () => {
    const client = { chat: vi.fn() } as any;
    const { translate, targetLang } = useTranslate({ client, targetLang: 'auto' });
    targetLang.value = 'auto';
    await expect(translate('Hello')).rejects.toThrow(/target language/i);
  });
});
