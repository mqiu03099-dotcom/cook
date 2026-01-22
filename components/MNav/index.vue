<template>
  <nav
    :class="[
      'w-50 hidden md:flex shrink-0 h-full p-3 pl-9 pb-6 overflow-auto flex-col gap-6 justify-between',
      getShowNav ? 'flex!' : '',
    ]"
  >
    <MMenu :nav="footerList" />
    <MFooter />
  </nav>
</template>

<script lang="ts" setup>
import home from "@/public/home.png";
import home1 from "@/public/home1.png";
import search2 from "@/public/search2.png";
import search1 from "@/public/search1.png";

const { getShowNav } = useShowNav();

const footerList: CuisineType[] = [
  {
    name: "首页",
    icon: home,
    icon1: home1,
    href: "/",
  },
  {
    name: "搜索",
    icon: search2,
    icon1: search1,
    href: "/search",
  },
  ...menu,
];
</script>

<style scoped></style>
