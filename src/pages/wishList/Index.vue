<template>
  <Header />
  <div v-if="items.length == 0" class="pt-10">
    <p
      class="flex justify-center items-center mx-auto mb-16 font-roboto text-4xl font-medium"
    >
      Wishlist is Empty.....
    </p>
    <div class="flex justify-center items-center">
      <CustomButton
        btnText="Back To Home Page"
        extraClass="bg-blue-300 px-32 py-2"
        @onButtonClick="onButtonClick()"
      ></CustomButton>
    </div>
  </div>
  <div v-else class="mt-10 px-10">
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
      <WishListCard
        v-for="item in product"
        :key="item"
        :url="item.url"
        :price="item.price"
        :stock="item.stock"
        :afterDiscountPrice="item.afterDiscountPrice"
        :subTitle="item.subTitle"
        :discount="item.discount"
        :name="item.name"
        :description="item.description"
        @addToCartFromWishlist="addToCartFromWishlist(item)"
        @removeFromWishList="removeFromWishList(item)"
        @onProductClick="onProductClick(item)"
      ></WishListCard>
    </div>
  </div>
  <footer><Footer /></footer>
</template>

<script>
import Header from "@/components/common/Header.vue";
import WishListCard from "@/components/wishList/wishList.vue";
import CustomButton from "@/components/common/CustomButton.vue";
import Footer from "@/pages/footer/Index.vue";

export default {
  name: "WishListPage",
  data() {
    return {
      items: [],
      product: [],
    };
  },
  components: {
    Header,
    WishListCard,
    CustomButton,
    Footer,
  },
  computed: {},
  methods: {
    onProductClick(item) {
      this.$router.push(`/product-detail/${item.id}`);
    },
    addToCartFromWishlist(item) {
      this.$store.commit("ADD_TO_CART_FROM_WISHLIST", item);
      this.$store.commit("REMOVE_FROM_WISHLIST", item);
      this.$router.push("/cart");
    },
    removeFromWishList(item) {
      this.$store.commit("REMOVE_FROM_WISHLIST", item);
    },
    onButtonClick() {
      this.$router.push("/");
    },
    products() {
      this.items = this.$store.getters.PRODUCT_IN_WISHLIST;
      const productItem = this.items.map((item) => item.id);
      for (var index in productItem) {
        //find item from main data
        const itemProduct = this.$store.state.allProduct.find(
          (data) => data.id === productItem[index]
        );
        this.product.push(itemProduct);
      }
    },
  },
  mounted() {
    this.products();
  },
};
</script>
