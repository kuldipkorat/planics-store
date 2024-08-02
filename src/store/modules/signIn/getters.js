import { GET_TEMP_EMAIL, USER_INFO_EMAIL, USER_INFO_PASSWORD,IS_VALID_USER } from '@/store/modules/signIn/type'

export default {
  [GET_TEMP_EMAIL](state){
    return state.tempEmail    
  },
  [USER_INFO_EMAIL](state){
    return state.userInfo.email
  },
  [USER_INFO_PASSWORD](state){
    return state.userInfo.password
  },
  [IS_VALID_USER](state){
    return state.isValidUser
  }
}