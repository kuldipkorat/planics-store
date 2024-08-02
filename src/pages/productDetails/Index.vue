<template>
  <Header />
  <div class="pt-16 px-10">
    <div class="grid lg:flex items-center lg:justify-between">
      <!-- images -->
      <div class="h-96 mx-10 lg:w-1/2 w-full flex items-center justify-center">
        <img class="object-contain" :src="product.url" alt="" />
      </div>
      <!--end of images -->
      <!-- information -->
      <div class="mx-auto w-4/5 lg:w-2/3">
        <h1
          class="font-mulish font-bold xl:text-4xl lg:text-3xl sm:text-4xl sm:mt-10 lg:mt-0 capitalize"
        >
          {{ product.name }}
        </h1>
        <h1 v-if="product.brand" class="font-mulish font-normal text-lg uppercase">
          {{ product.brand }}
        </h1>
        <h2
          v-if="product.subTitle"
          class="font-mulish font-semibold xl:text-3xl lg:text-2xl sm:text-3xl mt-2"
        >
          {{ product.subTitle }}
        </h2>
        <div class="my-5">
          <span v-if="product.discount" class="font-mulish text-red-900 mr-5 text-2xl"
            >-{{ product.discount }}% off</span
          >
          <span class="font-poppins text-4xl font-normal"
            >${{ product.afterDiscountPrice }}</span
          >
          <div class="flex">
            <p class="pr-3">M.R.P</p>
            <del>
              <p class="font-poppins font-light">${{ product.price }}</p>
            </del>
            <span
              v-if="product.stock > 0 && product.stock <= 10"
              class="animate-bounce text-xl text-yellow-400 pl-5"
            >
              Low Stock
            </span>
            <span
              v-if="product.stock == 0"
              class="text-red-900 animate-bounce text-xl pl-5"
              >Out Of Stock</span
            >
          </div>
        </div>
        <div v-if="product.description">
          <span class="font-semibold font-roboto xl:text-base lg:text-sm underline"
            >Description</span
          >
          <div class="font-poppins font-medium text-sm pt-3 w-auto">
            {{ product.description }}
          </div>
        </div>
        <div class="mt-5" v-if="product.specification">
          <p class="font-semibold font-roboto xl:text-base lg:text-sm underline mb-3">
            Specification
          </p>
          <div class="font-medium" v-for="item in product.specification" :key="item">
            <li>{{ item }}</li>
          </div>
        </div>

        <Service class="px-0 md:!justify-between" />
        <div class="mt-10">
          <div>
            <CustomButton
              :disableBtn="this.product.stock == 0"
              extraClass="uppercase bg-primary w-full py-3 my-5"
              btnText="add to bag"
              @onButtonClick="addProductToBag()"
            />
          </div>
          <div>
            <CustomButton
              v-if="isProductInWishlist"
              extraClass="uppercase bg-blue-400 w-full py-3"
              btnText="add to wishlist"
              @onButtonClick="addProductToWishlist()"
            />
            <CustomButton
              v-else
              extraClass="uppercase bg-blue-400 w-full py-3"
              btnText="Remove from wishlist"
              @onButtonClick="removeProductFromWishlist()"
            />
          </div>
        </div>
      </div>
      <!--end of information -->
    </div>
  </div>
  <footer><Footer /></footer>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Service from "@/pages/homePage/Services.vue";
import CustomButton from "@/components/common/CustomButton.vue";
import Footer from "@/pages/footer/Index.vue";

export default {
  name: "ProductDetail",
  data() {
    return {
      product: {},
      isProductInWishlist: true,
    };
  },
  components: {
    Header,
    Service,
    CustomButton,
    Footer,
  },
  methods: {
    addProductToBag() {
      this.$store.commit("ADD_TO_CART", this.product);
    },
    addProductToWishlist() {
      if (this.$store.getters.IS_VALID_USER == true) {
        this.isProductInWishlist = false;
        this.$store.commit("ADD_TO_WISHLIST", this.product);
      } else {
        this.$router.replace("/sign-in");
      }
    },
    removeProductFromWishlist() {
      this.isProductInWishlist = true;
      this.$store.commit("REMOVE_FROM_WISHLIST", this.product);
    },
    productInWishlist() {
      const wishlistItem = this.$store.getters.PRODUCT_IN_WISHLIST.find(
        (data) => data.id == this.product.id
      );
      if (wishlistItem) {
        this.isProductInWishlist = false;
      } else {
        this.isProductInWishlist = true;
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.$store.getters.ALL_PRODUCTS.find((data) => data.id == this.id);
    this.productInWishlist();
  },
};
</script>
