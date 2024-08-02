<template>
  <div class="flex flex-wrap" @click.prevent="onProductClick()">
    <div class="w-full flex flex-col p-3">
      <div class="bg-primary rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
        <div class="text-end px-3 pt-3">
          <font-awesome-icon
            class="w-5 h-5"
            :icon="['fas', 'xmark']"
            @click.prevent="removeFromWishList()"
          />
        </div>
        <div class="flex justify-center items-center">
          <img class="w-36 h-36" :src="url" alt="" />
        </div>
        <div class="p-4 flex-1 flex flex-col">
          <p class="mb-4 text-2xl font-normal truncate">{{ name }}</p>
          <p
            v-if="subTitle"
            class="font-mulish font-semibold xl:text-3xl lg:text-2xl sm:text-3xl mt-2"
          >
            {{ subTitle }}
          </p>
          <!-- price section  -->
          <div class="mb-3">
            <span v-if="discount" class="font-mulish text-red-900 mr-5 text-2xl"
              >-{{ discount }}% off</span
            >
            <span class="font-poppins text-3xl font-normal"
              >${{ afterDiscountPrice }}</span
            >
            <div class="flex">
              <p class="pr-3 font-normal">M.R.P</p>
              <del>
                <p class="font-poppins font-normal">${{ price }}</p>
              </del>
              <span v-if="stock > 0 && stock <= 10" class="text-xl text-yellow-400 pl-5">
                Low Stock
              </span>
              <span v-if="stock == 0" class="text-red-900 text-xl pl-5"
                >Out Of Stock</span
              >
            </div>
          </div>
          <!-- end price section  -->
          <div class="description mb-4 text-grey-darker text-sm flex-1">
            <p>{{ description }}</p>
          </div>
          <CustomButton
            :disableBtn="stock == 0"
            btnText="Add to cart"
            @onButtonClick="addToCartFromWishlist()"
          ></CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../common/CustomButton.vue";
export default {
  name: "wishListCart",
  components: {
    CustomButton,
  },
  methods: {
    onProductClick() {
      this.$emit("onProductClick");
    },
    addToCartFromWishlist() {
      this.$emit("addToCartFromWishlist");
    },
    removeFromWishList() {
      this.$emit("removeFromWishList");
    },
  },
  props: {
    url: {
      Type: String,
      required: true,
      default: "",
    },
    name: {
      Type: String,
      required: true,
      default: "",
    },
    subTitle: {
      Type: String,
      required: true,
      default: "",
    },
    discount: {
      Type: String,
      required: true,
      default: "",
    },
    stock: {
      Type: String,
      required: true,
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
    afterDiscountPrice: {
      Type: String,
      required: false,
      default: "",
    },
  },
};
</script>
<style>
.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
