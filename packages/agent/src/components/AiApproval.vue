<template>
  <div class="aivue-approval">
    <div class="aivue-approval__kicker">Approval</div>
    <strong>{{ title }}</strong>
    <p>{{ detail }}</p>
    <div v-if="status === 'pending'" class="aivue-approval__actions">
      <button type="button" @click="$emit('approve')">Approve</button>
      <button type="button" class="aivue-approval__reject" @click="$emit('reject')">Reject</button>
    </div>
    <p v-else>{{ status }}</p>
  </div>
</template>

<script setup lang="ts">
import '../styles/agent.css';

defineProps<{
  title: string;
  detail: string;
  status: 'pending' | 'approved' | 'rejected';
}>();

defineEmits<{
  approve: [];
  reject: [];
}>();
</script>
