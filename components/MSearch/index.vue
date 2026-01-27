<template>
  <div
    class="py-3 px-6 group bg-white/20 backdrop-blur-sm rounded-full md:max-w-100 w-full flex items-center gap-3"
  >
    <MImg
      :src="menu"
      alt="menu"
      :bgwhite="false"
      :rounded="false"
      class="size-5 md:hidden! cursor-pointer"
      @click="handleShowNav"
    />
    <p class="flex-1 text-center md:text-left">鱼香肉丝</p>
    <MA href="/search">
      <MImg
        :src="search"
        alt="search"
        :bgwhite="false"
        :rounded="false"
      />
    </MA>
  </div>
</template>

<script lang="ts" setup>
import search from "@/public/search.png";
import menu from "@/public/menu.png";

const { getShowNav, setShowNav } = useShowNav();

const handleShowNav = () => {
  setShowNav(!getShowNav.value);
};
</script>

<style scoped></style>
