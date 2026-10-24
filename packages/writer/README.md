<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/studio-bar.svg" alt="VueAI" width="100%"></a>
</p>

# @aivue/writer

In-place writing actions for Vue apps. The same edits people expect from Notion AI, Grammarly, and Google Docs: rewrite, shorten, expand, fix grammar, change tone, and continue.

```bash
npm install @aivue/writer @aivue/core
```

```vue
<script setup>
import { ref } from 'vue';
import { AIClient } from '@aivue/core';
import { AiWriter } from '@aivue/writer';
import '@aivue/writer/style.css';

const draft = ref('Paste a paragraph here.');
const client = new AIClient({ provider: 'openai', apiKey: import.meta.env.VITE_OPENAI_API_KEY });
</script>

<template>
  <AiWriter v-model="draft" :client="client" />
</template>
```

`useWriter` is available when you want the actions without the built-in editor.
