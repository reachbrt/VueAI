# @aivue/cli

Copy a VueAI agent panel or a Nuxt plugin into your app.

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
