/*eslint-disable*/
import * as types from './mutation-types';

const actions = {
  getAllProducts({ commit }, words) {
    commit(types.LOAD_WORDS, { words });
  },
};

const mutations = {
  [types.LOAD_WORDS](state, { words }) {
    state.words = words;
  },
};
/*eslint-enable*/
