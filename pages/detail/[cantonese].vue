<template>
  <div class="flex flex-col gap-3">
    {{ cantonese }}
  </div>
</template>

<script setup lang="ts">
const { cantonese } = useRoute().params as any;
</script>

<style scoped></style>
