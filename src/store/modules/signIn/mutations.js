import { GET_TEMP_EMAIL, CHANGED_PASSWORD,NEW_USER_DATA,VALID_USER,LOG_OUT } from '@/store/modules/signIn/type'

export default {
   [GET_TEMP_EMAIL](state, payload) {
      state.tempEmail = payload
   },
   [CHANGED_PASSWORD](state, payload) {
      state.userInfo.password = payload
   },
   [NEW_USER_DATA](state, payload) {
      state.userInfo.email = payload.email;
      state.userInfo.password = payload.password
   },
   [VALID_USER](state){
      state.isValidUser = true
   },
   [LOG_OUT](state){
      state.isValidUser = false

   }


}