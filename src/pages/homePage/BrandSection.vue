<template>
  <div class="pt-10">
    <div class="flex justify-between pt-14 pb-8">
      <ViewAllSection
        title="Featured Brands"
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
    <div class="grid grid-cols-3 sm:flex sm:justify-around item-center gap-3">
      <BrandsCard v-for="item in products" :key="item" :url="item.url"></BrandsCard>
    </div>
  </div>
</template>

<script>
import BrandsCard from "@/components/cards/BrandCard.vue";
import ViewAllSection from "@/components/common/ViewAllButton.vue";
import PreScrollButton from "@/components/common/PreviousScrollButton.vue";
import NextScrollButton from "@/components/common/NextScrollButton.vue";
export default {
  name: "BrandsSection",
  data() {
    return {
      allProducts: [],
      products: [],
      dataPerPage: 5,
      currentPage: 1,
      lastPage: true,
    };
  },
  component: {
    BrandsCard,
    ViewAllSection,
    PreScrollButton,
    NextScrollButton,
  },
  methods: {
    onClickViewAllProduct() {
      this.$router.push("/all-products");
      this.$store.commit("VIEW_ALL_PRODUCT", this.allProducts);
    },
    onPreviousBtnClick() {
      this.startIndex -= this.dataPerPage;
      this.endIndex -= this.dataPerPage;
      this.currentPage--;
      this.brandCard();
    },
    onNextBtnClick() {
      this.startIndex += this.dataPerPage;
      this.endIndex += this.dataPerPage;
      this.currentPage++;
      this.brandCard();
    },
    brandCard() {
      let startIndex = (this.currentPage - 1) * this.dataPerPage;
      let endIndex = startIndex + this.dataPerPage;
      let card = this.allProducts;
      this.products = card.filter((el, index) => index >= startIndex && index < endIndex);
      this.lastPage = endIndex >= card.length;
    },
  },
  mounted() {
    this.allProducts = this.$store.getters.ALL_PRODUCTS.filter(
      (data) => data.type == "Brands"
    );
    this.brandCard();
  },
};
</script>
