<template lang="pug">
  include ../vuek/mixins.pug

  +b.screen-20-word
    +e.P.description <h3>Режим редагування <strong>20 слів</strong></h3> Вам буде виведено 20 випадкових необроблениз слова. Натисніть на ті, які ви хочете відібрати. Для решти натисніть на клавішу "Видалити".
    +e.words(v-for="word in wordsToCheck")
      Word(:word="word" :click="click")

    +e.BUTTON.button Видалити решту
</template>

<script>
import Word from './Word';

export default {
  computed: {
    wordsToCheck() {
      const wordToCh = this.$store.state.words.filter(word => word.use === 0);
      const numberOfWords = Math.min(20, wordToCh.length);

      return this.getRandom(wordToCh, numberOfWords);
    },
  },
  methods: {
    click(word) {
      console.log(this);
      this.$store.commit('SET_WORD_USE', {
        id: word.id,
        val: 1,
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
.screen-20-word {
  &__description {
    width: 60%;
    margin: 0 auto 48px;
  }

  &__words {
    margin-bottom: 48px;
  }
}
</style>
