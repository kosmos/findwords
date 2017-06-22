<template lang="pug">
  include ../vuek/mixins.pug

  +b.words-view
    +e.P.description <h3>Режим редагування <strong>{{numberOfWords}} слів</strong></h3> Звичайний клік на слові - видаляє слово, клік із зажатою клавішою Shift додає слово до можливих варіантів.
    +e.BUTTON.button(@click="init") Оновити
    br
    +e.P.words
      template(v-for="word in wordsToDisplay")
        Word(:word="word" @word-change="wordChange")
</template>

<script>
import Word from './Word';

export default {
  props: {
    words: {
      type: Array,
    },
    numberOfWords: String,
  },
  data() {
    return {
      flag: true,
      wordsOnDisplay: [],
      numberOfWordsToDisplay: 0,
      reGetWords: false,
      // wordsToDisplay: this.wordsToCheck(),
    };
  },
  computed: {
    wordsToDisplay() {
      let wordsOnDisplay = this.wordsOnDisplay;
      const number = this.numberOfWordsToDisplay;
      const flag = this.reGetWords;
      if (wordsOnDisplay.length === 0 ||
        wordsOnDisplay.filter(word => word.use === 0).length === 0 ||
        number !== parseInt(this.numberOfWords, 10) ||
        flag) {
        this.wordsOnDisplay = wordsOnDisplay;
        this.reGetWords = false;
        wordsOnDisplay = this.wordsToCheck();
      }
      this.wordsOnDisplay = wordsOnDisplay;
      this.numberOfWordsToDisplay = parseInt(this.numberOfWords, 10);
      return wordsOnDisplay;
    },
    numberOfWordsToDisplayInt() {
      return parseInt(this.numberOfWords, 10);
    },
  },
  methods: {
    init() {
      this.reGetWords = true;
    },
    wordsToCheck() {
      const wordToCh = this.words.filter(word => word.use === 0);
      const numberOfWords = Math.min(parseInt(this.numberOfWords, 10), wordToCh.length);
      return this.getRandom(wordToCh, numberOfWords);
    },
    wordChange(wordId, mode) {
      this.$store.commit('SET_WORD_USE', {
        id: wordId,
        val: mode,
      });
    },
    getRandom(arr, m) {
      /*eslint-disable*/
      let n = m;
      const result = new Array(n);
      let len = arr.length;
      const taken = new Array(len);
      if (n > len) {
        throw new RangeError('getRandom: more elements taken than available');
      }
      while (n--) {
        const x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
      }
      return result;
      /*eslint-enable*/
    },
  },
  components: {
    Word,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.words-view {
  padding: 24px;
  text-align: center;

  &__description {
    width: 60%;
    margin: 0 auto 48px;
  }

  &__words {
    height: auto;
    margin-bottom: 48px;
  }
}
</style>
