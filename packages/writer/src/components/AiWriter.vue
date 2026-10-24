<template>
  <div class="aivue-writer" :class="{ 'aivue-writer--dark': theme === 'dark' }">
    <textarea
      class="aivue-writer__input"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled || isLoading"
      rows="7"
      @input="onInput"
    />

    <div class="aivue-writer__bar">
      <button
        v-for="item in actions"
        :key="item.id"
        type="button"
        class="aivue-writer__btn"
        :disabled="disabled || isLoading || !modelValue.trim()"
        @click="runAction(item.id)"
      >
        {{ item.label }}
      </button>
      <label class="aivue-writer__tone">
        Tone
        <select :value="tone" @change="onTone">
          <option value="professional">Professional</option>
          <option value="friendly">Friendly</option>
          <option value="confident">Confident</option>
          <option value="concise">Concise</option>
          <option value="casual">Casual</option>
        </select>
      </label>
    </div>

    <p v-if="isLoading" class="aivue-writer__status">Editing…</p>
    <p v-if="error" class="aivue-writer__error">{{ error }}</p>

    <div v-if="result" class="aivue-writer__output">
      <div class="aivue-writer__meta">{{ result.action }}<span v-if="result.tone"> · {{ result.tone }}</span></div>
      <pre>{{ result.text }}</pre>
      <div class="aivue-writer__bar">
        <button type="button" class="aivue-writer__btn" @click="accept">Use this</button>
        <button type="button" class="aivue-writer__btn aivue-writer__btn--ghost" @click="copy">Copy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useWriter } from '../composables/useWriter';

const ACTIONS = [
  { id: 'rewrite', label: 'Rewrite' },
  { id: 'shorten', label: 'Shorten' },
  { id: 'expand', label: 'Expand' },
  { id: 'fix-grammar', label: 'Fix grammar' },
  { id: 'change-tone', label: 'Change tone' },
  { id: 'continue', label: 'Continue' }
];

export default {
  name: 'AiWriter',
  props: {
    modelValue: { type: String, default: '' },
    client: { type: Object, required: true },
    placeholder: { type: String, default: 'Write something, then pick an action…' },
    theme: { type: String, default: 'light' },
    disabled: { type: Boolean, default: false }
  },
  emits: ['update:modelValue', 'result', 'error'],
  setup(props, { emit }) {
    const { result, isLoading, error, tone, run, clear } = useWriter({ client: props.client });

    const onInput = (e) => {
      emit('update:modelValue', e.target.value);
      if (!e.target.value.trim()) clear();
    };
    const onTone = (e) => {
      tone.value = e.target.value;
    };
    const runAction = async (id) => {
      try {
        const out = await run(props.modelValue, id);
        emit('result', out);
      } catch (err) {
        emit('error', err);
      }
    };
    const accept = () => {
      if (!result.value) return;
      emit('update:modelValue', result.value.text);
      clear();
    };
    const copy = async () => {
      if (!result.value) return;
      await navigator.clipboard.writeText(result.value.text);
    };

    return { actions: ACTIONS, result, isLoading, error, tone, onInput, onTone, runAction, accept, copy };
  }
};
</script>

<style>
.aivue-writer {
  --aw-ink: #111;
  --aw-muted: #666;
  --aw-border: #e5e5e5;
  --aw-bg: #fff;
  --aw-soft: #f5f5f5;
  color: var(--aw-ink);
  background: var(--aw-bg);
  border: 1px solid var(--aw-border);
  border-radius: 12px;
  padding: 1rem;
  font-family: Inter, system-ui, sans-serif;
}
.aivue-writer--dark {
  --aw-ink: #f5f5f5;
  --aw-muted: #aaa;
  --aw-border: #333;
  --aw-bg: #171717;
  --aw-soft: #222;
}
.aivue-writer__input,
.aivue-writer__tone select {
  width: 100%;
  border: 1px solid var(--aw-border);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  background: var(--aw-soft);
  color: var(--aw-ink);
}
.aivue-writer__bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
  align-items: end;
}
.aivue-writer__btn {
  border: 1px solid var(--aw-border);
  background: #111;
  color: #fff;
  border-radius: 999px;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
}
.aivue-writer--dark .aivue-writer__btn { background: #f5f5f5; color: #111; }
.aivue-writer__btn:disabled { opacity: 0.5; cursor: not-allowed; }
.aivue-writer__btn--ghost { background: transparent; color: var(--aw-ink); }
.aivue-writer__tone { display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.8rem; color: var(--aw-muted); min-width: 140px; }
.aivue-writer__error { color: #b42318; }
.aivue-writer__status, .aivue-writer__meta { color: var(--aw-muted); font-size: 0.85rem; }
.aivue-writer__output { margin-top: 0.75rem; }
.aivue-writer__output pre { white-space: pre-wrap; margin: 0.4rem 0 0; }
</style>
