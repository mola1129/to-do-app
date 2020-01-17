import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const emptyUser = { email: '', uid: '' };

export default new Vuex.Store({
  state: {
    user: emptyUser,
    status: false,
  },
  mutations: {
    onAuthStateChanged(state, user) {
      // user info
      state.user = (user == null) ? emptyUser : user;
    },
    onUserStatusChanged(state, status) {
      // user login status
      state.status = status;
    },
  },
  getters: {
    getUserInfo(state) {
      return state.user;
    },
    isSignedIn(state) {
      return state.status;
    },
  },
});
