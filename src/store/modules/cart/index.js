import actions from '@/store/modules/cart/actions'
import getters from '@/store/modules/cart/getters'
import mutations from '@/store/modules/cart/mutations'
import { product } from "@/data/Index";

const state = {
  cart:[],
  allProduct:product
}

export default {
    state,
    actions,
    getters,
    mutations,
  };