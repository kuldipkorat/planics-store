import { VIEW_ALL_PRODUCT } from "@/store/modules/viewAllProduct/type";

export default {
  [VIEW_ALL_PRODUCT](state, payload) {
    state.viewAllProduct = [];
    state.viewAllProduct = payload;
  },
};
