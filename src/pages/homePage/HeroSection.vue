<template>
  <div>
    <div>
      <img :src="HeroSectionImage" class="w-screen " alt="" />
    </div>
  </div>
</template>

<script>
import HeroSectionImage from "@/assets/img/home/hero_Section.svg";

export default {
  name: "HeroSection",
  data() {
    return {
      HeroSectionImage,
    };
  },
};
</script>

<style></style>
