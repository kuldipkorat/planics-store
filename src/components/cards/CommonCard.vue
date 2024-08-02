<template>
  <div
    class="md:shadow-xl border-2 border-lightGray-200 rounded-md sm:my-2 md:w-auto sm:items-center"
    @click.prevent="onProductsClick()"
  >
    <div class="">
      <div class="pt-2 flex justify-center">
        <img
        
          class="xl:w-48 xl:h-56 lg:w-44 lg:h-44 md:w-48 md:h-48 sm:w-44 sm:h-44"
          :src="url"
          alt=""
        />
      </div>
      <!-- <img class="absolute  -mt-44 ml-8" :src="productImage" alt="" /> -->
    </div>
    <div class="px-4 max-w-[380px] flex-1 flex flex-col">
      <div class=" mt-3">
        <div class="md:text-base sm:text-sm font-semibold capitalize">{{ name }}</div>
        <!-- <div
          class="flex item-center text-sm"
        > -->
          <!-- <span class="pt-0.5 pr-1"><img :src="star" alt="" /> </span> -->
          <!-- <span class="">{{ rating }}</span> -->
        <!-- </div> -->
      </div>
      <div v-if="brand" class="text-lg uppercase">
        {{brand}}

      </div>
      <!-- <div class="font-semibold md:text-lg sm:text-base mt-2">$ {{ price }}</div> -->
       <div class="flex items-center pr-4">
        <p class="text-2xl font-semibold text-black">${{ afterDiscountPrice }}</p>
        <del>
          <p class="text-sm ml-2">${{ price }}</p>
        </del>
        <p class="text-red-900 text-sm pl-2">({{ discount }}% off)</p>
      </div>
      <div class="description-line text-lightGray-400 xl:text-base lg:text-sm sm:text-xs">
        {{ description }}
      </div>
      <div class="flex justify-end my-3">
        <!-- <div class="flex md:items-center sm:justify-between sm:items-center">
          <span class="text-xs xl:pr-3 lg:pr-1 md:pr-3 sm:pr-6">{{ stockText }}</span>
          <span><img class="xl:w-20 lg:w-16 " :src="stocklevel" alt="" /></span>
        </div> -->
        <div>
          <CartIcon :disabledBtn="stock == 0" @addToCart="addToCart()"></CartIcon>
          <!-- <AddBtn class="md:px-6 md:py-1 sm:px-2 sm:py-1 sm:text-xs" @click.stop='addToCart()'></AddBtn> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import vector from "@/assets/img/home/weeklyOfferCard/vector.svg";
// import stocklevel from "@/assets/img/home/weeklyOfferCard/stocklevel.svg";
import star from "@/assets/img/home/weeklyOfferCard/star.svg";
import CartIcon from "@/components/common/CartIcon.vue";
// import AddBtn from "@/components/common/AddButton.vue";

export default {
  name: "WeeklyFeaturedCard",
  data() {
    return {
      // vector,
      // stocklevel,
      star,
    };
  },
  components: {
    // AddBtn,
    CartIcon,
  },
  methods: {
    onProductsClick() {
      this.$emit("onProductsClick");
    },
    addToCart() {
      this.$emit("addToCart");
    },
  },
  props: {
    url: {
      Type: String,
      required: false,
      default: "",
    },
    name: {
      Type: String,
      required: false,
      default: "",
    },
    rating: {
      Type: String,
      required: false,
      default: "",
    },
    price: {
      Type: String,
      required: false,
      default: "",
    },
    description: {
      Type: String,
      required: false,
      default: "",
    },
     stock: {
      Type: String,
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
    brand: {
      Type: String,
      required: false,
      default: "",
    },
  },
};
</script>
<style>
.description-line {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
