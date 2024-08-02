<template>
  <Header />

  <!-- Hero Section -->
  <HeroSection />

  <!-- Services -->
  <Service />

  <!-- best deal card section -->
  <BestDeal></BestDeal>

  <!-- offer card section -->
  <OfferProducts></OfferProducts>

  <!-- Weekly Featured Products -->
  <WeeklyFeaturedProduct></WeeklyFeaturedProduct>

  <!-- Featured brands -->
  <BrandCard></BrandCard>

  <!-- other products -->
  <NewProducts></NewProducts>
  <SaleProduct></SaleProduct>
  <TopProducts></TopProducts>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Header from "@/components/common/Header.vue";
import HeroSection from "@/pages/homePage/HeroSection.vue";
import Service from "@/pages/homePage/Services.vue";
import BestDeal from "@/pages/homePage/BestDeal.vue";
import OfferProducts from "@/pages/homePage/OfferProducts.vue";
import WeeklyFeaturedProduct from "@/pages/homePage/WeeklyFeaturedProduct.vue";
import BrandCard from "@/components/cards/BrandCard.vue";
import NewProducts from "@/pages/homePage/NewProducts.vue";
import SaleProduct from "@/pages/homePage/SaleProduct.vue";
import TopProducts from "@/pages/homePage/TopProducts.vue";
import Footer from "@/pages/footer/Index.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    HeroSection,
    Service,
    BestDeal,
    OfferProducts,
    WeeklyFeaturedProduct,
    BrandCard,
    NewProducts,
    SaleProduct,
    TopProducts,
    Footer,
  },
};
</script>
