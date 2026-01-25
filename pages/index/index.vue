<template>
  <div class="flex flex-col gap-3">
    <div class="h-dvh w-full relative flex items-center justify-center">
      <MImg
        :src="indexBg"
        class="size-full rounded-none! absolute left-0 top-0"
      />
      <div class="z-10 flex items-center justify-center gap-4 flex-col">
        <div class="text-4xl md:text-5xl lg:text-6xl font-bold">食谱 - 美味厨房</div>
        <div class="text-2xl md:text-3xl lg:text-4xl font-serif">探索烹饪的无限可能</div>
      </div>
      <div
        class="rounded-2xl px-4 py-1 absolute shadow-2xl bottom-10 md:bottom-20 left-1/2 right-1/2 w-max -translate-1/2 text-black font-bold bg-amber-200"
      >
        每日更新 ❤️ 优质食谱
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import indexBg from "@/public/index-bg.png";
</script>

<style scoped></style>
