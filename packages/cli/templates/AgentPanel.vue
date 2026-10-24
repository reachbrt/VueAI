<template>
  <AiAgent
    :messages="messages"
    :status="status"
    placeholder="Ask this page to filter, draft, or approve"
    @send="onSend"
    @approve="resolveApproval($event, 'approved')"
    @reject="resolveApproval($event, 'rejected')"
  />
</template>

<script setup>
import { AiAgent, useAgent } from '@aivue/agent';

const { messages, status, addUserMessage, play, resolveApproval, registerTool } = useAgent();

registerTool('echo', (args) => args);

async function onSend(text) {
  addUserMessage(text);
  await play([
    { type: 'RUN_STARTED' },
    { type: 'REASONING_MESSAGE_CONTENT', delta: 'Looking at the page state. ' },
    { type: 'REASONING_END' },
    { type: 'TOOL_CALL_START', id: 'echo-1', name: 'echo' },
    { type: 'TOOL_CALL_ARGS', id: 'echo-1', delta: JSON.stringify({ text }) },
    { type: 'TOOL_CALL_END', id: 'echo-1' },
    { type: 'TEXT_MESSAGE_CONTENT', delta: 'Done. Wire this tool to your own page.' },
    { type: 'RUN_FINISHED' }
  ], { paceMs: 16 });
}
</script>
