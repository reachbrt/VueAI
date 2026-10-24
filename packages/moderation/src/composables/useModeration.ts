import { ref, type Ref } from 'vue';
import type { AIClient } from '@aivue/core';
import type { ModerationOptions, ModerationResult } from '../types';
import { DEFAULT_CATEGORIES, heuristicModerate, parseJsonObject } from '../utils/parse';

export interface UseModerationOptions extends ModerationOptions {
  client?: AIClient;
}

export interface UseModerationReturn {
  result: Ref<ModerationResult | null>;
  isLoading: Ref<boolean>;
  error: Ref<string | null>;
  threshold: Ref<number>;
  check: (text: string) => Promise<ModerationResult>;
  rewriteSafer: (text: string) => Promise<string>;
  clear: () => void;
}

export function useModeration(options: UseModerationOptions = {}): UseModerationReturn {
  const categories = options.categories?.length
    ? options.categories.map(String)
    : [...DEFAULT_CATEGORIES];
  const threshold = ref(options.threshold ?? 0.5);
  const result = ref<ModerationResult | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const finalize = (
    scores: Record<string, number>,
    reasons: string[],
    source: 'ai' | 'heuristic',
    rewritten?: string
  ): ModerationResult => {
    const score = Object.values(scores).reduce((m, v) => Math.max(m, v), 0);
    const allowed = score < threshold.value;
    const out: ModerationResult = {
      allowed,
      score,
      categories: scores,
      reasons,
      rewritten,
      source
    };
    result.value = out;
    return out;
  };

  const check = async (text: string): Promise<ModerationResult> => {
    const input = text.trim();
    if (!input) throw new Error('Text is required to moderate');

    isLoading.value = true;
    error.value = null;

    try {
      if (!options.client) {
        const h = heuristicModerate(input, categories, threshold.value);
        return finalize(h.scores, h.reasons, 'heuristic');
      }

      const prompt = `Moderate this user content for safety.
Categories: ${categories.join(', ')}.
Return ONLY JSON:
{"scores":{"hate":0.0,"harassment":0.0,"sexual":0.0,"violence":0.0,"self_harm":0.0,"spam":0.0},"reasons":["..."],"allowed":true}

Scores must be 0-1. Mark allowed false if any score >= ${threshold.value}.

Text:
"""
${input.slice(0, 8000)}
"""`;

      const response = await options.client.chat([
        {
          role: 'system',
          content: 'You are a careful content moderation classifier. Respond with JSON only.'
        },
        { role: 'user', content: prompt }
      ]);

      const parsed = parseJsonObject<{
        scores?: Record<string, number>;
        reasons?: string[];
        allowed?: boolean;
      }>(response);

      if (!parsed?.scores || typeof parsed.scores !== 'object') {
        const h = heuristicModerate(input, categories, threshold.value);
        return finalize(h.scores, [...h.reasons, 'AI parse failed; used heuristic'], 'heuristic');
      }

      const scores: Record<string, number> = {};
      for (const cat of categories) {
        const v = Number((parsed.scores as any)[cat] ?? 0);
        scores[cat] = Number.isFinite(v) ? Math.max(0, Math.min(1, v)) : 0;
      }
      const reasons = Array.isArray(parsed.reasons)
        ? parsed.reasons.map(String).filter(Boolean)
        : Object.entries(scores)
            .filter(([, v]) => v >= threshold.value)
            .map(([k]) => `Elevated ${k} score`);

      return finalize(scores, reasons, 'ai');
    } catch (err: any) {
      error.value = err?.message || 'Failed to moderate';
      // Soft-fail to heuristic so apps can still gate content
      const h = heuristicModerate(input, categories, threshold.value);
      return finalize(
        h.scores,
        [...h.reasons, error.value || 'Moderation failed'],
        'heuristic'
      );
    } finally {
      isLoading.value = false;
    }
  };

  const rewriteSafer = async (text: string): Promise<string> => {
    if (!options.client) {
      throw new Error('AI client required to rewrite content');
    }
    const response = await options.client.chat([
      {
        role: 'system',
        content: 'Rewrite user text to remove harmful, harassing, or spammy content while keeping meaning.'
      },
      { role: 'user', content: text.slice(0, 8000) }
    ]);
    const cleaned = response.trim();
    if (result.value) {
      result.value = { ...result.value, rewritten: cleaned };
    }
    return cleaned;
  };

  const clear = () => {
    result.value = null;
    error.value = null;
  };

  return { result, isLoading, error, threshold, check, rewriteSafer, clear };
}

export default useModeration;
