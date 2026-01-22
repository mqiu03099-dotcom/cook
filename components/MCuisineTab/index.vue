<template>
  <div class="flex gap-6 md:gap-9 overflow-auto">
    <MA
      :href="href"
      v-for="({ name, href }, index) in data || []"
      :key="index"
      :class="[
        'py-3 hover:text-[#00d1d1] text-lg',
        href?.includes(cantonese) ? 'text-[#00d1d1] font-bold' : '',
      ]"
    >
      {{ name }}
    </MA>
  </div>
</template>

<script lang="ts" setup>
const { data = [] } = defineProps<{
  data: CuisineType[];
}>();
const { cantonese } = useRoute().params as any;
</script>

<style scoped></style>
