<template lang="pug">
  include ../vuek/mixins.pug

  +b.screen-all-word
    +e.P.description <h3>Режим редагування <strong>Всі слова</strong></h3> В цьому режимі можна відфільтровувати ті слова, які точно не підходять. Для того, що б відхилити слово, достатньо просто на ньому клікнути один раз.
    +e.words(v-for="word in wordsToCheck")
      Word(:word="word" :click="click")
</template>

<script>
import Word from './Word';

export default {
  computed: {
    wordsToCheck() {
      return this.$store.state.words.filter(word => word.use === 0);
    },
  },
  methods: {
    click(word) {
      console.log(this);
      this.$store.commit('SET_WORD_USE', {
        id: word.id,
        val: 2,
      });
    },
  },
  components: {
    Word,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.screen-all-word {
  &__description {
    width: 60%;
    margin: 0 auto 48px;
  }

  &__words {
    width: 100%;
  }
}
</style>
