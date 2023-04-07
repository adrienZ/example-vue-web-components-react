<template>
  <code>
    {{  countValue }}

    <slot name="bonus" />
  </code>
</template>


<script setup lang="ts">
defineProps<{
  countValue: number;
}>()
</script>