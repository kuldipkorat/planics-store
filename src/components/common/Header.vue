<template>
  <div class="flex items-center justify-between shadow-md">
    <div class="flex pl-8 text-center">
      <button type="button" class="pr-10" @click="openNav()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18.853"
          height="12"
          viewBox="0 0 18.853 12"
        >
          <g
            id="Icon_feather-menu"
            data-name="Icon feather-menu"
            transform="translate(-4.5 -8)"
          >
            <path
              id="Path_3"
              data-name="Path 3"
              d="M4.5,18H23.353"
              transform="translate(0 -4)"
              fill="none"
              stroke="#000"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Path_4"
              data-name="Path 4"
              d="M4.5,9H23.353"
              transform="translate(0)"
              fill="none"
              stroke="#000"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Path_5"
              data-name="Path 5"
              d="M4.5,27H23.353"
              transform="translate(0 -8)"
              fill="none"
              stroke="#000"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
        </svg>
      </button>
      <div
        v-if="IsSlidebar"
        class="w-72 fixed top-0 left-0 bg-white z-10 overflow-x-hidden duration-500 font-normal font-roboto flex justify-center items-center h-full"
      >
        <!--exit icon, will close navbar when clicked-->
        <div>
          <button
            @click.stop="openNav()"
            class="text-4xl absolute top-0 left-0 ml-10 mt-6"
          >
            &times;
          </button>
        </div>
        <!-- end exit icon, will close navbar when clicked-->
        <!-- categories  -->
        <div
          class="fixed top-0 mt-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        >
          <div class="h-full px-3 py-4 overflow-y-auto">
            <div
              v-for="item in main"
              :key="item"
              class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-medium text-lg capitalize"
            >
              {{ item.title }}
              <div class="border-b border-lightGray-400"></div>  

              <ul class="text-left">
                <li v-for="(innerItem, index) in item.subTitles" :key="index">
                  <button
                    class="flex items-center w-full p-2 font-normal transition duration-75 rounded-lg pl-11 group hover:bg-lightGray-100 capitalize"
                    @click.prevent="onCategoryClick(innerItem)"
                  >
                    {{ innerItem.name }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--end  categories  -->
      </div>
      <button class="xl:text-3xl lg:text-2xl md:text-xl" @click.prevent="OnLogoClick()">
        Planics Store
      </button>
    </div>
    <div class="py-5">
      <input
        type="text"
        placeholder="Search for products"
        ref="refA"
        v-model="searchData"
        class="xl:w-[747px] lg:w-[550px] md:w-80 sm:w-56 bg-lightGray-100 h-11 rounded-full pl-12 pr-4 relative"
        @change="searchInputData()"
      />
      <div>
        <i class="fa fa-search absolute -mt-7 fa-md ml-4 text-lightGray-400"></i>
      </div>
    </div>
    <div class="flex pl-2">
      <div>
        <img :src="Login" alt="" />
      </div>
      <div>
        <div
          v-if="this.$store.getters.IS_VALID_USER == false"
          class="sm:text-center font-roboto xl:text-lg md:text-base sm:text-sm pl-3"
        >
          <button @click="logIn()" type="button">Login</button>
        </div>
        <div
          v-else
          class="sm:text-center font-roboto xl:text-lg md:text-base sm:text-sm pl-3"
        >
          <button @click="logOut()" type="button">Log Out</button>
        </div>
      </div>
      <div class="pr-2 pl-5" @click="goToCartPage()">
        <img :src="Cart" alt="" />
        <span
          v-if="this.$store.getters.PRODUCT_COUNT_IN_CART !== 0"
          class="bg-red-900 rounded-xl px-2 py-1 text-xs text-center text-white absolute -mt-9 ml-3"
          >{{ this.$store.getters.PRODUCT_COUNT_IN_CART }}</span
        >
      </div>
      <div class="pr-8" @click="goToWishListPage()">
        <button type="button">
          <img :src="Heart" alt="" />
          <span
            v-if="this.$store.getters.PRODUCT_COUNT_IN_WISHLIST !== 0"
            class="bg-red-900 rounded-xl px-2 py-1 text-xs text-center text-red-900 absolute -mt-9"
            >{{ this.$store.getters.PRODUCT_COUNT_IN_WISHLIST }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/assets/img/header/navigation.svg";
import Search from "@/assets/img/header/search.svg";
import Login from "@/assets/img/header/login.svg";
import Cart from "@/assets/img/header/cart.svg";
import Heart from "@/assets/img/header/heart.svg";
import { main } from "@/data/header/slidebar";

export default {
  name: "HeadeComponent",
  data() {
    return {
      Navigation,
      Search,
      Login,
      Cart,
      Heart,
      IsSlidebar: false,
      allProducts: [],
      searchData: "",
      main: main,
    };
  },
  methods: {
    logIn() {
      this.$router.push("/sign-in");
    },
    logOut() {
      this.$store.commit("LOG_OUT");
      this.$router.push("/");
    },
    goToCartPage() {
      this.$router.push("/cart");
    },
    goToWishListPage() {
      if (this.$store.getters.IS_VALID_USER == true) {
        this.$router.push("/wish-list");
      } else {
        this.$router.replace("/sign-in");
      }
    },
    OnLogoClick() {
      this.$router.push("/");
    },
    searchInputData() {
      this.allProducts = this.$store.getters.ALL_PRODUCTS.filter(
        (item) =>
          item.name.includes(this.searchData) ||
          item.brand.includes(this.searchData) ||
          item.type.includes(this.searchData) ||
          item.section.includes(this.searchData)
      );
      this.$store.commit("VIEW_ALL_PRODUCT", this.allProducts);
      var type = "searchResult" + Math.random() ;
      this.$router.push(`/all-products/${type}`); 
    },
    openNav() {
      this.IsSlidebar = !this.IsSlidebar;
    },
    onCategoryClick(innerItem) {
      this.allProducts = this.$store.getters.ALL_PRODUCTS.filter(
        (data) => data.section == innerItem.section || data.type == innerItem.type
      );
      const type = innerItem.name;
      this.$store.commit("VIEW_ALL_PRODUCT", this.allProducts);
      this.$router.push(`/all-products/${type}`);
      this.IsSlidebar = false;
    },
  },
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}
</style>
