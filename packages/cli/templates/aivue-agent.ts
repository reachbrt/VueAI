import { AiAgent, AiApproval, AiComposer, AiReasoning, AiThread, AiToolCall } from '@aivue/agent';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('AiAgent', AiAgent);
  nuxtApp.vueApp.component('AiThread', AiThread);
  nuxtApp.vueApp.component('AiComposer', AiComposer);
  nuxtApp.vueApp.component('AiReasoning', AiReasoning);
  nuxtApp.vueApp.component('AiToolCall', AiToolCall);
  nuxtApp.vueApp.component('AiApproval', AiApproval);
});
