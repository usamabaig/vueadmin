import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    // state
    state: {
      facebookAuthObject: [],
      user_id: 3,
      user_token: null,
      user_object: null,
      agency_ad_account_id: null
    },
    // getter
    getters: {
        facebookAuthObject: state => state.facebookAuthObject,
        getUserId: state => state.user_id,
        getUserToken: state => state.user_token,
        getAdAccountId: state => state.agency_ad_account_id
    },
    // commit
    mutations: {
        setFacebookAuth(state, fbAuthObject) {
          state.facebookAuthObject = fbAuthObject;
        },
        setUserToken(state, token) {
          state.user_token = token;
        },
        setadAccountId(state, ad_account_id) {
          state.agency_ad_account_id = ad_account_id;
        }
      }
  });