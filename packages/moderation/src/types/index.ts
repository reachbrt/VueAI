export type ModerationCategory =
  | 'hate'
  | 'harassment'
  | 'sexual'
  | 'violence'
  | 'self_harm'
  | 'spam'
  | string;

export interface ModerationResult {
  allowed: boolean;
  score: number;
  categories: Record<string, number>;
  reasons: string[];
  rewritten?: string;
  source: 'ai' | 'heuristic';
}

export interface ModerationOptions {
  categories?: ModerationCategory[];
  threshold?: number;
}
