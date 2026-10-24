<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/studio-bar.svg" alt="VueAI" width="100%"></a>

<p align="center">
  <a href="https://aivue.netlify.app/#architecture"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/architecture.svg" alt="VueAI architecture. One repository, the agent runtime, and every feature." width="100%"></a>
</p>

</p>

# @aivue/translate

AI translation widget for Vue 2 and Vue 3.

## Features

- Detect the source language, or set it yourself
- Translate into a target language
- Switch formality when the language supports it
- `AiTranslate` for the widget, and the same `@aivue/core` client as the other packages

## Install

```bash
npm install @aivue/translate @aivue/core vue
```

## Usage

```vue
<script setup>
import { ref } from 'vue';
import { AIClient } from '@aivue/core';
import { AiTranslate } from '@aivue/translate';
import '@aivue/translate/style.css';

const client = new AIClient({ provider: 'openai', apiKey: import.meta.env.VITE_OPENAI_API_KEY });
const text = ref('');
</script>

<template>
  <AiTranslate v-model="text" :client="client" source-lang="auto" target-lang="es" />
</template>
```
