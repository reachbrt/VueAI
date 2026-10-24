<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/studio-bar.svg" alt="VueAI" width="100%"></a>
</p>

# @aivue/moderation

AI content moderation for Vue 2 and Vue 3. Score UGC before publish; falls back to a lightweight heuristic if no client is provided.

## Features

- Scores hate, harassment, sexual content, violence, self-harm, and spam
- A threshold you set before anything is published
- A lightweight heuristic when no API client is configured
- `AiModeration` for the panel, `useModeration` for a check in code

## Install

```bash
npm install @aivue/moderation @aivue/core vue
```

## Usage

```vue
<script setup>
import { ref } from 'vue';
import { AIClient } from '@aivue/core';
import { AiModeration } from '@aivue/moderation';
import '@aivue/moderation/style.css';

const client = new AIClient({ provider: 'openai', apiKey: import.meta.env.VITE_OPENAI_API_KEY });
const text = ref('');
</script>

<template>
  <AiModeration v-model="text" :client="client" :threshold="0.5" />
</template>
```

### Offline heuristic

```ts
import { useModeration } from '@aivue/moderation';

const { check } = useModeration({ threshold: 0.4 }); // no client
await check('Buy now free crypto giveaway!!!');
```
