<template>
  <div class="px-10">
    <div class=" flex justify-between pt-14 pb-8">
      <ViewAllSection title="Featured Brands"> </ViewAllSection>
      <div class="flex gap-4">
      <PreScrollButton :disableBtn='this.currentPage == 1' @onPreviousBtnClick="onPreviousBtnClick"></PreScrollButton>
      <NextScrollButton :disableBtn="this.lastPage == true" @onNextBtnClick="onNextBtnClick" ></NextScrollButton>
      </div>
    </div>
    <div class="grid grid-cols-3 sm:flex sm:justify-around item-center gap-3" >
      <img
        v-for="item in products"
        :key="item"
        class="border-lightGray-300 border-2 rounded xl:w-72 xl:h-40 lg:w-60 lg:h-36 md:w-44 md:h-24 sm:w-32 sm:h-16 xl:px-7 xl:py-6 lg:px-5 lg:py-2 md:px-3 sm:py-1 sm:px-3"
        :src="item.url"
        alt=""
        @click.prevent="onBrandClick(item)"
      />
    </div>
  </div>
</template>

<script>
// import { product } from "@/data/Index"
import { brands } from "@/data/home/brandSections"
import ViewAllSection from "@/components/common/ViewAllButton.vue";
import PreScrollButton from "@/components/common/PreviousScrollButton.vue";
import NextScrollButton from "@/components/common/NextScrollButton.vue";

export default {
  name: "BrandCard",
  data() {
    return {
      allProducts:brands,
      products:[],
      scrollAmount:0,
      dataPerPage: 4,
      currentPage: 1,
      lastPage: true,
    };
  },
  components: {
    ViewAllSection,
    PreScrollButton,
    NextScrollButton
  },
  // props: {
  //   imageUrl: {
  //     Type: String,
  //     required: false,
  //     default: "",
  //   },
  // },
  methods: {
    onBrandClick(item){
      var product = this.$store.getters.ALL_PRODUCTS.filter(
        (data) => data.brand == item.brand
      );
      const type = item.brand;
      this.$store.commit("VIEW_ALL_PRODUCT", product);
      this.$router.push(`/all-products/${type}`);

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
    // this.allProducts = product.filter((data) => data.type == "Brands");
    this.brandCard();
  },
};
</script>
