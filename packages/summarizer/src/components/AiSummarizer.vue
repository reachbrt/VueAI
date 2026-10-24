<template>
  <div class="aivue-summarizer" :class="{ 'aivue-summarizer--dark': theme === 'dark' }">
    <div class="aivue-summarizer__controls">
      <label>
        Length
        <select :value="length" @change="onLength">
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>
      </label>
      <label>
        Style
        <select :value="style" @change="onStyle">
          <option value="paragraph">Paragraph</option>
          <option value="bullets">Bullets</option>
          <option value="eli5">ELI5</option>
        </select>
      </label>
    </div>

    <textarea
      class="aivue-summarizer__input"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled || isLoading"
      rows="8"
      @input="onInput"
    />

    <div class="aivue-summarizer__actions">
      <button type="button" class="aivue-summarizer__btn" :disabled="disabled || isLoading || !modelValue.trim()" @click="run">
        {{ isLoading ? 'Summarizing…' : 'Summarize' }}
      </button>
      <button type="button" class="aivue-summarizer__btn aivue-summarizer__btn--ghost" :disabled="!result" @click="copy">
        Copy
      </button>
      <button type="button" class="aivue-summarizer__btn aivue-summarizer__btn--ghost" @click="clearAll">
        Clear
      </button>
    </div>

    <p v-if="error" class="aivue-summarizer__error">{{ error }}</p>

    <div v-if="result" class="aivue-summarizer__output">
      <p v-if="result.tldr" class="aivue-summarizer__tldr"><strong>TL;DR.</strong> {{ result.tldr }}</p>
      <h3>Summary</h3>
      <pre class="aivue-summarizer__summary">{{ result.summary }}</pre>
      <h3 v-if="result.keyPoints.length">Key points</h3>
      <ul v-if="result.keyPoints.length" class="aivue-summarizer__points">
        <li v-for="(point, i) in result.keyPoints" :key="'k' + i">{{ point }}</li>
      </ul>
      <h3 v-if="result.actionItems.length">Action items</h3>
      <ul v-if="result.actionItems.length" class="aivue-summarizer__points">
        <li v-for="(item, i) in result.actionItems" :key="'a' + i">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue';
import { useSummarizer } from '../composables/useSummarizer';

export default {
  name: 'AiSummarizer',
  props: {
    modelValue: { type: String, default: '' },
    client: { type: Object, required: true },
    length: { type: String, default: 'medium' },
    summaryStyle: { type: String, default: 'paragraph' },
    placeholder: { type: String, default: 'Paste text to summarize…' },
    theme: { type: String, default: 'light' },
    disabled: { type: Boolean, default: false }
  },
  emits: ['update:modelValue', 'summarized', 'error'],
  setup(props, { emit }) {
    const { result, isLoading, error, length, style, summarize, clear } = useSummarizer({
      client: props.client,
      length: props.length,
      style: props.summaryStyle
    });

    watch(
      () => props.length,
      (v) => {
        length.value = v;
      }
    );
    watch(
      () => props.summaryStyle,
      (v) => {
        style.value = v;
      }
    );

    const onInput = (e) => emit('update:modelValue', e.target.value);
    const onLength = (e) => {
      length.value = e.target.value;
    };
    const onStyle = (e) => {
      style.value = e.target.value;
    };

    const run = async () => {
      try {
        const out = await summarize(props.modelValue);
        emit('summarized', out);
      } catch (err) {
        emit('error', err);
      }
    };

    const copy = async () => {
      if (!result.value) return;
      await navigator.clipboard.writeText(result.value.summary);
    };

    const clearAll = () => {
      clear();
      emit('update:modelValue', '');
    };

    return {
      result,
      isLoading,
      error,
      length,
      style,
      onInput,
      onLength,
      onStyle,
      run,
      copy,
      clearAll
    };
  }
};
</script>

<style>
.aivue-summarizer {
  --as-ink: #111;
  --as-muted: #666;
  --as-border: #e5e5e5;
  --as-bg: #fff;
  --as-soft: #f5f5f5;
  color: var(--as-ink);
  background: var(--as-bg);
  border: 1px solid var(--as-border);
  border-radius: 12px;
  padding: 1rem;
  font-family: Inter, system-ui, sans-serif;
}
.aivue-summarizer--dark {
  --as-ink: #f5f5f5;
  --as-muted: #aaa;
  --as-border: #333;
  --as-bg: #171717;
  --as-soft: #222;
}
.aivue-summarizer__controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}
.aivue-summarizer__controls label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: var(--as-muted);
}
.aivue-summarizer__controls select,
.aivue-summarizer__input {
  border: 1px solid var(--as-border);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  background: var(--as-soft);
  color: var(--as-ink);
  width: 100%;
}
.aivue-summarizer__input {
  resize: vertical;
  min-height: 140px;
  font: inherit;
}
.aivue-summarizer__actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
}
.aivue-summarizer__btn {
  border: none;
  border-radius: 999px;
  padding: 0.55rem 1rem;
  background: var(--as-ink);
  color: var(--as-bg);
  cursor: pointer;
  font-weight: 600;
}
.aivue-summarizer__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.aivue-summarizer__btn--ghost {
  background: transparent;
  color: var(--as-ink);
  border: 1px solid var(--as-border);
}
.aivue-summarizer__error {
  color: #b91c1c;
  margin-top: 0.75rem;
}
.aivue-summarizer__output {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--as-border);
}
.aivue-summarizer__summary {
  white-space: pre-wrap;
  background: var(--as-soft);
  padding: 0.75rem;
  border-radius: 8px;
  font: inherit;
}
.aivue-summarizer__points {
  margin: 0.75rem 0 0;
  padding-left: 1.25rem;
}
</style>
