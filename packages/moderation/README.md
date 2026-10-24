# @aivue/moderation

AI content moderation for Vue 2 and Vue 3. Score UGC before publish; falls back to a lightweight heuristic if no client is provided.

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
