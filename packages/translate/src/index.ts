import AiTranslateComponent from './components/AiTranslate.vue';
import type { DefineComponent } from 'vue';
import useTranslate from './composables/useTranslate';

export * from './types';
export * from './composables/useTranslate';
export { escapeHtml, parseJsonObject, COMMON_LOCALES } from './utils/parse';

const AiTranslate = AiTranslateComponent as DefineComponent;
export { AiTranslate, useTranslate };

export default {
  AiTranslate,
  useTranslate
};
