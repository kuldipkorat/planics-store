<template>
  <div class="px-10">
    <div class="flex justify-between pt-14 pb-8">
      <ViewAllSection
        title="Weekly Featured Products"
        btnName="view all >"
        @onClickViewAllProduct="onClickViewAllProduct()"
      >
      </ViewAllSection>
      <div class="flex gap-4">
        <PreScrollButton
          :disableBtn="this.currentPage == 1"
          @onPreviousBtnClick="onPreviousBtnClick()"
        ></PreScrollButton>
        <NextScrollButton
          :disableBtn="this.lastPage == true"
          @onNextBtnClick="onNextBtnClick()"
        ></NextScrollButton>
      </div>
    </div>
    <div
      class="lg:flex lg:justify-evenly md:grid md:grid-cols-2 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-2 xl:gap-8 lg:gap-4"
    >
      <WeeklyFeaturedCard
        v-for="item in products"
        :key="item"
        :url="item.url"
        :name="item.name"
        :rating="item.rating"
        :price="item.price"
        :stock="item.stock"
        :discount="item.discount"
        :afterDiscountPrice="item.afterDiscountPrice"
        :description="item.description"
        :brand="item.brand"
        @onProductClick="onProductClick(item)"
        @addToCart="addToCart(item)"
      ></WeeklyFeaturedCard>
    </div>
  </div>
</template>

<script>
import WeeklyFeaturedCard from "@/components/cards/WeeklyFeaturedCard.vue";
import ViewAllSection from "@/components/common/ViewAllButton.vue";
import PreScrollButton from "@/components/common/PreviousScrollButton.vue";
import NextScrollButton from "@/components/common/NextScrollButton.vue";

export default {
  name: "WeeklyFeaturedProduct",
  data() {
    return {
      allProducts: [],
      products: [],
      dataPerPage: 4,
      currentPage: 1,
      lastPage: true,
    };
  },
  components: {
    WeeklyFeaturedCard,
    ViewAllSection,
    PreScrollButton,
    NextScrollButton,
  },
  methods: {
    onClickViewAllProduct() {
      const type = "weeklyFeaturedProduct";
      this.$router.push(`/all-products/${type}`);
      this.$store.commit("VIEW_ALL_PRODUCT", this.allProducts);
    },
    onProductClick(item) {
      this.$router.push(`/product-detail/${item.id}`);
    },
    addToCart(item) {
      this.$store.commit("ADD_TO_CART", item);
    },
    onPreviousBtnClick() {
      this.startIndex -= this.dataPerPage;
      this.endIndex -= this.dataPerPage;
      this.currentPage--;
      this.weeklyCardData();
    },
    onNextBtnClick() {
      this.startIndex += this.dataPerPage;
      this.endIndex += this.dataPerPage;
      this.currentPage++;
      this.weeklyCardData();
    },
    weeklyCardData() {
      let startIndex = (this.currentPage - 1) * this.dataPerPage;
      let endIndex = startIndex + this.dataPerPage;
      let card = this.allProducts;
      this.products = card.filter((el, index) => index >= startIndex && index < endIndex);
      this.lastPage = endIndex >= card.length;
    },
    afterDiscountPrice() {
      this.$store.commit("DISCOUNTED_PRICE", this.allProducts);
    },
  },
  created() {
    this.allProducts = this.$store.getters.ALL_PRODUCTS.filter(
      (data) => data.section == "weeklyFeaturedProduct"
    );
    this.weeklyCardData();
    this.afterDiscountPrice();
  },
};
</script>
