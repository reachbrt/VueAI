import AiModerationComponent from './components/AiModeration.vue';
import type { DefineComponent } from 'vue';
import useModeration from './composables/useModeration';

export * from './types';
export * from './composables/useModeration';
export {
  escapeHtml,
  parseJsonObject,
  DEFAULT_CATEGORIES,
  heuristicModerate
} from './utils/parse';

const AiModeration = AiModerationComponent as DefineComponent;
export { AiModeration, useModeration };

export default {
  AiModeration,
  useModeration
};
