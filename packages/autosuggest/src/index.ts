// Export components
import AutosuggestComponent from './components/Autosuggest.vue';
import type { DefineComponent } from 'vue';

// Export composables
import useAutosuggest from './composables/useAutosuggest';

// Export types
export * from './types';
export * from './composables/useAutosuggest';

// Cast component to DefineComponent
const Autosuggest = AutosuggestComponent as DefineComponent;

// Export components
export { Autosuggest, useAutosuggest };

// Default export
export default {
  Autosuggest,
  useAutosuggest
};
