<template>
  <div class="mt-30 lg:mt-60 flex flex-col lg:flex-row gap-6">
    <div class="flex flex-col gap-6 mr-auto h-46">
      <h2 class="text-3xl font-bold capitalize mb-auto">鱼香肉丝</h2>
      <p class="text-sm max-w-107 w-full line-clamp-2">
        鱼香肉丝（Yuxiang shredded
        pork），是中国四川特色名菜，以猪里脊肉为主料，配以泡辣椒、姜、蒜等调料炒制而成。该菜品起源于民国时期，相传由民国时期川菜厨师在泡椒肉丝基础上创新而成，1947年其制作方法首次正式记载于重庆《新华日报》。
      </p>
      <MA
        :href="href"
        class="bg-white/20 backdrop-blur-sm flex items-center justify-center gap-3 w-40 h-12 rounded-full cursor-pointer hover:text-[#00d1d1]"
      >
        <MImg
          :src="play"
          :bgwhite="false"
          :rounded="false"
          alt="play"
        />
        教学视频
      </MA>
    </div>
    <div
      v-if="data?.length"
      class="flex gap-3 shrink-0 overflow-auto rounded-2xl"
    >
      <MA
        :href="href"
        v-for="({ name, thumb, href }, index) in data"
        :key="index"
        class="flex flex-col items-center cursor-pointer justify-center gap-3 shrink-0 group"
      >
        <MImg
          :src="thumb"
          class="w-29 h-38"
          :alt="name"
        />
        <p class="group-hover:text-[#00d1d1] text-sm">{{ name }}</p>
      </MA>
    </div>
  </div>
</template>

<script lang="ts" setup>
import play from "@/public/play.png";

const { data = [] } = defineProps<{
  data: CuisineType[];
}>();

const [firstData] = data;
const { href } = firstData || {};
</script>

<style scoped></style>
