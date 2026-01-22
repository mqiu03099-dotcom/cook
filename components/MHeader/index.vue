<template>
  <header class="w-full flex shrink-0 gap-3 justify-between p-3 items-center">
    <MA
      class="items-center gap-3 shrink-0 hidden md:flex"
      title="首页"
    >
      <MImg
        :src="logo"
        class="size-9"
        alt="logo"
      />
      <h1 class="text-3xl font-bold capitalize">{{ defaultTitle }}</h1>
    </MA>
    <MSearch />
  </header>
</template>

<script lang="ts" setup>
import logo from "@/public/logo.png";
</script>

<style scoped></style>
