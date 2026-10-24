import { ref, type Ref } from 'vue';
import type { AIClient } from '@aivue/core';
import type { Formality, TranslateOptions, TranslateResult } from '../types';
import { parseJsonObject } from '../utils/parse';

export interface UseTranslateOptions extends TranslateOptions {
  client: AIClient;
}

export interface UseTranslateReturn {
  result: Ref<TranslateResult | null>;
  isLoading: Ref<boolean>;
  error: Ref<string | null>;
  sourceLang: Ref<string>;
  targetLang: Ref<string>;
  formality: Ref<Formality>;
  translate: (text: string) => Promise<TranslateResult>;
  swapLanguages: () => void;
  clear: () => void;
}

export function useTranslate(options: UseTranslateOptions): UseTranslateReturn {
  const { client } = options;
  const sourceLang = ref(options.sourceLang || 'auto');
  const targetLang = ref(options.targetLang || 'en');
  const formality = ref<Formality>(options.formality || 'auto');
  const result = ref<TranslateResult | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const translate = async (text: string): Promise<TranslateResult> => {
    const input = text.trim();
    if (!input) throw new Error('Text is required to translate');
    if (!targetLang.value || targetLang.value === 'auto') {
      throw new Error('Select a concrete target language');
    }

    isLoading.value = true;
    error.value = null;

    try {
      const source =
        sourceLang.value === 'auto'
          ? 'auto-detect the source language'
          : `source language code "${sourceLang.value}"`;

      const prompt = `Translate the text below.
Source: ${source}.
Target language code: "${targetLang.value}".
Formality: ${formality.value === 'auto' ? 'match the source register' : formality.value}.
Preserve markdown, code fences, and proper nouns.

Return ONLY valid JSON:
{"translatedText":"...","detectedSource":"xx","confidence":0.0}

Text:
"""
${input.slice(0, 12000)}
"""`;

      const response = await client.chat([
        { role: 'system', content: 'You are a professional translator. Respond with JSON only.' },
        { role: 'user', content: prompt }
      ]);

      const parsed = parseJsonObject<{
        translatedText?: string;
        detectedSource?: string;
        confidence?: number;
      }>(response);

      const translatedText =
        (parsed?.translatedText && String(parsed.translatedText).trim()) ||
        response.replace(/```[\s\S]*?```/g, '').trim() ||
        response.trim();

      const out: TranslateResult = {
        translatedText,
        detectedSource: parsed?.detectedSource ? String(parsed.detectedSource) : undefined,
        confidence:
          typeof parsed?.confidence === 'number'
            ? Math.max(0, Math.min(1, parsed.confidence))
            : undefined,
        sourceLang: sourceLang.value,
        targetLang: targetLang.value,
        formality: formality.value
      };
      result.value = out;
      return out;
    } catch (err: any) {
      error.value = err?.message || 'Failed to translate';
      result.value = null;
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const swapLanguages = () => {
    if (sourceLang.value === 'auto') return;
    const prev = sourceLang.value;
    sourceLang.value = targetLang.value;
    targetLang.value = prev;
  };

  const clear = () => {
    result.value = null;
    error.value = null;
  };

  return {
    result,
    isLoading,
    error,
    sourceLang,
    targetLang,
    formality,
    translate,
    swapLanguages,
    clear
  };
}

export default useTranslate;
