<template>
  <form class="aivue-composer" @submit.prevent="submit">
    <textarea
      v-model="draft"
      :placeholder="placeholder"
      :disabled="disabled"
      rows="2"
      @keydown.enter.exact.prevent="submit"
    />
    <button type="submit" :disabled="disabled || !draft.trim()">{{ status === 'running' ? 'Running' : 'Send' }}</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { AgentStatus } from '../types';
import '../styles/agent.css';

const props = defineProps<{
  placeholder?: string;
  disabled?: boolean;
  status?: AgentStatus;
}>();

const emit = defineEmits<{
  send: [text: string];
}>();

const draft = ref('');

function submit() {
  const text = draft.value.trim();
  if (!text || props.disabled) return;
  emit('send', text);
  draft.value = '';
}
</script>
