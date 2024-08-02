<template>
  <div class="md:flex md:flex-wrap sm:items-center sm:flex sm:justify-center">
    <div class="lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-12 sm:h-12">
      <img :src="imageUrl" alt="" />
    </div>
    <div class="pt-5">
      <p class="md:text-base sm:text-sm font-semibold">{{ title }}</p>
      <p class="text-lightGray-400 sm:text-xs md:text-sm">{{ subTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesSection",
  props: {
    imageUrl: {
      typr: String,
      require: false,
      default: "",
    },
    title: {
      typr: String,
      require: false,
      default: "Fast Delivery",
    },
    subTitle: {
      typr: String,
      require: false,
      default: "within 1-4 business days",
    },
  },
};
</script>

<style></style>
