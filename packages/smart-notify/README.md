<p align="center">
  <a href="https://aivue.netlify.app"><img src="https://raw.githubusercontent.com/reachbrt/VueAI/main/brand/studio-bar.svg" alt="VueAI" width="100%"></a>
</p>

# @aivue/smart-notify

### 🧠 AI-Powered Smart Notification Manager for Vue

A context-aware notification system with AI-powered prioritization, intelligent timing, and user attention detection.

[![npm version](https://img.shields.io/npm/v/@aivue/smart-notify.svg?color=34d399&labelColor=09090b)](https://www.npmjs.com/package/@aivue/smart-notify)
[![npm downloads](https://img.shields.io/badge/downloads-196%2Fmonth-34d399?style=flat-square&logo=npm&color=34d399&labelColor=09090b)](https://www.npmjs.com/package/@aivue/smart-notify)
[![License: MIT](https://img.shields.io/badge/license-MIT-34d399?style=flat-square&labelColor=09090b)](https://opensource.org/licenses/MIT)

---

## ✨ Features

### 🎯 **AI-Powered Urgency Detection** - Automatically classifies notification urgency using NLP
### ⏰ **Optimal Timing Prediction** - Learns when users are most likely to engage with notifications
### 📁 **Intelligent Grouping** - Groups related notifications using semantic similarity
### 👁️ **Attention Detection** - Respects user focus and delays non-critical notifications
### 📦 **Smart Batching** - Reduces interruptions by batching low-priority notifications
### 🎨 **Personalized Styles** - Priority-based visual styling and animations
### 💾 **Offline Learning** - All AI processing happens client-side with local storage
### 🔒 **Privacy-Focused** - No data leaves the user's device

---

## 📦 Installation

```bash
npm install @aivue/smart-notify
```

---

## 🚀 Quick Start

### Basic Usage

```vue
<template>
  <div>
    <NotificationCenter :show-stats="true" @settings="openSettings" />
    <button @click="sendNotification">Send Notification</button>
  </div>
</template>

<script setup>
import { NotificationCenter, useSmartNotify } from '@aivue/smart-notify';
import '@aivue/smart-notify/dist/smart-notify.css';

const { notify } = useSmartNotify();

const sendNotification = () => {
  notify({
    title: 'New Message',
    message: 'You have a new message from John',
    category: 'message',
    priority: 'high'
  });
};
</script>
```

---

## 📚 API Reference

### useSmartNotify Composable

```typescript
const {
  // State
  notifications,      // Readonly<Ref<Notification[]>>
  groups,            // Readonly<Ref<NotificationGroup[]>>
  batches,           // Readonly<Ref<NotificationBatch[]>>
  userAttention,     // Readonly<ComputedRef<UserAttention>>
  unreadCount,       // ComputedRef<number>
  criticalNotifications, // ComputedRef<Notification[]>
  
  // Methods
  notify,            // (notification) => Promise<Notification>
  markAsRead,        // (id: string) => void
  dismiss,           // (id: string) => void
  dismissAll,        // () => void
  remove,            // (id: string) => void
  clearAll,          // () => void
  setDoNotDisturb,   // (enabled: boolean, until?: number) => void
  getStats,          // () => NotificationStats
  exportData,        // () => string
  importData         // (data: string) => void
} = useSmartNotify(config);
```

### Configuration Options

```typescript
interface SmartNotifyConfig {
  enableAI?: boolean;                    // Enable AI features (default: true)
  enableGrouping?: boolean;              // Enable intelligent grouping (default: true)
  enableBatching?: boolean;              // Enable smart batching (default: true)
  enableAttentionDetection?: boolean;    // Enable attention monitoring (default: true)
  enableOptimalTiming?: boolean;         // Enable timing prediction (default: true)
  batchInterval?: number;                // Batch delivery interval in ms (default: 300000)
  maxBatchSize?: number;                 // Max notifications per batch (default: 10)
  idleThreshold?: number;                // Idle detection threshold in ms (default: 60000)
  learningEnabled?: boolean;             // Enable ML learning (default: true)
  respectDoNotDisturb?: boolean;         // Respect DND mode (default: true)
  defaultPriority?: NotificationPriority; // Default priority (default: 'medium')
  soundEnabled?: boolean;                // Enable sound (default: true)
  vibrationEnabled?: boolean;            // Enable vibration (default: false)
  persistNotifications?: boolean;        // Persist to localStorage (default: true)
  maxNotifications?: number;             // Max stored notifications (default: 100)
  autoExpire?: boolean;                  // Auto-expire old notifications (default: true)
  expirationTime?: number;               // Expiration time in ms (default: 86400000)
}
```

### Notification Object

```typescript
interface Notification {
  id: string;                    // Auto-generated unique ID
  title: string;                 // Notification title
  message: string;               // Notification message
  category: NotificationCategory; // 'message' | 'alert' | 'reminder' | 'update' | 'social' | 'system' | 'custom'
  priority?: NotificationPriority; // 'critical' | 'high' | 'medium' | 'low'
  urgency?: number;              // AI-calculated urgency score (0-1)
  timestamp: number;             // Creation timestamp
  scheduledTime?: number;        // Scheduled delivery time
  expiresAt?: number;            // Expiration timestamp
  status: NotificationStatus;    // 'pending' | 'scheduled' | 'delivered' | 'read' | 'dismissed' | 'batched'
  metadata?: Record<string, any>; // Custom metadata
  actions?: NotificationAction[]; // Action buttons
  groupId?: string;              // Group ID if grouped
  tags?: string[];               // Tags for grouping
  source?: string;               // Notification source
  icon?: string;                 // Icon URL
  sound?: string;                // Sound URL
  vibrate?: boolean;             // Enable vibration
}
```

---

## 🎨 Components

### NotificationCenter

Main notification center component with floating toggle button and panel.

```vue
<NotificationCenter
  :show-stats="true"
  @settings="handleSettings"
/>
```

**Props:**
- `showStats` (boolean, optional): Show statistics footer

**Events:**
- `settings`: Emitted when settings button is clicked

### NotificationItem

Individual notification display component.

```vue
<NotificationItem
  :notification="notification"
  @read="handleRead"
  @dismiss="handleDismiss"
  @remove="handleRemove"
  @action="handleAction"
/>
```

---

## 🧠 AI Features

### Urgency Detection

Uses NLP to analyze notification content and determine urgency:
- **Keyword Analysis**: Detects urgent keywords (ASAP, urgent, critical, etc.)
- **Sentiment Analysis**: Analyzes emotional tone
- **Time Relevance**: Detects time-sensitive content
- **Contextual Importance**: Considers category, priority, and actions

### Timing Prediction

Learns optimal notification times based on user behavior:
- Tracks interaction history (read rate, response time)
- Identifies best hours for engagement
- Respects user attention state
- Delays notifications when user is focused

### Intelligent Grouping

Groups related notifications using semantic similarity:
- TF-IDF text similarity
- Category and source matching
- Tag-based grouping
- Time proximity grouping

### Attention Monitoring

Detects user attention state to minimize interruptions:
- **Focused**: User is actively typing or interacting
- **Active**: User is present but not focused
- **Idle**: No activity for threshold period
- **Away**: Page is not visible
- **Do Not Disturb**: User-enabled DND mode

---

## 📊 Statistics & Analytics

```typescript
const stats = getStats();

console.log(stats);
// {
//   total: 150,
//   delivered: 120,
//   read: 80,
//   dismissed: 30,
//   batched: 10,
//   averageReadTime: 1234567890,
//   interactionRate: 0.67,
//   dismissalRate: 0.25,
//   optimalHours: [9, 14, 18],
//   topCategories: [
//     { category: 'message', count: 50 },
//     { category: 'alert', count: 30 }
//   ]
// }
```

---

## 💾 Data Export/Import

```typescript
// Export all data (notifications, config, stats, AI models)
const data = exportData();
localStorage.setItem('backup', data);

// Import data
const backup = localStorage.getItem('backup');
if (backup) {
  importData(backup);
}
```

---

## 🎯 Use Cases

- **Messaging Apps**: Smart notification timing for messages
- **Task Management**: Priority-based task reminders
- **E-commerce**: Non-intrusive promotional notifications
- **Social Media**: Intelligent social update grouping
- **Productivity Tools**: Focus-aware notifications
- **Customer Support**: Urgent ticket alerts

---

## 🆚 Comparison

| Feature | Traditional Notifications | @aivue/smart-notify |
|---------|--------------------------|---------------------|
| Urgency Detection | Manual | AI-Powered |
| Timing | Immediate | Optimal & Learned |
| Grouping | None | Intelligent |
| Attention Awareness | No | Yes |
| Batching | No | Smart |
| Learning | No | Yes (Offline) |
| Privacy | Varies | 100% Local |

---

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

### 🎤 [@aivue/voice-actions](https://www.npmjs.com/package/@aivue/voice-actions)
Voice command integration

### 📋 [@aivue/smart-datatable](https://www.npmjs.com/package/@aivue/smart-datatable)
Advanced data table components

### 🖼️ [@aivue/image-caption](https://www.npmjs.com/package/@aivue/image-caption)
AI-powered image captioning with OpenAI Vision models

### 📊 [@aivue/analytics](https://www.npmjs.com/package/@aivue/analytics)
AI-powered analytics and insights

---

## 📄 License

MIT © [reachbrt](https://github.com/reachbrt)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Support

For issues and questions, please use the [GitHub Issues](https://github.com/reachbrt/aivue/issues) page.

