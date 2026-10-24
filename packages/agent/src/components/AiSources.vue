<template>
  <section class="aivue-sources" aria-label="Sources">
    <p class="aivue-sources__label">Sources</p>
    <div class="aivue-sources__list">
      <component
        :is="item.href ? 'a' : 'span'"
        v-for="item in items"
        :key="item.title"
        :href="item.href"
        target="_blank"
        rel="noreferrer"
      >{{ item.title }}</component>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SourceItem } from '../types';
import '../styles/agent.css';

defineProps<{
  items: SourceItem[];
}>();
</script>
