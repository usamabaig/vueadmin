import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      facebookAuthObject: [],
      user_id: '3',
        fb_token: '123',
    },
    getters: {
        facebookAuthObject: state => state.facebookAuthObject,
        getUserId: state => state.user_id
    },
    mutations: {
        setFacebookAuth(state, fbAuthObject) {
          state.facebookAuthObject = fbAuthObject;
        },
      }
  });