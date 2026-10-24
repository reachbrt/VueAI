import AiWriterComponent from './components/AiWriter.vue';
import type { DefineComponent } from 'vue';
import useWriter from './composables/useWriter';

export * from './types';
export * from './composables/useWriter';
export { parseJsonObject } from './utils/parse';

const AiWriter = AiWriterComponent as DefineComponent;
export { AiWriter, useWriter };

export default {
  AiWriter,
  useWriter
};
