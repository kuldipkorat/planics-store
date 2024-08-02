<template>
  <div class="bg-blue-300 rounded-lg block" @click.prevent="onProductClick">
    <div class="bg-blue-300 lg:w-56 md:w-48 sm:w-40 rounded-lg flex justify-center pt-5">
      <img class="object-contain  h-24" :src="url" alt="" />
    </div>
    <p class="text-blue-1000 pl-3 mt-4 text-sm lg:w-56 md:w-48 sm:w-40">
      {{ category }}
    </p>
    <p class="pl-3 lg:text-base sm:text-sm font-normal truncate capitalize">
      {{ name }}
    </p>
    <div class="flex justify-between pt-3 px-3 relative end-px">
      <div class="flex items-center">
        <p class="md:text-2xl sm:text-xl font-semibold text-black">${{ afterDiscountPrice }}</p>
        <del>
          <p class="text-sm ml-2">${{ price }}</p>
        </del>
        <p class="text-red-900 sm:text-xs md:text-sm pl-2">({{ discount }}% off)</p>
      </div>
      <!-- <AddBtn @click.stop="addToCart()"> </AddBtn> -->
    </div>
    <div class="flex justify-end pr-2 pb-3">
      <CartIcon :disabledBtn="stock == 0" @addToCart="addToCart()"></CartIcon>
    </div>
  </div>
</template>

<script>
// import AddBtn from "@/components/common/AddButton.vue";
import CartIcon from "@/components/common/CartIcon.vue";
export default {
  name: "DealCard",
  data() {
    return {};
  },
  components: {
    // AddBtn,
    CartIcon,
  },
  props: {
    url: {
      Type: String,
      required: false,
      default: "@/assets/img/clothes/skirt.svg",
    },
    category: {
      Type: String,
      required: false,
      default: "Girl",
    },
    name: {
      Type: String,
      required: false,
      default: "",
    },
    price: {
      Type: Number,
      required: false,
      default: "",
    },
    discount: {
      Type: String,
      required: true,
      default: "",
    },
    afterDiscountPrice: {
      Type: String,
      required: true,
      default: "",
    },
    stock: {
      Type: String,
      required: true,
      default: "",
    },
  },
  methods: {
    onProductClick() {
      this.$emit("onProductClick");
    },
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>
<style>
/* .scrolling-wrapper {
  &::-webkit-scrollbar {
    display: none;
  }
} */
</style>
