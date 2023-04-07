<template>
  <code>
    {{  counter }}
  </code>
</template>


<script setup lang="ts">
import type { ICounterProps } from '../interfaces/ICounterProps';
interface Props extends ICounterProps {}

defineProps<Props>()
</script>