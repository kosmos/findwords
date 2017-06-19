<template lang="pug">
  include vuek/mixins.pug

  +b.app#app
    +e.header
      MainHeader
    +e.words
      +e.words-list
        Wordlist(:words="getWords", :mode="0")
      +e.words-list
        Wordlist(:words="getWords", :mode="1")
      +e.words-list
        Wordlist(:words="getWords", :mode="2")
</template>

<script>
import { mapGetters } from 'vuex';
import MainHeader from './components/MainHeader';
import Wordlist from './components/Wordlist';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'getWords',
    ]),
  },
  components: {
    MainHeader,
    Wordlist,
  },
};
</script>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 24px;

  &__words {
    display: flex;
    width: 100%;
  }

  &__words-list {
    flex: 1;
    width: calc(33.333% - 24px);
    margin: 0 12px;
  }
}
</style>
