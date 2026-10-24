<template>
  <section class="aivue-agent">
    <AiContext v-if="context" :used="context.used" :limit="context.limit" />
    <AiThread
      :messages="messages"
      :components="components"
      @approve="$emit('approve', $event)"
      @reject="$emit('reject', $event)"
      @suggest="$emit('suggest', $event)"
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
import AiContext from './AiContext.vue';
import AiThread from './AiThread.vue';
import '../styles/agent.css';

defineProps<{
  messages: AgentMessage[];
  status?: AgentStatus;
  components?: AgentComponentMap;
  placeholder?: string;
  disabled?: boolean;
  context?: { used: number; limit: number };
}>();

defineEmits<{
  send: [text: string];
  approve: [id: string];
  reject: [id: string];
  suggest: [text: string];
}>();
</script>
