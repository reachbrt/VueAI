<template>
  <div class="aivue-tool">
    <div class="aivue-tool__name">{{ name }}</div>
    <div class="aivue-tool__status" :class="`aivue-tool__status--${status}`">{{ status }}</div>
    <div v-if="argsText" class="aivue-tool__args">{{ argsText }}</div>
    <div v-if="resultText" class="aivue-tool__result">{{ resultText }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '../styles/agent.css';

const props = defineProps<{
  name: string;
  status: 'running' | 'done' | 'error';
  argsText?: string;
  result?: unknown;
}>();

const resultText = computed(() => {
  if (props.result === undefined) return '';
  if (Array.isArray(props.result)) return `${props.result.length} rows`;
  const text = typeof props.result === 'string' ? props.result : JSON.stringify(props.result);
  return text.length > 160 ? `${text.slice(0, 160)}…` : text;
});
</script>
