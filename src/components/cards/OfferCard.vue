<template>
  <div
    class="lg:w-full sm:w-auto my-auto sm:pb-5 lg:pb-0"
    @click.prevent="onProductClick()"
  >
    <div class="bg-blue-1000 flex justify-evenly rounded-3xl">
      <div
        class="text-white lg:pl-16 lg:py-14 sm:pl-12 md:pl-7 sm:py-7 font-poppins md:w-72 lg:w-96 sm:w-auto"
      >
        <p class="text-xl text-yellow-400">{{ discount }} % Discount</p>
        <p class="lg:text-4xl md:text-2xl sm:text-2xl pb-5 capitalize">{{ name }}</p>
        <p class="description-line lg:text-sm sm:text-xs font-light pb-9 md:pb-5">{{ description }}</p>
        <button 
          type="button"
          class="bg-white mt-4 text-black lg:py-2 lg:px-8 sm:px-4 sm:py-1 rounded-full sm:text-xs lg:text-base"
        >
          {{ btnText }}
        </button>
      </div>
      <div>
        <img class="lg:w-60 sm:w-32 lg:h-96 sm:h-60 object-contain" :src="url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfferCard",
  methods: {
    onProductClick() {
      this.$emit("onProductClick");
    },
  },
  props: {
    discount: {
      Type: String,
      required: false,
      default: "",
    },
    name: {
      Type: String,
      required: false,
      default: "",
    },
    description: {
      Type: String,
      required: false,
      default: "",
    },
    url: {
      Type: String,
      required: false,
      default: "",
    },
    btnText: {
      Type: String,
      required: false,
      default: "Shop Now",
    },
  },
};
</script>
<style>
/* .no-truncate {
        text-overflow: ellipsis;
        white-space: nowrap;
    } */
    .description-line {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
