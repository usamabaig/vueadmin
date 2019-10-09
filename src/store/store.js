import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      facebookAuthObject: [],
      user_id: null,
      user_token: null,
      user_object: null,
    },
    getters: {
        facebookAuthObject: state => state.facebookAuthObject,
        getUserId: state => state.user_id,
        getUserToken: state => state.user_token
    },
    mutations: {
        setFacebookAuth(state, fbAuthObject) {
          state.facebookAuthObject = fbAuthObject;
        },
        setUserToken(state, token) {
          state.user_token = token;
        },
      }
  });