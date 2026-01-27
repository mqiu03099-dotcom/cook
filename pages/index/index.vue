<template>
  <div class="flex flex-col">
    <div
      class="h-dvh index-bg-img w-full relative flex items-center justify-center gap-4 flex-col bg-no-repeat bg-cover bg-center"
      :style="{ backgroundImage: `url(${indexBg})` }"
    >
      <div class="text-4xl md:text-5xl lg:text-6xl font-bold">食谱 - 美味厨房</div>
      <div class="text-2xl md:text-3xl lg:text-4xl font-serif">探索烹饪的无限可能</div>
      <div
        class="rounded-2xl text-sm px-4 py-1 absolute shadow-2xl bottom-10 md:bottom-20 left-1/2 right-1/2 w-max -translate-1/2 font-bold border border-white/20 backdrop-blur-sm"
      >
        每日更新 ❤️ 优质食谱
      </div>
    </div>
    <div
      class="w-full relative p-9 lg:p-18 gap-9 grid place-items-center grid-cols-[repeat(auto-fill,minmax(300px,1fr))] bg-center bg-cover bg-no-repeat"
      :style="{ backgroundImage: `url(${indexBg2})` }"
    >
      <MA
        :href="href"
        v-for="({ href, icon1, name }, index) in menu"
        :key="index"
        blank
        class="w-full h-50 group flex-col bg-black/20 hover:border-2 shadow hover:backdrop-blur-md transition-all border-[#00d1d1] rounded-2xl font-medium text-2xl flex items-center justify-center gap-3 backdrop-blur-sm"
      >
        <div class="size-12 flex justify-center items-center">
          <MImg
            :src="icon1"
            class="size-10 group-hover:size-12 transition-all"
            :bgwhite="false"
            :rounded="false"
          />
        </div>
        <div class="group-hover:text-[#00d1d1] group-hover:font-bold">
          {{ name }}
        </div>
      </MA>
    </div>
  </div>
</template>

<script setup lang="ts">
import indexBg from "@/public/index-bg.webp";
import indexBg2 from "@/public/index-bg-2.png";
</script>

<style scoped>
.index-bg-img::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 40px;
  background: linear-gradient(180deg, #14141400 0%, #141414 100%);
  left: 0;
  bottom: 0;
  z-index: 1;
}
.index-bg-img::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 40px;
  background: linear-gradient(0deg, #14141400 0%, #141414 100%);
  left: 0;
  bottom: -40px;
  z-index: 1;
}
</style>
