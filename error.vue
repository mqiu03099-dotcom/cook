<template>
  <div class="w-full h-dvh flex justify-center items-center">
    <div
      class="max-w-70 w-full h-50 bg-white/20 rounded-2xl flex-col gap-3 font-bold flex justify-center items-center"
    >
      <div
        class="text-2xl"
        :title="tip"
      >
        {{ tip }}
      </div>
      <MA href="/">
        <button
          class="px-4! py-2! hover:scale-105 rounded-2xl bg-purple-400 cursor-pointer hover:bg-purple-500 transition-all"
        >
          BACK
        </button>
      </MA>
    </div>
  </div>
</template>

<script setup lang="ts">
const tip = "404 NOT FOUND";
</script>

<style scoped></style>
