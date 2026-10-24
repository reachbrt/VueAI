<template>
  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'orbit'">
      <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(-32 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(58 12 12)" />
    </template>
    <template v-else-if="name === 'lines'">
      <path d="M4 7h16M4 12h10M4 17h13" />
    </template>
    <template v-else-if="name === 'terminal'">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M12 15h5" />
    </template>
    <template v-else-if="name === 'hex'">
      <path d="M12 3l7 4v10l-7 4-7-4V7z" />
      <path d="M12 8v8M9 10.5l6 3M15 10.5l-6 3" />
    </template>
    <template v-else-if="name === 'chat'">
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6A2.5 2.5 0 0 1 16.5 15H10l-4 3.5V15.2A2.5 2.5 0 0 1 5 12.5z" />
    </template>
    <template v-else-if="name === 'database'">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </template>
    <template v-else-if="name === 'cpu'">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 3v4M12 3v4M15 3v4M9 17v4M12 17v4M15 17v4M3 9h4M3 12h4M3 15h4M17 9h4M17 12h4M17 15h4" />
    </template>
    <template v-else-if="name === 'nodes'">
      <circle cx="6" cy="7" r="2" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="12" cy="17" r="2" />
      <path d="M8 8.2l3 7M16 8.2l-3 7" />
    </template>
    <template v-else-if="name === 'pen'">
      <path d="M4 20l4.2-1.1L19 8.1a2 2 0 0 0-2.8-2.8L5.4 16.1z" />
      <path d="M14.5 6.5l3 3" />
    </template>
    <template v-else-if="name === 'list'">
      <path d="M8 7h11M8 12h11M8 17h11" />
      <circle cx="4.5" cy="7" r=".8" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="12" r=".8" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="17" r=".8" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'translate'">
      <path d="M4 6h8M8 6c0 6-3 8-5 9M8 6c1 4 3.5 6.5 6 8" />
      <path d="M13 14l2.2 5L18 14M14.2 17.2h3.2" />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 3l7 3v6c0 4.2-2.8 7.2-7 9-4.2-1.8-7-4.8-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </template>
    <template v-else-if="name === 'table'">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M9 10v9M15 10v9" />
    </template>
    <template v-else-if="name === 'chart'">
      <path d="M4 19V5M4 19h16" />
      <path d="M8 15v-3M12 15V8M16 15v-5" />
    </template>
    <template v-else-if="name === 'tree'">
      <circle cx="12" cy="5" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M12 7v4M12 11H6.8L6 16M12 11h5.2L18 16" />
    </template>
    <template v-else-if="name === 'doc'">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </template>
    <template v-else-if="name === 'image'">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.4" />
      <path d="M3 16l5-4 4 3 3-2 6 4" />
    </template>
    <template v-else-if="name === 'form'">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </template>
    <template v-else-if="name === 'check'">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 12.5l2.5 2.5L16 9" />
    </template>
    <template v-else-if="name === 'suggest'">
      <path d="M5 8h14M5 12h9M5 16h6" />
      <path d="M17 13l1.2 2.4L21 17l-2.8 1.2L17 21l-1.2-2.8L13 17l2.8-1.6z" />
    </template>
    <template v-else-if="name === 'cursor'">
      <path d="M5 5h14M8 5v3M5 11h8" />
      <path d="M15 11v6M15 14h4" />
    </template>
    <template v-else-if="name === 'mic'">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" />
    </template>
    <template v-else-if="name === 'bell'">
      <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </template>
    <template v-else-if="name === 'face'">
      <circle cx="12" cy="12" r="8" />
      <path d="M9 10h.01M15 10h.01M8.5 14.5c1 .9 2.2 1.4 3.5 1.4s2.5-.5 3.5-1.4" />
    </template>
    <template v-else-if="name === 'spin'">
      <path d="M20 12a8 8 0 1 1-2.2-5.5" />
      <path d="M20 4v5h-5" />
    </template>
    <template v-else-if="name === 'cube'">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
    </template>
    <template v-else-if="name === 'thread'">
      <path d="M7 7h10M7 12h7M7 17h5" />
      <circle cx="5" cy="7" r=".7" fill="currentColor" stroke="none" />
      <circle cx="5" cy="12" r=".7" fill="currentColor" stroke="none" />
      <circle cx="5" cy="17" r=".7" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'message'">
      <path d="M5 6h14v9H9l-4 3z" />
    </template>
    <template v-else-if="name === 'reason'">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2" />
    </template>
    <template v-else-if="name === 'tool'">
      <path d="M14.5 5.5a3.5 3.5 0 0 0-4.8 4.8L4 16.2 7.8 20l5.9-5.7a3.5 3.5 0 0 0 4.8-4.8l-2.2 2.2-2.6-2.6z" />
    </template>
    <template v-else-if="name === 'approval'">
      <path d="M12 3l7 3v6c0 4-2.7 6.8-7 8.5C7.7 18.8 5 16 5 12V6z" />
      <path d="M9.2 12.1l1.8 1.8 3.8-3.8" />
    </template>
    <template v-else-if="name === 'composer'">
      <rect x="3" y="6" width="18" height="12" rx="6" />
      <path d="M8 12h5" />
    </template>
    <template v-else-if="name === 'panel'">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
    </template>
    <template v-else-if="name === 'play'">
      <circle cx="12" cy="12" r="8" />
      <path d="M10 9.5v5l4.5-2.5z" />
    </template>
    <template v-else-if="name === 'github'">
      <path d="M9 19c-4 1.2-4-2-6-2m12 4v-3.2a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.4 11.4 0 0 0-6 0C6.7 2 5.7 2.3 5.7 2.3a4.3 4.3 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.8 5.6 5.5 6a2.7 2.7 0 0 0-.8 2.1V21" />
    </template>
    <template v-else>
      <path d="M12 3l1.6 4.8L18.5 9.5 13.6 11 12 15.8 10.4 11 5.5 9.5l4.9-1.7z" />
    </template>
  </svg>
</template>

<script setup lang="ts">
defineProps<{ name: string }>();
</script>
