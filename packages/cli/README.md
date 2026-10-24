<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/docs/studio-bar.svg" alt="VueAI" width="100%"></a>
</p>

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
