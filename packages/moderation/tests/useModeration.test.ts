import { describe, it, expect, vi } from 'vitest';
import { useModeration } from '../src/composables/useModeration';
import { heuristicModerate } from '../src/utils/parse';

describe('heuristicModerate', () => {
  it('flags spam keywords', () => {
    const { scores, reasons } = heuristicModerate(
      'Click here for free $$$ crypto giveaway',
      ['spam', 'hate'],
      0.4
    );
    expect(scores.spam).toBeGreaterThanOrEqual(0.4);
    expect(reasons.length).toBeGreaterThan(0);
  });
});

describe('useModeration', () => {
  it('uses AI JSON scores when client is present', async () => {
    const client = {
      chat: vi.fn().mockResolvedValue(
        JSON.stringify({
          scores: { hate: 0.1, harassment: 0.1, sexual: 0.1, violence: 0.1, self_harm: 0.1, spam: 0.8 },
          reasons: ['Looks like spam'],
          allowed: false
        })
      )
    } as any;

    const { check, result } = useModeration({ client, threshold: 0.5 });
    const out = await check('Buy now!!!!');
    expect(out.allowed).toBe(false);
    expect(out.categories.spam).toBe(0.8);
    expect(result.value?.source).toBe('ai');
  });

  it('works without a client via heuristic', async () => {
    const { check } = useModeration({ threshold: 0.4 });
    const out = await check('Please buy now free $$$');
    expect(out.source).toBe('heuristic');
  });
});
