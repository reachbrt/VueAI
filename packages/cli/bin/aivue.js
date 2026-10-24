#!/usr/bin/env node
import { mkdir, copyFile, access } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const templates = {
  agent: {
    from: join(root, 'templates', 'AgentPanel.vue'),
    to: join('src', 'components', 'aivue', 'AgentPanel.vue'),
    install: '@aivue/agent'
  },
  nuxt: {
    from: join(root, 'templates', 'aivue-agent.ts'),
    to: join('plugins', 'aivue-agent.ts'),
    install: '@aivue/agent'
  }
};

function help() {
  console.log(`aivue add <agent|nuxt>

  agent   Copy a page-copilot panel into src/components/aivue/AgentPanel.vue
  nuxt    Copy a Nuxt plugin into plugins/aivue-agent.ts

Options
  --force   Overwrite an existing file
`);
}

export async function run(argv, cwd = process.cwd(), log = console.log) {
  const args = argv.slice(2);
  const force = args.includes('--force');
  const command = args.find((arg) => !arg.startsWith('--'));
  const target = args.filter((arg) => !arg.startsWith('--'))[1];

  if (command !== 'add' || !templates[target]) {
    help();
    return command === 'add' ? 1 : 0;
  }

  const spec = templates[target];
  const destination = join(cwd, spec.to);
  try {
    await access(destination);
    if (!force) {
      log(`${spec.to} already exists. Re-run with --force to replace it.`);
      return 1;
    }
  } catch {
    // File is absent. Copy it.
  }

  await mkdir(dirname(destination), { recursive: true });
  await copyFile(spec.from, destination);
  log(`Wrote ${spec.to}`);
  log(`Install the runtime with: npm install ${spec.install}`);
  return 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  run(process.argv).then((code) => {
    process.exitCode = code;
  }).catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
