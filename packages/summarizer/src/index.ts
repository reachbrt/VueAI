import AiSummarizerComponent from './components/AiSummarizer.vue';
import type { DefineComponent } from 'vue';
import useSummarizer from './composables/useSummarizer';

export * from './types';
export * from './composables/useSummarizer';
export { escapeHtml, parseJsonObject } from './utils/parse';

const AiSummarizer = AiSummarizerComponent as DefineComponent;
export { AiSummarizer, useSummarizer };

export default {
  AiSummarizer,
  useSummarizer
};
