<template>
  <div class="pt-10 px-10">
    <div class="flex justify-between pt-14 pb-8">
      <ViewAllSection
        title="Top Products"
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
      <CommonCard
        v-for="item in product"
        :key="item"
        :url="item.url"
        :brand="item.brand"
        :name="item.name"
        :price="item.price"
        :discount="item.discount"
        :description="item.description"
        :afterDiscountPrice="item.afterDiscountPrice"
        :stock="item.stock"
        @onProductsClick="onProductsClick(item)"
        @addToCart="addToCart(item)"
      ></CommonCard>
    </div>
  </div>
</template>

<script>
import ViewAllSection from "@/components/common/ViewAllButton.vue";
import CommonCard from "@/components/cards/CommonCard.vue";
import PreScrollButton from "@/components/common/PreviousScrollButton.vue";
import NextScrollButton from "@/components/common/NextScrollButton.vue";

export default {
  name: "NewProducts",
  data() {
    return {
      product: [],
      allProducts: [],
      dataPerPage: 4,
      currentPage: 1,
      lastPage: true,
    };
  },
  components: {
    ViewAllSection,
    CommonCard,
    PreScrollButton,
    NextScrollButton
  },
  methods: {
    onProductsClick(item) {
      this.$router.push(`/product-detail/${item.id}`);
    },
    onClickViewAllProduct() {
      const type = "topProduct";
      this.$router.push(`/all-products/${type}`);
      this.$store.commit("VIEW_ALL_PRODUCT", this.products);
    },
    addToCart(item) {
      this.$store.commit("ADD_TO_CART", item);
    },
    onPreviousBtnClick() {
      this.startIndex -= this.dataPerPage;
      this.endIndex -= this.dataPerPage;
      this.currentPage--;
      this.cardData();
    },
    onNextBtnClick() {
      this.startIndex += this.dataPerPage;
      this.endIndex += this.dataPerPage;
      this.currentPage++;
      this.cardData();
    },
    cardData() {
      let startIndex = (this.currentPage - 1) * this.dataPerPage;
      let endIndex = startIndex + this.dataPerPage;
      let card = this.allProducts;
      this.product = card.filter((el, index) => index >= startIndex && index < endIndex);
      this.lastPage = endIndex >= card.length;
    },
    afterDiscountPrice() {
      this.$store.commit("DISCOUNTED_PRICE", this.allProducts);
    },
  },
  created() {
    this.allProducts = this.$store.getters.ALL_PRODUCTS.filter(
      (data) => data.section == "topProduct"
    );
    this.cardData();
    this.afterDiscountPrice();
  },
};
</script>
