<template lang="pug">
  include ../vuek/mixins.pug

  +b.word-list
    +e.H2.header {{header}}
    +e.P.stats Всього слів: {{wordsToDisplay.length}}
    template(v-for="word in wordsToDisplay")
       Word(:word="word")
    +e.clearBoth
</template>

<script>
import Word from './Word';

export default {
  name: 'word-list',
  props: {
    words: {
      type: Array,
    },
    mode: Number,
  },
  computed: {
    header() {
      let title = '';
      switch (this.mode) {
        case 0:
          title = 'Не оброблені';
          break;
        case 1:
          title = 'Можливо';
          break;
        default:
          title = 'Відкинуті';
          break;
      }
      return title;
    },
    wordsToDisplay() {
      return this.words.filter(word => word.use === this.mode);
    },
  },
  components: {
    Word,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.word-list {
  padding: 12px;
  background-color: #eee;

  &__header {
    margin: 0;
  }

  &__stats {
    margin-top: 0;
    margin-bottom: 12px;
  }

  &__clearBoth {
    clear: both;
  }
}
</style>
