<template>
  <ul class="w-full flex flex-col gap-6 justify-center">
    <li
      v-for="({ name, icon, href, icon1 }, index) in nav"
      :key="index"
    >
      <MA
        :title="name"
        :class="[
          'flex items-center gap-3 hover:text-[#00d1d1] w-max text-[#a0a0a0]',
          isActive(href) ? 'text-[#00d1d1]! font-bold' : '',
        ]"
        :href="href"
      >
        <MImg
          :src="isActive(href) ? icon1 : icon"
          :alt="name"
          :bgwhite="false"
          :rounded="false"
        />
        {{ name }}
      </MA>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const { nav = [] } = defineProps<{
  nav: CuisineType[];
}>();

const { pathname } = useRequestURL();

/**
 * 判定当前页面是否激活
 * @param href 链接
 */
const isActive = (href?: string) => {
  if (pathname === "/" && pathname === href) {
    return true;
  }
  const newPathname = pathname?.split("/")?.[1];
  const newHref = href?.split("/")?.[1];
  return newHref === newPathname;
};
</script>

<style scoped></style>
