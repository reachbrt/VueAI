<template>
  <section class="aivue-plan" aria-label="Plan">
    <p class="aivue-plan__label">{{ title || 'Plan' }}</p>
    <ol>
      <li v-for="step in steps" :key="step.id" :class="`is-${step.status}`">
        <span class="aivue-plan__mark" aria-hidden="true" />
        <span>{{ step.title }}</span>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import type { PlanStep } from '../types';
import '../styles/agent.css';

defineProps<{
  title?: string;
  steps: PlanStep[];
}>();
</script>
