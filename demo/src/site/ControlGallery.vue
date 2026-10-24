<template>
  <div class="gallery">
    <article class="control">
      <header>
        <p><Icon name="reason" /> 01</p>
        <h3>Reasoning</h3>
      </header>
      <AiReasoning :text="reasoning" :done="true" />
    </article>

    <article class="control">
      <header>
        <p><Icon name="tool" /> 02</p>
        <h3>Tool call</h3>
      </header>
      <AiToolCall
        name="filter_invoices"
        status="done"
        args-text='{"status":"overdue"}'
        :result="{ count: 2 }"
      />
    </article>

    <article class="control">
      <header>
        <p><Icon name="approval" /> 03</p>
        <h3>Approval</h3>
      </header>
      <AiApproval
        title="Refund invoice 1042"
        detail="Return $1,840 to Northwind."
        :status="decision"
        @approve="decision = 'approved'"
        @reject="decision = 'rejected'"
      />
    </article>

    <article class="control control--wide">
      <header>
        <p><Icon name="lines" /> 04</p>
        <h3>Streaming Markdown</h3>
      </header>
      <AiStreamMarkdown :source="markdown" />
    </article>

    <article class="control">
      <header>
        <p><Icon name="composer" /> 05</p>
        <h3>Composer</h3>
      </header>
      <AiComposer placeholder="Message the agent" @send="sent = $event" />
      <p v-if="sent" class="sent">Queued: {{ sent }}</p>
    </article>

    <article class="control">
      <header>
        <p><Icon name="list" /> 06</p>
        <h3>Plan</h3>
      </header>
      <AiPlan
        title="Find overdue invoices"
        :steps="[
          { id: 'read', title: 'Read the ledger', status: 'done' },
          { id: 'filter', title: 'Filter overdue rows', status: 'active' },
          { id: 'answer', title: 'Answer on the page', status: 'pending' }
        ]"
      />
    </article>

    <article class="control">
      <header>
        <p><Icon name="doc" /> 07</p>
        <h3>Sources</h3>
      </header>
      <AiSources :items="[{ title: 'Invoice ledger', href: '#agent' }, { title: 'Page state' }]" />
    </article>

    <article class="control">
      <header>
        <p><Icon name="suggest" /> 08</p>
        <h3>Suggestions</h3>
      </header>
      <AiSuggestions :items="['Draft a reminder', 'Refund invoice 1042']" @select="picked = $event" />
      <p v-if="picked" class="sent">Ready to send: {{ picked }}</p>
    </article>

    <article class="control">
      <header>
        <p><Icon name="chart" /> 09</p>
        <h3>Context</h3>
      </header>
      <AiContext :used="1840" :limit="8000" />
    </article>

    <article class="control">
      <header>
        <p><Icon name="cpu" /> 10</p>
        <h3>Local runtime</h3>
      </header>
      <p class="local-copy">@aivue/browser-llm runs a model in WebGPU. The studio stays on a scripted agent so the page works with no key. Open the component library for the live local model.</p>
      <button type="button" class="text-button" @click="$emit('library')">Open the library</button>
    </article>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { AiApproval, AiComposer, AiContext, AiPlan, AiReasoning, AiSources, AiSuggestions, AiToolCall } from '@aivue/agent';
import { AiStreamMarkdown } from '@aivue/stream-markdown';
import Icon from './Icon.vue';

defineEmits<{ library: [] }>();

const decision = ref<'pending' | 'approved' | 'rejected'>('pending');
const sent = ref('');
const picked = ref('');
const reasoning = 'A refund is a write. I should show the amount and wait, instead of calling the tool immediately.';
const full = `## Reminder

Invoice **1042** is overdue.

- Northwind owes $1,840
- Due 12 Oct

\`\`\`
status: overdue
\`\`\``;
const markdown = ref('');
let timer = 0;

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    markdown.value = full;
    return;
  }
  let index = 0;
  timer = window.setInterval(() => {
    index += 2;
    markdown.value = full.slice(0, index);
    if (index >= full.length) window.clearInterval(timer);
  }, 24);
});

onBeforeUnmount(() => window.clearInterval(timer));
</script>
