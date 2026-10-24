<template>
  <div class="aivue-translate" :class="{ 'aivue-translate--dark': theme === 'dark' }">
    <div class="aivue-translate__langs">
      <label>
        From
        <select :value="sourceLang" @change="onSource">
          <option v-for="loc in locales" :key="loc.code" :value="loc.code">{{ loc.label }}</option>
        </select>
      </label>
      <button type="button" class="aivue-translate__swap" :disabled="sourceLang === 'auto'" @click="swapLanguages" title="Swap">
        ⇄
      </button>
      <label>
        To
        <select :value="targetLang" @change="onTarget">
          <option v-for="loc in targetLocales" :key="loc.code" :value="loc.code">{{ loc.label }}</option>
        </select>
      </label>
      <label>
        Tone
        <select :value="formality" @change="onFormality">
          <option value="auto">Match source</option>
          <option value="formal">Formal</option>
          <option value="informal">Informal</option>
        </select>
      </label>
    </div>

    <textarea
      class="aivue-translate__input"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled || isLoading"
      rows="6"
      @input="onInput"
    />

    <div class="aivue-translate__actions">
      <button type="button" class="aivue-translate__btn" :disabled="disabled || isLoading || !modelValue.trim()" @click="run">
        {{ isLoading ? 'Translating…' : 'Translate' }}
      </button>
      <button type="button" class="aivue-translate__btn aivue-translate__btn--ghost" :disabled="!result" @click="copy">
        Copy
      </button>
      <button type="button" class="aivue-translate__btn aivue-translate__btn--ghost" @click="clearAll">Clear</button>
    </div>

    <p v-if="error" class="aivue-translate__error">{{ error }}</p>

    <div v-if="result" class="aivue-translate__output">
      <div class="aivue-translate__meta">
        <span v-if="result.detectedSource">Detected: {{ result.detectedSource }}</span>
        <span v-if="result.confidence != null">Confidence: {{ Math.round(result.confidence * 100) }}%</span>
      </div>
      <pre class="aivue-translate__text">{{ result.translatedText }}</pre>
    </div>
  </div>
</template>

<script>
import { computed, watch } from 'vue';
import { useTranslate } from '../composables/useTranslate';
import { COMMON_LOCALES } from '../utils/parse';

export default {
  name: 'AiTranslate',
  props: {
    modelValue: { type: String, default: '' },
    client: { type: Object, required: true },
    sourceLang: { type: String, default: 'auto' },
    targetLang: { type: String, default: 'en' },
    placeholder: { type: String, default: 'Enter text to translate…' },
    theme: { type: String, default: 'light' },
    disabled: { type: Boolean, default: false }
  },
  emits: ['update:modelValue', 'translated', 'error'],
  setup(props, { emit }) {
    const {
      result,
      isLoading,
      error,
      sourceLang,
      targetLang,
      formality,
      translate,
      swapLanguages,
      clear
    } = useTranslate({
      client: props.client,
      sourceLang: props.sourceLang,
      targetLang: props.targetLang
    });

    const locales = COMMON_LOCALES;
    const targetLocales = computed(() => COMMON_LOCALES.filter((l) => l.code !== 'auto'));

    watch(
      () => props.sourceLang,
      (v) => {
        sourceLang.value = v;
      }
    );
    watch(
      () => props.targetLang,
      (v) => {
        targetLang.value = v;
      }
    );

    const onInput = (e) => emit('update:modelValue', e.target.value);
    const onSource = (e) => {
      sourceLang.value = e.target.value;
    };
    const onTarget = (e) => {
      targetLang.value = e.target.value;
    };
    const onFormality = (e) => {
      formality.value = e.target.value;
    };

    const run = async () => {
      try {
        const out = await translate(props.modelValue);
        emit('translated', out);
      } catch (err) {
        emit('error', err);
      }
    };

    const copy = async () => {
      if (!result.value) return;
      await navigator.clipboard.writeText(result.value.translatedText);
    };

    const clearAll = () => {
      clear();
      emit('update:modelValue', '');
    };

    return {
      result,
      isLoading,
      error,
      sourceLang,
      targetLang,
      formality,
      locales,
      targetLocales,
      swapLanguages,
      onInput,
      onSource,
      onTarget,
      onFormality,
      run,
      copy,
      clearAll
    };
  }
};
</script>

<style>
.aivue-translate {
  --at-ink: #111;
  --at-muted: #666;
  --at-border: #e5e5e5;
  --at-bg: #fff;
  --at-soft: #f5f5f5;
  color: var(--at-ink);
  background: var(--at-bg);
  border: 1px solid var(--at-border);
  border-radius: 12px;
  padding: 1rem;
  font-family: Inter, system-ui, sans-serif;
}
.aivue-translate--dark {
  --at-ink: #f5f5f5;
  --at-muted: #aaa;
  --at-border: #333;
  --at-bg: #171717;
  --at-soft: #222;
}
.aivue-translate__langs {
  display: flex;
  align-items: end;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}
.aivue-translate__langs label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: var(--at-muted);
  flex: 1;
  min-width: 120px;
}
.aivue-translate__langs select,
.aivue-translate__input {
  border: 1px solid var(--at-border);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  background: var(--at-soft);
  color: var(--at-ink);
  width: 100%;
  font: inherit;
}
.aivue-translate__swap {
  border: 1px solid var(--at-border);
  background: var(--at-soft);
  border-radius: 8px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.aivue-translate__input {
  resize: vertical;
  min-height: 120px;
}
.aivue-translate__actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
}
.aivue-translate__btn {
  border: none;
  border-radius: 999px;
  padding: 0.55rem 1rem;
  background: var(--at-ink);
  color: var(--at-bg);
  cursor: pointer;
  font-weight: 600;
}
.aivue-translate__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.aivue-translate__btn--ghost {
  background: transparent;
  color: var(--at-ink);
  border: 1px solid var(--at-border);
}
.aivue-translate__error {
  color: #b91c1c;
  margin-top: 0.75rem;
}
.aivue-translate__output {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--at-border);
}
.aivue-translate__meta {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: var(--at-muted);
  margin-bottom: 0.5rem;
}
.aivue-translate__text {
  white-space: pre-wrap;
  background: var(--at-soft);
  padding: 0.75rem;
  border-radius: 8px;
  font: inherit;
}
</style>
