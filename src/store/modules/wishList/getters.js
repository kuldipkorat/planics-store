import {
  PRODUCT_COUNT_IN_WISHLIST,
  PRODUCT_IN_WISHLIST,
} from "@/store/modules/wishList/type";

export default {
  [PRODUCT_COUNT_IN_WISHLIST](state) {
    return state.wishList.length;
  },
  [PRODUCT_IN_WISHLIST](state) {
    return state.wishList;
  },
};
