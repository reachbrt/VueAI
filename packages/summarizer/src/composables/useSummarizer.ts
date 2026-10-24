import { ref, type Ref } from 'vue';
import type { AIClient } from '@aivue/core';
import type { SummarizerOptions, SummaryLength, SummaryResult, SummaryStyle } from '../types';
import { parseJsonObject } from '../utils/parse';

export interface UseSummarizerOptions extends SummarizerOptions {
  client: AIClient;
}

export interface UseSummarizerReturn {
  result: Ref<SummaryResult | null>;
  isLoading: Ref<boolean>;
  error: Ref<string | null>;
  length: Ref<SummaryLength>;
  style: Ref<SummaryStyle>;
  summarize: (text: string) => Promise<SummaryResult>;
  clear: () => void;
}

function lengthHint(length: SummaryLength): string {
  if (length === 'short') return '2-3 sentences or up to 5 bullets';
  if (length === 'long') return 'a detailed overview (about 200-400 words)';
  return 'one concise paragraph or up to 8 bullets';
}

export function useSummarizer(options: UseSummarizerOptions): UseSummarizerReturn {
  const { client } = options;
  const length = ref<SummaryLength>(options.length || 'medium');
  const style = ref<SummaryStyle>(options.style || 'paragraph');
  const result = ref<SummaryResult | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const summarize = async (text: string): Promise<SummaryResult> => {
    const input = text.trim();
    if (!input) {
      throw new Error('Text is required to summarize');
    }

    isLoading.value = true;
    error.value = null;

    try {
      const styleInstr =
        style.value === 'bullets'
          ? 'Use bullet points for the summary field (newline-separated).'
          : style.value === 'eli5'
            ? 'Explain like I am five — simple words, short sentences.'
            : 'Write a clear paragraph summary.';

      const prompt = `Summarize the following text.
Length: ${length.value} (${lengthHint(length.value)}).
Style: ${styleInstr}

Return ONLY valid JSON:
{"tldr":"one sentence","summary":"...","keyPoints":["..."],"actionItems":["..."]}
actionItems should be an empty array when the text has no tasks.

Text:
"""
${input.slice(0, 12000)}
"""`;

      const response = await client.chat([
        { role: 'system', content: 'You are a precise summarization assistant. Respond with JSON only.' },
        { role: 'user', content: prompt }
      ]);

      const parsed = parseJsonObject<{
        tldr?: string;
        summary?: string;
        keyPoints?: string[];
        actionItems?: string[];
      }>(response);
      const summary =
        (parsed?.summary && String(parsed.summary).trim()) ||
        response.replace(/```[\s\S]*?```/g, '').trim() ||
        response.trim();
      const keyPoints = Array.isArray(parsed?.keyPoints)
        ? parsed!.keyPoints!.map((p) => String(p)).filter(Boolean)
        : [];
      const actionItems = Array.isArray(parsed?.actionItems)
        ? parsed!.actionItems!.map((p) => String(p)).filter(Boolean)
        : [];

      const out: SummaryResult = {
        tldr: parsed?.tldr ? String(parsed.tldr).trim() : summary.split(/(?<=[.!?])\s/)[0] || summary,
        summary,
        keyPoints,
        actionItems,
        length: length.value,
        style: style.value
      };
      result.value = out;
      return out;
    } catch (err: any) {
      error.value = err?.message || 'Failed to summarize';
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

  return { result, isLoading, error, length, style, summarize, clear };
}

export default useSummarizer;
