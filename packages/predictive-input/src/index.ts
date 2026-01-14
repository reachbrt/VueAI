// Export components
import PredictiveInputComponent from './components/PredictiveInput.vue';
import type { DefineComponent } from 'vue';

// Export composables
import usePredictiveInput from './composables/usePredictiveInput';

// Export types
export * from './types';
export * from './composables/usePredictiveInput';

// Cast component to DefineComponent
const PredictiveInput = PredictiveInputComponent as DefineComponent;

// Export components
export { PredictiveInput, usePredictiveInput };

// Default export
export default {
  PredictiveInput,
  usePredictiveInput
};

