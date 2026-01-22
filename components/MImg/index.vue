<template>
  <img
    :src="src"
    :class="[
      'object-cover block! size-4.5',
      bgwhite ? 'bg-white/20' : '',
      rounded ? 'rounded-2xl' : '',
    ]"
    loading="lazy"
  />
</template>

<script lang="ts" setup>
const {
  src = "",
  bgwhite = true,
  rounded = true,
} = defineProps<{
  src: string;
  bgwhite?: boolean;
  rounded?: boolean;
}>();
</script>

<style scoped></style>
