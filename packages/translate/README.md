# @aivue/translate

AI translation widget for Vue 2 and Vue 3.

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
