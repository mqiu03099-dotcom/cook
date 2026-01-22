<template>
  <MIndexBg />
  <div class="w-full h-dvh flex flex-col bg-no-repeat relative z-10">
    <MHeader />
    <main class="flex-1 w-full flex overflow-auto">
      <MNav />
      <div class="w-full flex-1 overflow-auto p-3">
        <NuxtPage :class="[getShowNav ? 'hidden!' : '']" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { getShowNav } = useShowNav();
</script>

<style></style>

