<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/docs/studio-bar.svg" alt="VueAI" width="100%"></a>
</p>

# @aivue/summarizer

AI text summarization for Vue 2 and Vue 3.

## Install

```bash
npm install @aivue/summarizer @aivue/core vue
```

## Usage

```vue
<script setup>
import { ref } from 'vue';
import { AIClient } from '@aivue/core';
import { AiSummarizer } from '@aivue/summarizer';
import '@aivue/summarizer/style.css';

const client = new AIClient({ provider: 'openai', apiKey: import.meta.env.VITE_OPENAI_API_KEY });
const text = ref('');
</script>

<template>
  <AiSummarizer v-model="text" :client="client" length="medium" summary-style="paragraph" />
</template>
```

### Composable

```ts
import { useSummarizer } from '@aivue/summarizer';

const { summarize, result, isLoading } = useSummarizer({ client, length: 'short', style: 'paragraph' });
await summarize(longText);
```
