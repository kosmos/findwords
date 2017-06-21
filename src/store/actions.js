/*eslint-disable*/
import * as types from './mutation-types';


export const getAllProducts = ({ commit }, words) => {
  commit(types.LOAD_WORDS, { words });
};
/*eslint-enable*/
