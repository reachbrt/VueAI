<template>
  <div class="aivue-context" :aria-label="`Context ${used} of ${limit}`">
    <span>Context</span>
    <div class="aivue-context__track">
      <div class="aivue-context__fill" :style="{ width: `${percent}%` }" />
    </div>
    <span>{{ used.toLocaleString() }} / {{ limit.toLocaleString() }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '../styles/agent.css';

const props = defineProps<{
  used: number;
  limit: number;
}>();

const percent = computed(() => {
  if (props.limit <= 0) return 0;
  return Math.max(0, Math.min(100, Math.round((props.used / props.limit) * 100)));
});
</script>
