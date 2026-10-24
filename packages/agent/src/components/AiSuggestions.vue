<template>
  <div class="aivue-suggestions" role="list" aria-label="Suggested prompts">
    <button
      v-for="item in items"
      :key="item"
      type="button"
      role="listitem"
      @click="$emit('select', item)"
    >{{ item }}</button>
  </div>
</template>

<script setup lang="ts">
import '../styles/agent.css';

defineProps<{
  items: string[];
}>();

defineEmits<{
  select: [text: string];
}>();
</script>
