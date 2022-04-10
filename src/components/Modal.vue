<script setup lang="ts">
import { ref, defineExpose } from 'vue';

const isContentShown = ref(false);
const open = () => (isContentShown.value = true);
const close = () => (isContentShown.value = false);

defineExpose({
  open, close, isContentShown
})
</script>

<template>
  <div>{{ isContentShown }}</div>
</template>
