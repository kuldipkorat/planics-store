import { PRODUCT_IN_CART,PRODUCT_COUNT_IN_CART } from '@/store/modules/cart/type'

  export default {
    [PRODUCT_IN_CART](state) {
      return state.cart
    },
    [PRODUCT_COUNT_IN_CART](state){
        return state.cart.length
    },
 }