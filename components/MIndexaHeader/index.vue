<template>
  <div
    class="flex justify-center gap-9 items-center px-6 py-4 bg-black/20 backdrop-blur-sm fixed top-0 left-0 w-full z-50"
  >
    <MA
      href="/"
      class="shrink-0 mr-auto flex items-center gap-2 font-bold"
    >
      <MImg
        :src="logo"
        class="size-6"
        :bgwhite="false"
        :rounded="false"
        alt="logo"
      />
      <div class="hidden md:block">{{ defaultTitle }}</div>
    </MA>
    <MA
      href="/shandong/jinan"
      class="shrink-0"
    >
      分类
    </MA>
    <MA
      href="/blog"
      class="shrink-0"
    >
      博客
    </MA>
    <MA
      href="/about"
      class="shrink-0 hidden md:block"
    >
      About
    </MA>
    <MA
      href="/privacy"
      class="shrink-0 hidden md:block"
    >
      Privacy
    </MA>
    <MA
      href="/contact"
      class="shrink-0 hidden md:block"
    >
      Contact
    </MA>
    <MA
      href="/search"
      class="shrink-0 ml-auto"
    >
      <MImg
        :src="search"
        class="size-6"
        :bgwhite="false"
        :rounded="false"
      />
    </MA>
  </div>
</template>

<script lang="ts" setup>
import logo from "@/public/logo.png";
import search from "@/public/search.png";
</script>

<style scoped></style>
