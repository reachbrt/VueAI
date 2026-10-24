import { describe, it, expect, vi } from 'vitest';
import { useSummarizer } from '../src/composables/useSummarizer';

describe('useSummarizer', () => {
  it('parses JSON summary from the model', async () => {
    const client = {
      chat: vi.fn().mockResolvedValue(
        JSON.stringify({ summary: 'Hello world.', keyPoints: ['A', 'B'] })
      )
    } as any;

    const { summarize, result } = useSummarizer({ client });
    const out = await summarize('Long text about hello world that needs a summary.');
    expect(out.summary).toBe('Hello world.');
    expect(out.keyPoints).toEqual(['A', 'B']);
    expect(result.value?.summary).toBe('Hello world.');
  });

  it('rejects empty input', async () => {
    const client = { chat: vi.fn() } as any;
    const { summarize } = useSummarizer({ client });
    await expect(summarize('   ')).rejects.toThrow(/required/i);
  });
});
