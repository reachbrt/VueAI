import AiAgentComponent from './components/AiAgent.vue';
import AiApprovalComponent from './components/AiApproval.vue';
import AiComposerComponent from './components/AiComposer.vue';
import AiContextComponent from './components/AiContext.vue';
import AiMessageComponent from './components/AiMessage.vue';
import AiPlanComponent from './components/AiPlan.vue';
import AiReasoningComponent from './components/AiReasoning.vue';
import AiSourcesComponent from './components/AiSources.vue';
import AiSuggestionsComponent from './components/AiSuggestions.vue';
import AiThreadComponent from './components/AiThread.vue';
import AiToolCallComponent from './components/AiToolCall.vue';
import type { DefineComponent } from 'vue';
import { useAgent } from './composables/useAgent';
import './styles/agent.css';

export * from './types';
export { applyAgUiEvent, createAgentState, userMessage } from './utils/agui';
export { useAgent };
export type { UseAgentReturn } from './composables/useAgent';

export const AiAgent = AiAgentComponent as unknown as DefineComponent;
export const AiApproval = AiApprovalComponent as unknown as DefineComponent;
export const AiComposer = AiComposerComponent as unknown as DefineComponent;
export const AiContext = AiContextComponent as unknown as DefineComponent;
export const AiMessage = AiMessageComponent as unknown as DefineComponent;
export const AiPlan = AiPlanComponent as unknown as DefineComponent;
export const AiReasoning = AiReasoningComponent as unknown as DefineComponent;
export const AiSources = AiSourcesComponent as unknown as DefineComponent;
export const AiSuggestions = AiSuggestionsComponent as unknown as DefineComponent;
export const AiThread = AiThreadComponent as unknown as DefineComponent;
export const AiToolCall = AiToolCallComponent as unknown as DefineComponent;

export default {
  AiAgent,
  AiThread,
  AiComposer,
  AiMessage,
  AiReasoning,
  AiToolCall,
  AiApproval,
  AiSources,
  AiPlan,
  AiSuggestions,
  AiContext,
  useAgent
};
