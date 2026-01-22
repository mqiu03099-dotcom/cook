<template>
  <div class="flex flex-col gap-3">
    <MIndexNew :data="cantoneseNewList" />
    <MCuisineTab :data="tabList" />
    <MCuisineCard :data="cantoneseList" />
  </div>
</template>

<script setup lang="ts">
const { cuisine, cantonese } = useRoute().params as any;
const tabList = menu.find((item) => item?.href?.includes(cuisine))?.children || [];
const cantoneseList = tabList.find((item) => item?.href?.includes(cantonese))?.children || [];
const cantoneseNewList =
  tabList.find((item) => item?.href?.includes(cantonese))?.children?.filter((item) => item.new) ||
  [];
</script>

<style scoped></style>
