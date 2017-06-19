import Vue from 'vue';
import Vuex from 'vuex';
import words from '../data.json';

Vue.use(Vuex);


const state = {
  words,
};

const mutations = {

};

const actions = {
  increment: ({ commit }) => commit('increment'),
};

const getters = {
  getWords(state) {
    return state.words;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
