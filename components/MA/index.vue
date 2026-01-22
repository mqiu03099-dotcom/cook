<template>
  <a
    :href="href"
    :target="target"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
const { href = "/", blank = false } = defineProps<{
  href?: string;
  blank?: boolean;
}>();
const target = blank ? "_blank" : "_self";
</script>

<style scoped></style>

