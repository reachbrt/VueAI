import { ref, type Ref } from 'vue';
import type { AIClient } from '@aivue/core';
import type { WriterAction, WriterOptions, WriterResult, WriterTone } from '../types';
import { parseJsonObject } from '../utils/parse';

export interface UseWriterOptions extends WriterOptions {
  client: AIClient;
}

export interface UseWriterReturn {
  result: Ref<WriterResult | null>;
  isLoading: Ref<boolean>;
  error: Ref<string | null>;
  action: Ref<WriterAction>;
  tone: Ref<WriterTone>;
  run: (text: string, action?: WriterAction) => Promise<WriterResult>;
  clear: () => void;
}

const ACTION_INSTRUCTIONS: Record<WriterAction, string> = {
  rewrite: 'Rewrite the text so it is clearer and more natural. Keep the meaning.',
  shorten: 'Shorten the text to roughly half the length without dropping essential facts.',
  expand: 'Expand the text with useful detail and smoother transitions. Do not invent facts.',
  'fix-grammar': 'Fix grammar, spelling, and punctuation. Keep the voice and meaning.',
  'change-tone': 'Rewrite the text in the requested tone. Keep the facts.',
  continue: 'Continue the text in the same voice for one or two more paragraphs.'
};

export function useWriter(options: UseWriterOptions): UseWriterReturn {
  const action = ref<WriterAction>(options.action || 'rewrite');
  const tone = ref<WriterTone>(options.tone || 'professional');
  const result = ref<WriterResult | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const run = async (text: string, nextAction?: WriterAction): Promise<WriterResult> => {
    const input = text.trim();
    if (!input) throw new Error('Text is required');
    const chosen = nextAction || action.value;
    action.value = chosen;

    isLoading.value = true;
    error.value = null;

    try {
      const toneLine = chosen === 'change-tone' ? `Tone: ${tone.value}.` : '';
      const prompt = `${ACTION_INSTRUCTIONS[chosen]}
${toneLine}
Return ONLY JSON: {"text":"..."}

Text:
"""
${input.slice(0, 12000)}
"""`;

      const response = await options.client.chat([
        { role: 'system', content: 'You are an editor. Respond with JSON only. Do not add commentary.' },
        { role: 'user', content: prompt }
      ]);

      const parsed = parseJsonObject<{ text?: string }>(response);
      const edited =
        (parsed?.text && String(parsed.text).trim()) ||
        response.replace(/```[\s\S]*?```/g, '').trim() ||
        response.trim();

      const out: WriterResult = {
        text: edited,
        action: chosen,
        tone: chosen === 'change-tone' ? tone.value : undefined
      };
      result.value = out;
      return out;
    } catch (err: any) {
      error.value = err?.message || 'Writing action failed';
      result.value = null;
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const clear = () => {
    result.value = null;
    error.value = null;
  };

  return { result, isLoading, error, action, tone, run, clear };
}

export default useWriter;
