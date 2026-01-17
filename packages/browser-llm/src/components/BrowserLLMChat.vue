<template>
  <div class="browser-llm-chat">
    <div class="chat-header">
      <div class="header-left">
        <h3>{{ title }}</h3>
        <span v-if="currentModel" class="model-badge">
          {{ getModelDisplayName(currentModel) }}
        </span>
        <span v-if="tokensPerSecond > 0" class="performance-badge">
          {{ tokensPerSecond.toFixed(1) }} tok/s
        </span>
      </div>
      <div class="header-actions">
        <button 
          v-if="messages.length > 0" 
          class="btn-clear" 
          @click="handleClear"
          :disabled="isLoading"
        >
          Clear
        </button>
      </div>
    </div>

    <div class="chat-messages" ref="messagesContainer">
      <div
        v-for="(message, index) in displayMessages"
        :key="index"
        class="message"
        :class="`message-${message.role}`"
      >
        <div class="message-avatar">
          {{ message.role === 'user' ? '👤' : '🤖' }}
        </div>
        <div class="message-content">
          <div class="message-text">{{ message.content }}</div>
          <div class="message-time">
            {{ formatTime(message.timestamp) }}
          </div>
        </div>
      </div>

      <div v-if="isLoading && !streamingContent" class="message message-assistant">
        <div class="message-avatar">🤖</div>
        <div class="message-content">
          <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div v-if="streamingContent" class="message message-assistant">
        <div class="message-avatar">🤖</div>
        <div class="message-content">
          <div class="message-text">{{ streamingContent }}</div>
        </div>
      </div>
    </div>

    <div class="chat-input-container">
      <div v-if="error" class="input-error">
        {{ error.message }}
      </div>
      
      <div v-if="!isModelLoaded" class="model-not-loaded">
        <p>⚠️ No model loaded. Please select and load a model first.</p>
      </div>

      <div class="chat-input-wrapper">
        <textarea
          v-model="inputMessage"
          class="chat-input"
          :placeholder="placeholder"
          :disabled="!isModelLoaded || isLoading"
          @keydown.enter.exact.prevent="handleSend"
          @keydown.enter.shift.exact="inputMessage += '\n'"
          rows="1"
        ></textarea>
        <button
          class="btn-send"
          :disabled="!isModelLoaded || isLoading || !inputMessage.trim()"
          @click="handleSend"
        >
          {{ isLoading ? '⏳' : '📤' }}
        </button>
      </div>

      <div class="input-hint">
        Press Enter to send, Shift+Enter for new line
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import type { BrowserLLMMessage } from '../types';

interface Props {
  title?: string;
  placeholder?: string;
  messages: BrowserLLMMessage[];
  isModelLoaded: boolean;
  isLoading: boolean;
  currentModel: string | null;
  error: Error | null;
  tokensPerSecond?: number;
  useStreaming?: boolean;
}

interface Emits {
  (e: 'send-message', content: string): void;
  (e: 'stream-message', content: string): void;
  (e: 'clear'): void;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Browser LLM Chat',
  placeholder: 'Type your message...',
  tokensPerSecond: 0,
  useStreaming: true,
});

const emit = defineEmits<Emits>();

const inputMessage = ref('');
const streamingContent = ref('');
const messagesContainer = ref<HTMLElement | null>(null);

const displayMessages = computed(() => {
  return props.messages.filter(m => m.role !== 'system');
});

const handleSend = async () => {
  if (!inputMessage.value.trim() || !props.isModelLoaded || props.isLoading) {
    return;
  }

  const message = inputMessage.value.trim();
  inputMessage.value = '';
  streamingContent.value = '';

  if (props.useStreaming) {
    emit('stream-message', message);
  } else {
    emit('send-message', message);
  }

  await nextTick();
  scrollToBottom();
};

const handleClear = () => {
  emit('clear');
};

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const formatTime = (timestamp?: number): string => {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const getModelDisplayName = (modelId: string): string => {
  return modelId
    .replace(/-q4f\d+_\d+-MLC$/, '')
    .replace(/-MLC$/, '')
    .replace(/-/g, ' ');
};

// Auto-scroll when new messages arrive
watch(() => props.messages.length, async () => {
  await nextTick();
  scrollToBottom();
});
</script>

<style scoped>
.browser-llm-chat {
  display: flex;
  flex-direction: column;
  height: 600px;
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.chat-header h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.model-badge,
.performance-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.performance-badge {
  background: rgba(76, 175, 80, 0.3);
}

.btn-clear {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-clear:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
}

.btn-clear:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: #f8f9fa;
}

.message {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.message-content {
  flex: 1;
  max-width: 70%;
}

.message-user .message-content {
  margin-left: auto;
}

.message-text {
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  white-space: pre-wrap;
  word-wrap: break-word;
}

.message-user .message-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.message-time {
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.25rem;
  padding: 0 0.5rem;
}

.typing-indicator {
  display: flex;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #999;
  animation: typing 1.4s infinite;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 60%, 100% {
    opacity: 0.3;
    transform: translateY(0);
  }
  30% {
    opacity: 1;
    transform: translateY(-10px);
  }
}

.chat-input-container {
  border-top: 1px solid #e0e0e0;
  background: white;
  padding: 1rem 1.5rem;
}

.input-error {
  background: #f8d7da;
  color: #721c24;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
}

.model-not-loaded {
  background: #fff3cd;
  color: #856404;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.model-not-loaded p {
  margin: 0;
  font-size: 0.875rem;
}

.chat-input-wrapper {
  display: flex;
  gap: 0.75rem;
  align-items: flex-end;
}

.chat-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: none;
  max-height: 120px;
  transition: border-color 0.2s;
}

.chat-input:focus {
  outline: none;
  border-color: #667eea;
}

.chat-input:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
}

.btn-send {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
  flex-shrink: 0;
}

.btn-send:hover:not(:disabled) {
  transform: scale(1.05);
}

.btn-send:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.input-hint {
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.5rem;
  text-align: center;
}
</style>
