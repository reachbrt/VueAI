<template>
  <div class="aivue-thread" role="log" aria-live="polite">
    <AiMessage
      v-for="message in messages"
      :key="message.id"
      :message="message"
      :components="components"
      @approve="$emit('approve', $event)"
      @reject="$emit('reject', $event)"
    />
    <p v-if="!messages.length" class="aivue-message__text">Ask the agent to work on this page.</p>
  </div>
</template>

<script setup lang="ts">
import type { AgentComponentMap, AgentMessage } from '../types';
import AiMessage from './AiMessage.vue';
import '../styles/agent.css';

defineProps<{
  messages: AgentMessage[];
  components?: AgentComponentMap;
}>();

defineEmits<{
  approve: [id: string];
  reject: [id: string];
}>();
</script>
