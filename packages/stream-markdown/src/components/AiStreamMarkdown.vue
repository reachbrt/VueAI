<template>
  <div class="aivue-md">
    <template v-for="(block, index) in blocks" :key="index">
      <h1 v-if="block.type === 'heading' && block.level === 1" v-html="renderInline(block.text)" />
      <h2 v-else-if="block.type === 'heading' && block.level === 2" v-html="renderInline(block.text)" />
      <h3 v-else-if="block.type === 'heading'" v-html="renderInline(block.text)" />
      <pre v-else-if="block.type === 'code'" :class="{ 'aivue-md__pending': block.pending }"><code>{{ block.text }}</code></pre>
      <blockquote v-else-if="block.type === 'quote'" v-html="renderInline(block.text)" />
      <ul v-else-if="block.type === 'list' && !block.ordered">
        <li v-for="(item, itemIndex) in block.items" :key="itemIndex" v-html="renderInline(item)" />
      </ul>
      <ol v-else-if="block.type === 'list'">
        <li v-for="(item, itemIndex) in block.items" :key="itemIndex" v-html="renderInline(item)" />
      </ol>
      <p v-else-if="block.type === 'paragraph'" v-html="renderInline(block.text)" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { parseMarkdown, renderInline } from '../utils/parse';
import '../styles/markdown.css';

const props = defineProps<{
  source?: string;
}>();

const blocks = computed(() => parseMarkdown(props.source || ''));
</script>
