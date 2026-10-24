export function escapeHtml(input: unknown): string {
  return String(input ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function parseJsonObject<T extends Record<string, unknown>>(raw: string): T | null {
  if (!raw) return null;
  try {
    const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
    const text = (fenced ? fenced[1] : raw).trim();
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start === -1 || end === -1 || end <= start) return null;
    return JSON.parse(text.slice(start, end + 1)) as T;
  } catch {
    return null;
  }
}

export const DEFAULT_CATEGORIES = [
  'hate',
  'harassment',
  'sexual',
  'violence',
  'self_harm',
  'spam'
] as const;

/** Lightweight offline heuristic when no AI client is available. */
export function heuristicModerate(
  text: string,
  categories: string[],
  threshold: number
): { scores: Record<string, number>; reasons: string[] } {
  const lower = text.toLowerCase();
  const keywordMap: Record<string, string[]> = {
    hate: ['hate', 'racist', 'slur'],
    harassment: ['idiot', 'stupid', 'kill yourself'],
    sexual: ['nsfw', 'porn', 'xxx'],
    violence: ['murder', 'bomb', 'shoot'],
    self_harm: ['suicide', 'self-harm', 'kill myself'],
    spam: ['buy now', 'crypto giveaway', 'click here', 'free $$$']
  };

  const scores: Record<string, number> = {};
  const reasons: string[] = [];

  for (const cat of categories) {
    const words = keywordMap[cat] || [];
    const hits = words.filter((w) => lower.includes(w)).length;
    const score = Math.min(1, hits * 0.45);
    scores[cat] = score;
    if (score >= threshold) {
      reasons.push(`Heuristic flag: ${cat}`);
    }
  }

  return { scores, reasons };
}
