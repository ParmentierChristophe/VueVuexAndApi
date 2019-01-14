import Vue from 'vue'
import Vuex from 'vuex'
import {
  getPays
} from './api/pays';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pays: [],
    loading: true
  },

  mutations: {
    searchPays(currentState, pays) {
      currentState.pays = pays;
    },
    changeLoadingState(currentState, loading) {
      currentState.loading = loading;
    }
  },

  getters: {
    pays: state => state.pays
  },

  actions: {
    async fetchPays({
      commit
    }) {
      const pays = await getPays();
      commit("searchPays", pays);
      commit("changeLoadingState", false);
    }

    // fetchPays({
    //   commit
    // }) {
    //   return getPays()
    //     .then((pays) => {
    //       commit("searchPays", pays);
    //     });
    // }
  }
})