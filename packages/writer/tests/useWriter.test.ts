import { describe, it, expect, vi } from 'vitest';
import { useWriter } from '../src/composables/useWriter';

describe('useWriter', () => {
  it('returns the edited text for a chosen action', async () => {
    const client = {
      chat: vi.fn().mockResolvedValue(JSON.stringify({ text: 'A clearer sentence.' }))
    } as any;

    const { run, result } = useWriter({ client });
    const out = await run('A sentence that could be clearer.', 'shorten');
    expect(out.text).toBe('A clearer sentence.');
    expect(out.action).toBe('shorten');
    expect(result.value?.text).toBe('A clearer sentence.');
    expect(client.chat).toHaveBeenCalled();
  });

  it('rejects empty input', async () => {
    const { run } = useWriter({ client: { chat: vi.fn() } as any });
    await expect(run('  ')).rejects.toThrow(/required/i);
  });
});
