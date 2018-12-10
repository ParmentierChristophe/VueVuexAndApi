import Vue from 'vue'
import Vuex from 'vuex'
import {
  getPays
} from './api/pays';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pays: []
  },

  mutations: {
    searchPays(currentState, pays) {
      currentState.pays = pays;
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
    }
  }
})