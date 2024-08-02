<template>
  <div
    class="grid grid-cols-2 md:flex md:flex-nowrap sm:flex justify-evenly lg:pt-10 md:pt-7 px-10"
  >
    <Services
      v-for="item in services"
      :key="item"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :subTitle="item.subTitle"
    ></Services>
  </div>
</template>

<script>
import Services from "@/components/common/Services.vue";
import { services } from "../../data/home/service";

export default {
  name: "ServicesSection",
  data() {
    return {
      services: services,
    };
  },
  components: {
    Services,
  },
};
</script>

<style></style>
