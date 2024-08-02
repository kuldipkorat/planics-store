import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  BUY_PRODUCT,
  ADD_TO_CART_FROM_WISHLIST,
  LOG_OUT
} from "@/store/modules/cart/type";

export default {
  [ADD_TO_CART](state, payload) {
    //  state.cart.push(payload)
    let item = state.cart.find((i) => i.id === payload.id);
    if (item) {
      item.quantity++;
    } else {
      state.cart.push({ ...payload, quantity: 1 });
    }
  },
  [ADD_TO_CART_FROM_WISHLIST](state, payload) {
    //  state.cart.push(payload)
    let product = state.cart.find((i) => i.id === payload.id);
    if (product) {
      if(product.stock > product.quantity){
        product.quantity++;
      }
    } else {
      if(payload.stock > 0){
        state.cart.push({ ...payload, quantity: 1 });
      }
    }
  },
  [REMOVE_FROM_CART](state, payload) {
    let item = state.cart.find((i) => i.id === payload);
    if (item) {
      state.cart = state.cart.filter((i) => i.id !== payload);
    }
  },
  [BUY_PRODUCT](state, payload) {
    var productItem = payload.map((productItem) => productItem.id);
    for (var id in productItem) {
      //find item from main data
      var itemProduct = state.allProduct.find(
        (data) => data.id === productItem[id]
      );
      //remove stock from main data
      itemProduct.stock = payload[id].stock - payload[id].quantity;
    }
    state.cart = [];
  },
  [LOG_OUT](state){
    state.cart = [];
  }
};
