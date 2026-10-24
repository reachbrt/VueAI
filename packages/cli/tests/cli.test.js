import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { run } from '../bin/aivue.js';

describe('aivue add', () => {
  it('copies the agent panel', async () => {
    const cwd = await mkdtemp(join(tmpdir(), 'aivue-cli-'));
    const logs = [];
    const code = await run(['node', 'aivue', 'add', 'agent'], cwd, (line) => logs.push(line));
    const written = await readFile(join(cwd, 'src/components/aivue/AgentPanel.vue'), 'utf8');
    assert.equal(code, 0);
    assert.match(written, /useAgent/);
    assert.match(logs.join('\n'), /npm install @aivue\/agent/);
    await rm(cwd, { recursive: true, force: true });
  });
});
