import * as types from './mutation-types';

export default {
  [types.LOAD_WORDS](state, { words }) {
    state.words = words;
  },

  [types.TOGGLE_WIKI](state, val) {
    state.displayWiki = val;
  },

  [types.SET_DISPLAY_MODE](state, val) {
    state.displayMode = val;
  },

  [types.TOGGLE_APPROVED](state, val) {
    state.displayApproved = val;
  },

  [types.SET_WORD_USE](state, { id, val }) {
    state.words.map((word) => {
      if (word.id === id) word.use = val;
      return word;
    });
  },
};
