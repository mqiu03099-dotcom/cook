<template>
  <MIndexBg />
  <div class="w-full h-dvh flex flex-col bg-no-repeat relative z-10">
    <MHeader />
    <main class="flex-1 w-full flex overflow-auto">
      <MNav />
      <div
        :class="['w-full flex-1 overflow-auto p-3 flex flex-col gap-3', getShowNav ? 'hidden' : '']"
      >
        <MIndexNew :data="cantoneseNewList" />
        <MCuisineTab :data="tabList" />
        <MCuisineCard :data="cantoneseList" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { getShowNav } = useShowNav();
const { cuisine, cantonese } = useRoute().params as any;
const tabList = menu.find((item) => item?.href?.includes(cuisine))?.children || [];
const cantoneseList = tabList.find((item) => item?.href?.includes(cantonese))?.children || [];
const cantoneseNewList =
  tabList.find((item) => item?.href?.includes(cantonese))?.children?.filter((item) => item.new) ||
  [];
</script>

<style scoped></style>
