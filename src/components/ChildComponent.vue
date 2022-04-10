<script lang="ts" setup>
import { defineEmits } from 'vue';
const emit = defineEmits<{
  (event: "custom"): void;
}>();
</script>

<template>
  <div>
    <button type="button" @click="emit('custom')"></button>
  </div>
</template>
