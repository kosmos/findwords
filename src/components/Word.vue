<template lang="pug">
  include ../vuek/mixins.pug

  +b.word(v-on:click="click(word)", :class="{ word_bad: word.use === 2 }") {{word.word}}
</template>

<script>
export default {
  name: 'word',
  props: {
    word: {
      type: Object,
    },
    mode: Number,
    click: Function,
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

    &_bad {
      background-color: #ddd;
    }
}
</style>
