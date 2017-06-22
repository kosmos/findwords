<template lang="pug">
  include ../vuek/mixins.pug

  +b.word(v-on:click="clicked", :class="{ word_bad: word.use === 2, word_good: word.use === 1}") {{word.word}}
</template>

<script>
export default {
  name: 'word',
  props: {
    word: {
      type: Object,
    },
  },
  methods: {
    clicked(event) {
      if (event.shiftKey) {
        this.$emit('word-change', this.word.id, 1);
      } else {
        this.$emit('word-change', this.word.id, 2);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.word {
    padding: 2px 4px;
    margin: 2px;
    background-color: aqua;
    border-radius: 3px;
    float:left;
    cursor: pointer;
    user-select: none;

    &_bad {
      background-color: #ddd;
    }

    &_good {
      background-color: rgb(55,185,233);
    }
}
</style>
