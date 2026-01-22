<template>
  <div
    v-html="content"
    class="rich-text p-3"
  ></div>
</template>

<script setup lang="ts">
const content = ref("contact");
</script>

<style scoped></style>

