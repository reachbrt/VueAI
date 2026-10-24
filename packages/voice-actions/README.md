<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/studio-bar.svg" alt="VueAI" width="100%"></a>

<p align="center">
  <a href="https://aivue.netlify.app/#architecture"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/architecture.svg" alt="VueAI architecture. One repository, the agent runtime, and every feature." width="100%"></a>
</p>

</p>

# @aivue/voice-actions

[![npm version](https://img.shields.io/npm/v/@aivue/voice-actions.svg?color=34d399&labelColor=09090b)](https://www.npmjs.com/package/@aivue/voice-actions)
[![License: MIT](https://img.shields.io/badge/license-MIT-34d399?style=flat-square&labelColor=09090b)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://aivue.netlify.app/)
[![npm downloads](https://img.shields.io/badge/downloads-185%2Fmonth-34d399?style=flat-square&logo=npm&color=34d399&labelColor=09090b)](https://www.npmjs.com/package/@aivue/voice-actions)

> 🎤 AI-powered voice command controller with speech recognition, natural language processing, and custom actions for Vue.js

Transform your Vue applications with powerful voice control capabilities. @aivue/voice-actions provides an intuitive interface for voice commands, speech recognition, and AI-powered natural language processing.

## ✨ Features

### 🎯 Core Features
- **🎤 Speech Recognition** - Real-time voice-to-text conversion
- **🗣️ Text-to-Speech** - Voice feedback for commands
- **🤖 AI Processing** - Natural language understanding with AI
- **⚡ Custom Commands** - Register and execute custom voice commands
- **🔄 Continuous Mode** - Keep listening for commands
- **👂 Wake Word Detection** - Activate with custom wake words
- **🌍 Multi-language** - Support for 12+ languages
- **📊 Command History** - Track and review executed commands

### 🎨 UI Features
- **🎨 Customizable Themes** - Light and dark mode support
- **📱 Responsive Design** - Works on all devices
- **🔊 Volume Indicator** - Visual feedback for audio levels
- **💬 Live Transcript** - See what you're saying in real-time
- **✅ Confidence Score** - Visual confidence indicator
- **💡 Smart Suggestions** - Contextual command suggestions

### 🚀 Advanced Features
- **🔌 Composable API** - Use programmatically with `useVoiceActions`
- **🎯 Pattern Matching** - Regex and string pattern support
- **📈 Analytics** - Track command usage and success rates
- **⌨️ Keyboard Shortcuts** - Alternative input methods
- **♿ Accessibility** - ARIA labels and keyboard navigation
- **🔒 Privacy-focused** - All processing happens locally

## 📦 Installation

```bash
npm install @aivue/voice-actions @aivue/core
```

## 🚀 Quick Start

```vue
<template>
  <div>
    <VoiceActions
      :ai-client="aiClient"
      :commands="commands"
      :suggestions="suggestions"
      show-transcript
      show-suggestions
      show-history
      voice-feedback
      @command="handleCommand"
    />
  </div>
</template>

<script setup>
import { VoiceActions } from '@aivue/voice-actions';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: 'your-api-key'
});

const commands = [
  {
    pattern: /open (.*)/i,
    action: (matches) => {
      console.log('Opening:', matches[1]);
      window.location.href = `/${matches[1]}`;
    },
    description: 'Open a page',
    icon: '🔗'
  },
  {
    pattern: /search for (.*)/i,
    action: (matches) => {
      console.log('Searching for:', matches[1]);
      // Perform search
    },
    description: 'Search for something',
    icon: '🔍'
  }
];

const suggestions = [
  { text: 'Open dashboard', icon: '📊' },
  { text: 'Search for products', icon: '🔍' },
  { text: 'Show help', icon: '❓' }
];

function handleCommand(command, result) {
  console.log('Command executed:', command, result);
}
</script>
```

## 📖 Usage Examples

### Basic Voice Commands

```vue
<template>
  <VoiceActions
    :commands="commands"
    show-transcript
    @command="onCommand"
  />
</template>

<script setup>
import { VoiceActions } from '@aivue/voice-actions';

const commands = [
  {
    pattern: 'hello',
    action: () => alert('Hello!'),
    description: 'Say hello'
  },
  {
    pattern: /go to (home|about|contact)/i,
    action: (matches) => {
      router.push(`/${matches[1]}`);
    },
    description: 'Navigate to pages'
  }
];

function onCommand(command, result) {
  console.log('Command:', command);
}
</script>
```

### AI-Powered Processing

```vue
<template>
  <VoiceActions
    :ai-client="aiClient"
    use-ai-processing
    voice-feedback
    show-transcript
  />
</template>

<script setup>
import { VoiceActions } from '@aivue/voice-actions';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});
</script>
```

### Continuous Listening Mode

```vue
<template>
  <VoiceActions
    :commands="commands"
    continuous-mode
    show-continuous-toggle
    wake-word="hey assistant"
    wake-word-enabled
  />
</template>
```

### Multi-language Support

```vue
<template>
  <VoiceActions
    :commands="commands"
    language="es-ES"
    show-language-selector
    show-transcript
  />
</template>
```

### Custom Styling

```vue
<template>
  <VoiceActions
    :commands="commands"
    theme="dark"
    show-volume-indicator
    show-transcript
  />
</template>

<style>
.voice-actions {
  max-width: 600px;
  margin: 0 auto;
}
</style>
```

## 🎯 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `aiClient` | `AIClient` | `undefined` | AI client for natural language processing |
| `commands` | `VoiceCommand[]` | `[]` | Array of voice commands to register |
| `suggestions` | `VoiceActionsSuggestion[]` | `[]` | Command suggestions to display |
| `theme` | `'light' \| 'dark'` | `'light'` | UI theme |
| `language` | `string` | `'en-US'` | Speech recognition language |
| `showTranscript` | `boolean` | `true` | Show live transcript |
| `showSuggestions` | `boolean` | `true` | Show command suggestions |
| `showHistory` | `boolean` | `true` | Show command history |
| `showLanguageSelector` | `boolean` | `false` | Show language selector |
| `showContinuousToggle` | `boolean` | `false` | Show continuous mode toggle |
| `showVolumeIndicator` | `boolean` | `false` | Show volume level indicator |
| `continuousMode` | `boolean` | `false` | Enable continuous listening |
| `wakeWord` | `string` | `undefined` | Wake word to activate commands |
| `wakeWordEnabled` | `boolean` | `false` | Enable wake word detection |
| `voiceFeedback` | `boolean` | `false` | Enable voice feedback |
| `maxHistoryDisplay` | `number` | `10` | Maximum history items to display |
| `transcriptLabel` | `string` | `'You said'` | Label for transcript section |
| `useAiProcessing` | `boolean` | `false` | Use AI for unmatched commands |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `command` | `(command: string, result?: any)` | Emitted when a command is executed |
| `transcript` | `(transcript: string)` | Emitted when transcript updates |
| `error` | `(error: Error)` | Emitted on errors |
| `listening-start` | `()` | Emitted when listening starts |
| `listening-stop` | `()` | Emitted when listening stops |
| `wake-word-detected` | `()` | Emitted when wake word is detected |

### Types

#### VoiceCommand

```typescript
interface VoiceCommand {
  pattern: string | RegExp;
  action: (matches?: string[]) => void | Promise<void>;
  description?: string;
  icon?: string;
}
```

#### VoiceActionsSuggestion

```typescript
interface VoiceActionsSuggestion {
  text: string;
  command?: string;
  icon?: string;
}
```

#### CommandHistoryItem

```typescript
interface CommandHistoryItem {
  command: string;
  timestamp: Date;
  status: 'success' | 'error' | 'pending';
  result?: any;
}
```

## 🔧 Composable API

Use the `useVoiceActions` composable for programmatic control:

```typescript
import { useVoiceActions } from '@aivue/voice-actions';

const {
  state,
  isListening,
  isProcessing,
  transcript,
  confidence,
  error,
  isSupported,
  initialize,
  start,
  stop,
  speak,
  cleanup
} = useVoiceActions({
  aiClient,
  commands,
  language: 'en-US',
  continuousMode: false,
  voiceFeedback: true
});

// Initialize
initialize();

// Start listening
start();

// Stop listening
stop();

// Speak text
speak('Hello, world!');

// Cleanup
cleanup();
```

## 🛠️ Utilities

### Command Parser

```typescript
import { parseCommand, matchCommand, findBestMatch } from '@aivue/voice-actions';

// Parse command
const parsed = parseCommand('search for laptops');
// { command: 'search for laptops', intent: 'search', entities: {...}, confidence: 1.0 }

// Match command
const matches = matchCommand('open dashboard', /open (.*)/i);
// ['open dashboard', 'dashboard']

// Find best match
const best = findBestMatch('search products', commands);
// { index: 2, confidence: 0.85 }
```

### Speech Synthesis

```typescript
import { speak, getVoices, SpeechQueue } from '@aivue/voice-actions';

// Speak text
await speak('Hello, world!', {
  lang: 'en-US',
  rate: 1.0,
  pitch: 1.0,
  volume: 1.0
});

// Get available voices
const voices = await getVoices();

// Use speech queue
const queue = new SpeechQueue();
queue.add('First message');
queue.add('Second message');
queue.add('Third message');
```

## 🌍 Supported Languages

- 🇺🇸 English (US) - `en-US`
- 🇬🇧 English (UK) - `en-GB`
- 🇪🇸 Spanish - `es-ES`
- 🇫🇷 French - `fr-FR`
- 🇩🇪 German - `de-DE`
- 🇮🇹 Italian - `it-IT`
- 🇧🇷 Portuguese - `pt-BR`
- 🇯🇵 Japanese - `ja-JP`
- 🇨🇳 Chinese - `zh-CN`
- 🇰🇷 Korean - `ko-KR`
- 🇮🇳 Hindi - `hi-IN`
- 🇸🇦 Arabic - `ar-SA`

## 🎨 Styling

The component uses scoped styles and CSS variables for easy customization:

```css
.voice-actions {
  --voice-primary: #667eea;
  --voice-secondary: #764ba2;
  --voice-success: #10b981;
  --voice-error: #ef4444;
  --voice-text: #1f2937;
  --voice-bg: #ffffff;
}
```

## 📝 Examples

### Smart Home Control

```vue
<template>
  <VoiceActions
    :commands="smartHomeCommands"
    continuous-mode
    wake-word="hey home"
    wake-word-enabled
    voice-feedback
  />
</template>

<script setup>
const smartHomeCommands = [
  {
    pattern: /turn (on|off) the (.*)/i,
    action: (matches) => {
      const [, state, device] = matches;
      controlDevice(device, state === 'on');
    },
    description: 'Control devices'
  },
  {
    pattern: /set (.*) to (\d+) percent/i,
    action: (matches) => {
      const [, device, level] = matches;
      setDeviceLevel(device, parseInt(level));
    },
    description: 'Set device level'
  }
];
</script>
```

### Navigation Assistant

```vue
<template>
  <VoiceActions
    :commands="navCommands"
    :suggestions="navSuggestions"
    show-suggestions
    voice-feedback
  />
</template>

<script setup>
const navCommands = [
  {
    pattern: /go to (.*)/i,
    action: (matches) => router.push(`/${matches[1]}`),
    icon: '🔗'
  },
  {
    pattern: /go back/i,
    action: () => router.back(),
    icon: '⬅️'
  }
];

const navSuggestions = [
  { text: 'Go to dashboard', icon: '📊' },
  { text: 'Go to settings', icon: '⚙️' },
  { text: 'Go back', icon: '⬅️' }
];
</script>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📦 Related Packages

Explore the complete @aivue ecosystem:

### 🧠 [@aivue/core](https://www.npmjs.com/package/@aivue/core)
Core AI functionality for Vue.js components

### 💬 [@aivue/chatbot](https://www.npmjs.com/package/@aivue/chatbot)
AI-powered chat components for Vue.js

### ✨ [@aivue/autosuggest](https://www.npmjs.com/package/@aivue/autosuggest)
AI-powered suggestion components for Vue.js

### 📝 [@aivue/smartform](https://www.npmjs.com/package/@aivue/smartform)
AI-powered form validation for Vue.js

### 🎭 [@aivue/emotion-ui](https://www.npmjs.com/package/@aivue/emotion-ui)
Emotion-aware UI components with sentiment analysis

### 📄 [@aivue/doc-intelligence](https://www.npmjs.com/package/@aivue/doc-intelligence)
Document processing and OCR with AI

### 🧠 [@aivue/predictive-input](https://www.npmjs.com/package/@aivue/predictive-input)
AI-powered predictive text input

### 🔔 [@aivue/smart-notify](https://www.npmjs.com/package/@aivue/smart-notify)
Intelligent notification system

### 📋 [@aivue/smart-datatable](https://www.npmjs.com/package/@aivue/smart-datatable)
Advanced data table components

### 🖼️ [@aivue/image-caption](https://www.npmjs.com/package/@aivue/image-caption)
AI-powered image captioning with OpenAI Vision models

### 📊 [@aivue/analytics](https://www.npmjs.com/package/@aivue/analytics)
AI-powered analytics and insights

## 📄 License

MIT © [reachbrt](https://github.com/reachbrt)

## 🔗 Links

- [Documentation](https://github.com/reachbrt/vueai#readme)
- [Demo](https://aivue.netlify.app/)
- [NPM Package](https://www.npmjs.com/package/@aivue/voice-actions)
- [GitHub](https://github.com/reachbrt/vueai)
- [Issues](https://github.com/reachbrt/vueai/issues)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=reachbrt/vueai&type=Date)](https://star-history.com/#reachbrt/vueai&Date)


