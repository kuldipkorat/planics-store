<template>
  <div class="px-10">
    <div class="pt-14 pb-8">
      <ViewAllSection title="Offer Products"> </ViewAllSection>
    </div>
    <div class="md:flex md:justify-between md:gap-4">
      <OfferCards
        v-for="item in product"
        :key="item.id"
        :discount="item.discount"
        :name="item.name"
        :description="item.description"
        :url="item.url"
        @onProductClick="onProductClick(item)"
      >
      </OfferCards>
    </div>
  </div>
</template>

<script>
import OfferCards from "@/components/cards/OfferCard.vue";
import ViewAllSection from "@/components/common/ViewAllButton.vue";

export default {
  name: "OfferCard",
  data() {
    return {
      product: {},
    };
  },
  components: {
    OfferCards,
    ViewAllSection,
  },
  methods: {
    onProductClick(item) {
      this.$router.push(`/product-detail/${item.id}`);
    },
    afterDiscountPrice() {
      this.$store.commit("DISCOUNTED_PRICE", this.product);
    },
  },
  mounted() {
    this.product = this.$store.getters.ALL_PRODUCTS.filter(
      (data) => data.section == "offerSection"
    );
    this.afterDiscountPrice();
  },
};
</script>
