<template>
  <div class="px-10">
    <div class="flex justify-between pt-14 pb-8">
      <ViewAllSection
        title="Best Deal on Cloths"
        btnName="view all >"
        @onClickViewAllProduct="onClickViewAllProduct()"
      >
      </ViewAllSection>
    </div>
    <Carousel
      :items-to-show="5"
      :itemsToScroll="1"
      :transition="300"
      :autoplay="2000"
      :wrap-around="true"
      :breakpoints="breakpoints"
    >
      <Slide v-for="(item, index) in allProducts" :key="index" class="px-5">
        <BestDealCard
          :key="index"
          :url="item.url"
          :category="item.category"
          :name="item.name"
          :price="item.price"
          :discount="item.discount"
          :afterDiscountPrice="item.afterDiscountPrice"
          :stock="item.stock"
          @onProductClick="onProductClick(item)"
          @addToCart="addToCart(item)"
        ></BestDealCard>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import ViewAllSection from "@/components/common/ViewAllButton.vue";
import BestDealCard from "@/components/cards/BestDealCard.vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "DealCard",
  data() {
    return {
      allProducts: [],
      product: [],
      sample: {},
      breakpoints: {
         // 640px and up
        640: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        // 700px and up
        768: {
          itemsToShow: 3,
          snapAlign: "start",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
        1236: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    ViewAllSection,
    BestDealCard,
    Carousel,
    Slide,
    Navigation,
  },
  methods: {
    onClickViewAllProduct() {
      const type = "bestDealproducts"
      this.$router.push(`/all-products/${type}`);
      this.$store.commit("VIEW_ALL_PRODUCT", this.allProducts);
    },
    onProductClick(item) {
      this.$router.push(`/product-detail/${item.id}`);
    },
    addToCart(item) {
      this.$store.commit("ADD_TO_CART", item);
    },
    afterDiscountPrice() {
      this.$store.commit("DISCOUNTED_PRICE", this.allProducts);
    },
  },
  mounted() {
    this.allProducts = this.$store.getters.ALL_PRODUCTS.filter(
      (data) => data.section == "bestDealproducts"
    );
    this.afterDiscountPrice();
  },
};
</script>
<style>
.carousel__next {
  right: 0;
  top: 0;
  margin-top: -50px;
  margin-right: 0px;
}
.carousel__prev {
  right: 0 !important;
  left: unset;
  top: 0;
  margin-top: -50px;
  margin-right: 44px;
}
.carousel {
  text-align: start;
}
</style>
