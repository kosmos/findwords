/*eslint-disable*/
export const getWords = state => state.words;

export const getNumberOfWords = state => state.words.length;

export const getNumberOfUntreatedWords = state => state.words.filter(item => item.use === 0).length;

export const getNumberOfSelectedWords = state => state.words.filter(item => item.use === 1).length;

export const getNumberOfDeletedWords = state => state.words.filter(item => item.use === 2).length;

export const isWiki = state => state.displayWiki;

export const getMode = state => state.displayMode;
/*eslint-enable*/
