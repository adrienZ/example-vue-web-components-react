<template>
  <code>
    {{  counter }}
  </code>
</template>


<script setup lang="ts">
defineProps<{
    counter: number;
}>()
</script>