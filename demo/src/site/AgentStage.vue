<template>
  <div class="stage">
    <div class="stage-copy">
      <p class="eyebrow">Page copilot</p>
      <h2>It works on the screen you are looking at.</h2>
      <p class="lede">Ask for the overdue invoices, a reminder, or a refund. The agent filters the table, writes the artifact, and stops when money would move.</p>
      <div class="prompt-row">
        <button type="button" @click="ask('Which invoices are overdue?')">Overdue invoices</button>
        <button type="button" @click="ask('Draft a reminder')">Draft a reminder</button>
        <button type="button" @click="ask('Refund invoice 1042')">Refund 1042</button>
      </div>
    </div>

    <div class="stage-grid">
      <div class="panel thread-panel">
        <div class="panel-label">Agent</div>
        <AiAgent
          :messages="messages"
          :status="status"
          :components="components"
          :context="{ used: contextUsed, limit: 8000 }"
          placeholder="Ask about this page"
          @send="ask"
          @suggest="ask"
          @approve="onApprove"
          @reject="onReject"
        />
      </div>

      <div class="panel page-panel">
        <div class="panel-head">
          <div class="panel-label">This page</div>
          <span class="filter-pill">{{ filter }}</span>
        </div>
        <table class="ledger">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Client</th>
              <th>Due</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in visibleRows" :key="row.id">
              <td>{{ row.id }}</td>
              <td>{{ row.client }}</td>
              <td>{{ row.due }}</td>
              <td>${{ row.amount.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
        <div class="artifact">
          <div class="panel-label">Artifact</div>
          <AiStreamMarkdown v-if="artifact" :source="artifact" />
          <p v-else class="empty-artifact">The draft will land here.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, ref, watch } from 'vue';
import { AiAgent, useAgent } from '@aivue/agent';
import { AiStreamMarkdown } from '@aivue/stream-markdown';
import { draftScenario, overdueScenario, refundFollowup, refundScenario, REMINDER } from './scenarios';

interface Invoice {
  id: string;
  client: string;
  amount: number;
  status: string;
  due: string;
}

const invoices = ref<Invoice[]>([
  { id: '1042', client: 'Northwind', amount: 1840, status: 'overdue', due: '12 Oct' },
  { id: '1048', client: 'Helios Lab', amount: 920, status: 'open', due: '2 Nov' },
  { id: '1051', client: 'Campo', amount: 2400, status: 'paid', due: '1 Oct' },
  { id: '1056', client: 'Aster', amount: 610, status: 'overdue', due: '18 Oct' }
]);

const filter = ref('all');
const artifact = ref('');
const { messages, status, sharedState, addUserMessage, play, registerTool, resolveApproval, reset } = useAgent();

const InvoiceChip = defineComponent({
  name: 'InvoiceChip',
  props: {
    id: { type: String, required: true },
    client: { type: String, required: true },
    amount: { type: String, required: true }
  },
  setup(props) {
    return () => h('div', { class: 'invoice-chip' }, [
      h('span', props.id),
      h('strong', props.client),
      h('em', props.amount)
    ]);
  }
});

const components = { InvoiceChip };

registerTool('filter_invoices', (args) => {
  const next = String(args.status || 'all');
  filter.value = next;
  return invoices.value.filter((row) => next === 'all' || row.status === next);
});

registerTool('draft_reminder', () => {
  artifact.value = REMINDER;
  return { drafted: true };
});

registerTool('mark_refunded', (args) => {
  const id = String(args.id || '');
  invoices.value = invoices.value.map((row) => (
    row.id === id ? { ...row, status: 'refunded' } : row
  ));
  filter.value = 'refunded';
  return { id, status: 'refunded' };
});

watch(() => sharedState.value.filter, (value) => {
  if (typeof value === 'string') filter.value = value;
});

watch(() => sharedState.value.artifact, (value) => {
  if (typeof value === 'string') artifact.value = value;
});

const contextUsed = computed(() => messages.value.reduce((total, message) => (
  total + message.parts.reduce((partTotal, part) => {
    if (part.type === 'text' || part.type === 'reasoning') return partTotal + part.text.length;
    if (part.type === 'tool') return partTotal + part.argsText.length;
    return partTotal + 24;
  }, 0)
), 0));

const visibleRows = computed(() => (
  filter.value === 'all'
    ? invoices.value
    : invoices.value.filter((row) => row.status === filter.value)
));

async function ask(text: string) {
  if (status.value === 'running') return;
  const normalized = text.toLowerCase();
  if (messages.value.length > 8) reset();
  addUserMessage(text);
  if (normalized.includes('refund')) {
    await play(refundScenario(), { paceMs: 18 });
    return;
  }
  if (normalized.includes('draft') || normalized.includes('remind')) {
    await play(draftScenario(), { paceMs: 14 });
    return;
  }
  await play(overdueScenario(), { paceMs: 14 });
}

async function onApprove(id: string) {
  resolveApproval(id, 'approved');
  await play(refundFollowup(), { paceMs: 16 });
}

function onReject(id: string) {
  resolveApproval(id, 'rejected');
}
</script>
