<template>
  <MGrid>
    <MA
      :href="href"
      :target="true"
      class="bg-[#333333]/70 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer group"
      v-for="({ name, bgImgs, tag = [], description, thumb, href }, index) in data"
      :key="index"
    >
      <MImg
        :src="bgImgs?.[0]"
        :rounded="false"
        class="w-full h-60"
      />
      <div class="p-3 w-full flex items-stretch gap-3">
        <MImg
          :src="thumb"
          class="w-18 h-24 shrink-0"
        />
        <div class="flex flex-col justify-between flex-1">
          <div class="flex justify-between items-center gap-3">
            <div class="line-clamp-1 mr-auto text-lg">{{ name }}</div>
            <div
              class="shrink-0 px-3 py-1 flex gap-1 items-center bg-white/20 group-hover:bg-[#00d1d1]/20 rounded-2xl text-sm"
            >
              <MImg
                :src="study"
                :bgwhite="false"
                :rounded="false"
                class="size-2.5"
              />
              <div class="group-hover:text-[#00d1d1] font-bold text-xs">学习</div>
            </div>
          </div>
          <div class="line-clamp-1 text-[#999999] w-full flex gap-3">
            <div
              v-for="(tagStr, index) in tag"
              :key="index"
            >
              {{ tagStr }}
            </div>
          </div>
          <div class="line-clamp-1 text-[#999999]">{{ description }}</div>
        </div>
      </div>
    </MA>
  </MGrid>
</template>

<script lang="ts" setup>
import study from "@/public/study.png";
const { data = [] } = defineProps<{
  data: CuisineType[];
}>();
</script>

<style scoped></style>
