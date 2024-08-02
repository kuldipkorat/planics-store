import getters from '@/store/modules/signIn/getters'
import actions from '@/store/modules/signIn/actions'
import mutations from '@/store/modules/signIn/mutations'

const state = {
  userInfo: {
    email: "",
    password: ""
  },
  tempEmail: "",
  isValidUser:false
}

export default {
  state,
  actions,
  getters,
  mutations,
};