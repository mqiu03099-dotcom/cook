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
    <div class="w-full flex flex-col gap-9 p-9">
      <div class="flex gap-9 flex-wrap items-center justify-center">
        <div
          :href="href"
          v-for="({ href, icon1, name }, index) in menu"
          :key="index"
          blank
          @click="handleSelectMenu(index)"
          class="group cursor-pointer flex flex-col justify-center items-center text-xl gap-6"
        >
          <div
            class="size-30 flex justify-center items-center shadow bg-black/20 rounded-2xl border-[#00d1d1]"
          >
            <MImg
              :src="icon1"
              class="size-20"
              :bgwhite="false"
              :rounded="false"
            />
          </div>
          <div
            :class="[
              'group-hover:text-[#00d1d1] border-2 border-transparent group-hover:border-[#00d1d1] px-4 rounded-2xl py-1',
              index === activeIndex ? 'border-2 border-[#00d1d1]! text-[#00d1d1]' : '',
            ]"
          >
            {{ name }}
          </div>
        </div>
      </div>
      <div class="flex gap-9 flex-wrap min-h-60 justify-center w-full">
        <div class="flex flex-col gap-6">
          <div class="font-bold text-xl">{{ menuSelectContent?.name }}</div>
          <div>{{ menuSelectContent?.description }}</div>
          <ul class="flex flex-col gap-3">
            <li
              v-for="(item, index) in menuSelectContent?.tag || []"
              :key="index"
              class="flex items-center gap-3"
            >
              <div class="size-3 rounded-full bg-[#00d1d1]"></div>
              <div>{{ item }}</div>
            </li>
          </ul>
        </div>
        <div class="relative flex justify-center items-center min-w-60 w-full max-w-150 h-60">
          <MImg
            :src="menuSelectContent?.bgImgs?.[0]"
            class="absolute left-0 top-0 size-full"
          />
          <MA
            :href="menuSelectContent?.href"
            class="px-6 py-3 bg-[#00d1d1]/20 hover:bg-[#00d1d1] justify-center flex items-center gap-2 backdrop-blur-sm font-bold text-center rounded-2xl"
          >
            <MImg
              :src="study"
              class="size-6"
              :bgwhite="false"
              :rounded="false"
            />
            <div>了解更多</div>
          </MA>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import indexBg from "@/public/index-bg.webp";
import study from "@/public/study.png";

const activeIndex = ref<number>(0);
const menuSelectContent = ref<CuisineType | undefined>(
  menu[activeIndex.value]?.children?.[0]?.children?.[0],
);

/**
 * 选中某个菜单
 * @param index
 */
const handleSelectMenu = (index: number) => {
  activeIndex.value = index;
  menuSelectContent.value = menu[index]?.children?.[0]?.children?.[0];
};
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
