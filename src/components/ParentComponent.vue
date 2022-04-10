<script lang="ts" setup>
import ChildComponent from './ChildComponent.vue';
import { ref } from 'vue';

let emitted = ref(false);
const onCustom = () => {
  emitted.value = true;
}
</script>

<template>
  <div>
    <ChildComponent @custom="onCustom" />
    <p v-if="emitted">Emitted!</p>
  </div>
</template>
