import { createStore } from "vuex";
import SignIn from "@/store/modules/signIn";
import Cart from "@/store/modules/cart";
import WishList from "@/store/modules/wishList";
import viewAllProduct from "@/store/modules/viewAllProduct";
import { product } from "@/data/Index";

const state = {
  allProduct: product,
};
const actions = {};
const mutations = {
  DISCOUNTED_PRICE(state, payload) {
    for (var item in payload) {
      var individualItem = payload[item];
      var discountAmt = (
        (individualItem.discount / 100) *
        individualItem.price
      ).toFixed(2);
      individualItem.afterDiscountPrice = (
        individualItem.price - discountAmt
      ).toFixed(2);
    }
  },
};
const getters = {
  ALL_PRODUCTS(state) {
    return state.allProduct;
  },
};

const modules = {
  signIn: SignIn,
  Cart: Cart,
  WishList: WishList,
  viewAllProduct: viewAllProduct,
};

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules,
});
