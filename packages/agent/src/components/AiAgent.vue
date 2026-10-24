<template>
  <section class="aivue-agent">
    <AiThread
      :messages="messages"
      :components="components"
      @approve="$emit('approve', $event)"
      @reject="$emit('reject', $event)"
    />
    <AiComposer
      :placeholder="placeholder"
      :disabled="disabled || status === 'running' || status === 'awaiting-approval'"
      :status="status"
      @send="$emit('send', $event)"
    />
  </section>
</template>

<script setup lang="ts">
import type { AgentComponentMap, AgentMessage, AgentStatus } from '../types';
import AiComposer from './AiComposer.vue';
import AiThread from './AiThread.vue';
import '../styles/agent.css';

defineProps<{
  messages: AgentMessage[];
  status?: AgentStatus;
  components?: AgentComponentMap;
  placeholder?: string;
  disabled?: boolean;
}>();

defineEmits<{
  send: [text: string];
  approve: [id: string];
  reject: [id: string];
}>();
</script>
