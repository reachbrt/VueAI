<template>
  <article class="aivue-message" :class="`aivue-message--${message.role}`">
    <div class="aivue-message__role">{{ message.role === 'user' ? 'You' : 'Agent' }}</div>
    <template v-for="(part, index) in message.parts" :key="index">
      <p v-if="part.type === 'text'" class="aivue-message__text">{{ part.text }}</p>
      <AiReasoning v-else-if="part.type === 'reasoning'" :text="part.text" :done="part.done" />
      <AiToolCall
        v-else-if="part.type === 'tool'"
        :name="part.name"
        :status="part.status"
        :args-text="part.argsText"
        :result="part.result"
      />
      <AiApproval
        v-else-if="part.type === 'approval'"
        :title="part.title"
        :detail="part.detail"
        :status="part.status"
        @approve="$emit('approve', part.id)"
        @reject="$emit('reject', part.id)"
      />
      <component
        :is="components?.[part.name]"
        v-else-if="part.type === 'ui' && components?.[part.name]"
        v-bind="part.props"
      />
      <AiSources v-else-if="part.type === 'sources'" :items="part.items" />
      <AiPlan v-else-if="part.type === 'plan'" :title="part.title" :steps="part.steps" />
      <AiSuggestions
        v-else-if="part.type === 'suggestions'"
        :items="part.items"
        @select="$emit('suggest', $event)"
      />
    </template>
  </article>
</template>

<script setup lang="ts">
import type { AgentComponentMap, AgentMessage } from '../types';
import AiApproval from './AiApproval.vue';
import AiPlan from './AiPlan.vue';
import AiReasoning from './AiReasoning.vue';
import AiSources from './AiSources.vue';
import AiSuggestions from './AiSuggestions.vue';
import AiToolCall from './AiToolCall.vue';
import '../styles/agent.css';

defineProps<{
  message: AgentMessage;
  components?: AgentComponentMap;
}>();

defineEmits<{
  approve: [id: string];
  reject: [id: string];
  suggest: [text: string];
}>();
</script>
