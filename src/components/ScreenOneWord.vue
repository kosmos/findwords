<template lang="pug">
  include ../vuek/mixins.pug

  +b.screen-one-word
    +e.P.description <h3>Режим редагування <strong>Одне слів</strong></h3>Вам буде виведено випадкове слово із числа ще не оброблених. Натисніть віподвіну клавішу для того, що б відібрати його або відкинути.
    +e.word(v-if="word")
      Word(:word="word" :click="click")
    +e.buttons(v-if="word")
      +e.BUTTON.button(@click="reject") Відхилити
      +e.BUTTON.button(@click="approve") Обрати
</template>

<script>
import Word from './Word';

export default {
  props: {
    words: {
      type: Array,
    },
  },
  computed: {
    word() {
      const wordsToCheck = this.words.filter(word => word.use === 0);
      return wordsToCheck[Math.floor(Math.random() * wordsToCheck.length)];
    },
  },
  methods: {
    click() {
    },
    approve() {
      this.$store.commit('SET_WORD_USE', {
        id: this.word.id,
        val: 1,
      });
    },
    reject() {
      this.$store.commit('SET_WORD_USE', {
        id: this.word.id,
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
.screen-one-word {
  &__description {
    width: 60%;
    margin: 0 auto 48px;
  }

  &__word {
    display: inline-block;
    // width: 100%;
    // height: auto;
    text-align: center;
  }

  &__button {
    margin-right: 24px;
  }
}
</style>
