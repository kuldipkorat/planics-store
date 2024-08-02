import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  LOG_OUT,
} from "@/store/modules/wishList/type";

export default {
  [ADD_TO_WISHLIST](state, payload) {
    let item = state.wishList.find((i) => i.id === payload.id);
    if (item) {
      item.wishListCount = 1;
    } else {
      state.wishList.push({ ...payload, wishListCount: 1 });
    }
  },
  [REMOVE_FROM_WISHLIST](state, payload) {
    let item = state.wishList.find((i) => i.id === payload.id);
    if (item) {
      state.wishList = state.wishList.filter((i) => i.id !== payload.id);
    }
  },
  [LOG_OUT](state) {
    state.wishList = [];
  },
};
