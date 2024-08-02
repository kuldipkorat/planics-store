<template>
  <Header />
  <div class="px-10 pt-10">
    <section
      class="w-fit mx-auto grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5"
    >
      <ViewAllProductCard
        v-for="item in items"
        :key="item"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :stock="item.stock"
        :afterDiscountPrice="item.afterDiscountPrice"
        :discount="item.discount"
        :url="item.url"
        @onProductClick="onProductClick(item)"
        @addToCart="addToCart(item)"
      >
      </ViewAllProductCard>
    </section>
  </div>
  <footer><Footer /></footer>
</template>

<script>
import Header from "@/components/common/Header.vue";
import ViewAllProductCard from "@/components/cards/ViewAllProductCard.vue";
import Footer from "@/pages/footer/Index.vue";

export default {
  name: "AllProducts",
  data() {
    return {
      AllProducts: [],
      items: [],
    };
  },
  components: {
    Header,
    ViewAllProductCard,
    Footer,
  },
  props: ["type"],
  computed: {},
  methods: {
    onProductClick(item) {
      this.$router.push(`/product-detail/${item.id}`);
    },
    addToCart(item) {
      this.$store.commit("ADD_TO_CART", item);
    },
    afterDiscountPrice() {
      this.$store.commit("DISCOUNTED_PRICE", this.items);
    },
    products() {
      (this.items = []),
        (this.AllProducts = this.$store.getters.PRODUCT_IN_VIEW_ALL_PRODUCT);
      const productItem = this.AllProducts.map((item) => item.id);
      for (var id in productItem) {
        //find item from main data
        const itemProduct = this.$store.state.allProduct.find(
          (data) => data.id === productItem[id]
        );
        this.items.push(itemProduct);
      }
      this.afterDiscountPrice();
    },
  },
  watch: {
    type() {
      this.products();
    },
  },
  created() {
    this.products();
  },
};
</script>
