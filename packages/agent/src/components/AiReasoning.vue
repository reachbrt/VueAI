<template>
  <div class="aivue-reasoning">
    <div class="aivue-reasoning__label">{{ done ? 'Reasoning' : 'Thinking' }}</div>
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import '../styles/agent.css';

defineProps<{
  text: string;
  done?: boolean;
}>();
</script>
