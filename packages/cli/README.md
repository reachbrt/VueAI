<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/studio-bar.svg" alt="VueAI" width="100%"></a>

<p align="center">
  <a href="https://aivue.netlify.app/#architecture"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/architecture.svg" alt="VueAI architecture. One repository, the agent runtime, and every feature." width="100%"></a>
</p>

</p>

# @aivue/cli

Copy a VueAI agent panel or a Nuxt plugin into your app.

## Features

- `aivue add agent` writes `src/components/aivue/AgentPanel.vue`
- `aivue add nuxt` writes `plugins/aivue-agent.ts`
- `--force` replaces a file that is already there
- The generated panel uses `@aivue/agent`

```bash
npx @aivue/cli add agent
npx @aivue/cli add nuxt
```

`add agent` writes `src/components/aivue/AgentPanel.vue`.  
`add nuxt` writes `plugins/aivue-agent.ts`.

Pass `--force` to replace a file that is already there. Then install the runtime:

```bash
npm install @aivue/agent
```

[Studio](https://aivue.netlify.app) · [GitHub](https://github.com/reachbrt/VueAI)

## License

MIT
