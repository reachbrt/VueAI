<template>
  <div class="ai-toolkit">
    <p class="ai-toolkit__lead">
      Four tools modeled on Notion AI, DeepL, Grammarly, and OpenAI moderation.
      Add your OpenAI key above, then try each one.
    </p>

    <section>
      <h3>Writer</h3>
      <p>Rewrite, shorten, expand, fix grammar, change tone, or continue.</p>
      <AiWriter v-model="draft" :client="aiClient" />
    </section>

    <section>
      <h3>Summarizer</h3>
      <p>TL;DR, key points, and action items.</p>
      <AiSummarizer v-model="notes" :client="aiClient" />
    </section>

    <section>
      <h3>Translate</h3>
      <p>Language detection plus a formal or informal tone, like DeepL.</p>
      <AiTranslate v-model="phrase" :client="aiClient" target-lang="es" />
    </section>

    <section>
      <h3>Moderation</h3>
      <p>Safety scores before you publish user content. Works offline with a keyword fallback.</p>
      <AiModeration v-model="comment" :client="aiClient" />
    </section>
  </div>
</template>

<script>
import { AiWriter } from '@aivue/writer';
import { AiSummarizer } from '@aivue/summarizer';
import { AiTranslate } from '@aivue/translate';
import { AiModeration } from '@aivue/moderation';
import '@aivue/writer/style.css';
import '@aivue/summarizer/style.css';
import '@aivue/translate/style.css';
import '@aivue/moderation/style.css';

export default {
  name: 'AiToolkitDemo',
  components: { AiWriter, AiSummarizer, AiTranslate, AiModeration },
  props: {
    aiClient: { type: Object, required: true }
  },
  data() {
    return {
      draft: 'Our product helps teams write faster, but the sentence is a bit long and could be clearer for a landing page.',
      notes: 'The launch is on Friday. Design needs the final screenshots by Wednesday. Support should update the help center. We also need a short announcement for email and social.',
      phrase: 'Please send the invoice by Friday.',
      comment: 'Thanks for the quick reply, this solved my problem.'
    };
  }
};
</script>

<style scoped>
.ai-toolkit { display: flex; flex-direction: column; gap: 2rem; }
.ai-toolkit__lead { color: #475569; margin: 0; }
.ai-toolkit h3 { margin: 0 0 0.25rem; }
.ai-toolkit p { margin: 0 0 0.75rem; color: #64748b; }
</style>
