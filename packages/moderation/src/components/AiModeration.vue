<template>
  <div class="aivue-moderation" :class="{ 'aivue-moderation--dark': theme === 'dark' }">
    <textarea
      class="aivue-moderation__input"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled || isLoading"
      rows="6"
      @input="onInput"
    />

    <div class="aivue-moderation__actions">
      <button type="button" class="aivue-moderation__btn" :disabled="disabled || isLoading || !modelValue.trim()" @click="run">
        {{ isLoading ? 'Checking…' : 'Check content' }}
      </button>
      <button
        type="button"
        class="aivue-moderation__btn aivue-moderation__btn--ghost"
        :disabled="!client || !result || result.allowed"
        @click="rewrite"
      >
        Rewrite safer
      </button>
      <button type="button" class="aivue-moderation__btn aivue-moderation__btn--ghost" @click="clearAll">Clear</button>
    </div>

    <p v-if="error" class="aivue-moderation__error">{{ error }}</p>

    <div v-if="result" class="aivue-moderation__output">
      <div class="aivue-moderation__verdict" :class="result.allowed ? 'is-ok' : 'is-block'">
        {{ result.allowed ? 'Allowed' : 'Blocked' }}
        <span class="aivue-moderation__score">score {{ Math.round(result.score * 100) }}%</span>
        <span class="aivue-moderation__source">via {{ result.source }}</span>
      </div>

      <div class="aivue-moderation__cats">
        <span v-for="(score, cat) in result.categories" :key="cat" class="aivue-moderation__chip" :class="{ hot: score >= threshold }">
          {{ cat }} {{ Math.round(score * 100) }}%
        </span>
      </div>

      <ul v-if="result.reasons.length" class="aivue-moderation__reasons">
        <li v-for="(reason, i) in result.reasons" :key="i">{{ reason }}</li>
      </ul>

      <pre v-if="result.rewritten" class="aivue-moderation__rewrite">{{ result.rewritten }}</pre>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue';
import { useModeration } from '../composables/useModeration';

export default {
  name: 'AiModeration',
  props: {
    modelValue: { type: String, default: '' },
    client: { type: Object, default: null },
    threshold: { type: Number, default: 0.5 },
    placeholder: { type: String, default: 'Paste user content to moderate…' },
    theme: { type: String, default: 'light' },
    disabled: { type: Boolean, default: false }
  },
  emits: ['update:modelValue', 'checked', 'error'],
  setup(props, { emit }) {
    const { result, isLoading, error, threshold, check, rewriteSafer, clear } = useModeration({
      client: props.client || undefined,
      threshold: props.threshold
    });

    watch(
      () => props.threshold,
      (v) => {
        threshold.value = v;
      }
    );

    const onInput = (e) => emit('update:modelValue', e.target.value);

    const run = async () => {
      try {
        const out = await check(props.modelValue);
        emit('checked', out);
      } catch (err) {
        emit('error', err);
      }
    };

    const rewrite = async () => {
      try {
        await rewriteSafer(props.modelValue);
      } catch (err) {
        emit('error', err);
      }
    };

    const clearAll = () => {
      clear();
      emit('update:modelValue', '');
    };

    return {
      result,
      isLoading,
      error,
      threshold,
      client: props.client,
      onInput,
      run,
      rewrite,
      clearAll
    };
  }
};
</script>

<style>
.aivue-moderation {
  --am-ink: #111;
  --am-muted: #666;
  --am-border: #e5e5e5;
  --am-bg: #fff;
  --am-soft: #f5f5f5;
  --am-ok: #166534;
  --am-block: #991b1b;
  color: var(--am-ink);
  background: var(--am-bg);
  border: 1px solid var(--am-border);
  border-radius: 12px;
  padding: 1rem;
  font-family: Inter, system-ui, sans-serif;
}
.aivue-moderation--dark {
  --am-ink: #f5f5f5;
  --am-muted: #aaa;
  --am-border: #333;
  --am-bg: #171717;
  --am-soft: #222;
}
.aivue-moderation__input {
  width: 100%;
  min-height: 120px;
  resize: vertical;
  border: 1px solid var(--am-border);
  border-radius: 8px;
  padding: 0.75rem;
  background: var(--am-soft);
  color: var(--am-ink);
  font: inherit;
}
.aivue-moderation__actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
}
.aivue-moderation__btn {
  border: none;
  border-radius: 999px;
  padding: 0.55rem 1rem;
  background: var(--am-ink);
  color: var(--am-bg);
  cursor: pointer;
  font-weight: 600;
}
.aivue-moderation__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.aivue-moderation__btn--ghost {
  background: transparent;
  color: var(--am-ink);
  border: 1px solid var(--am-border);
}
.aivue-moderation__error {
  color: #b91c1c;
  margin-top: 0.75rem;
}
.aivue-moderation__output {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--am-border);
}
.aivue-moderation__verdict {
  display: flex;
  gap: 0.75rem;
  align-items: baseline;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
.aivue-moderation__verdict.is-ok {
  color: var(--am-ok);
}
.aivue-moderation__verdict.is-block {
  color: var(--am-block);
}
.aivue-moderation__score,
.aivue-moderation__source {
  font-weight: 500;
  font-size: 0.85rem;
  color: var(--am-muted);
}
.aivue-moderation__cats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.aivue-moderation__chip {
  border: 1px solid var(--am-border);
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
  font-size: 0.75rem;
  background: var(--am-soft);
}
.aivue-moderation__chip.hot {
  border-color: var(--am-block);
  color: var(--am-block);
}
.aivue-moderation__reasons {
  margin: 0.75rem 0 0;
  padding-left: 1.25rem;
  color: var(--am-muted);
}
.aivue-moderation__rewrite {
  margin-top: 0.75rem;
  white-space: pre-wrap;
  background: var(--am-soft);
  padding: 0.75rem;
  border-radius: 8px;
  font: inherit;
}
</style>
