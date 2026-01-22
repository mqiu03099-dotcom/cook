<template>
  <div class="fixed left-0 top-0 z-0 w-full h-130 md:h-150 app-bg-img bg-cover bg-no-repeat">
    <div class="absolute left-0 top-0 w-full h-full bg-[#141414]/85"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.app-bg-img {
  background-image: url("https://picsum.photos/1920/1080");
  background-color: #141414;
}

.app-bg-img::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 50px;
  background: linear-gradient(180deg, #14141400 0%, #141414 100%);
  left: 0;
  bottom: 0;
}
</style>
