<template>
  <footer class="w-full flex items-center justify-center">
    <MMenu :nav="footerList" />
  </footer>
</template>

<script lang="ts" setup>
import about from "@/public/about.png";
import about1 from "@/public/about1.png";
import contact from "@/public/contact.png";
import contact1 from "@/public/contact1.png";
import privacy from "@/public/privacy.png";
import privacy1 from "@/public/privacy1.png";

const footerList: CuisineType[] = [
  {
    name: "About",
    icon: about,
    icon1: about1,
    href: "/about",
  },
  {
    name: "Contact",
    icon: contact,
    icon1: contact1,
    href: "/contact",
  },
  {
    name: "Privacy",
    icon: privacy,
    icon1: privacy1,
    href: "/privacy",
  },
];
</script>

<style scoped></style>
