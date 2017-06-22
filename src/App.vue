<template lang="pug">
  include vuek/mixins.pug

  +b.app#app
    +e.sidebar
      Sidebar
    +e.content(:class="{app__content_withpadding: $store.state.displayApproved}")
      WordsView(:words="getWords", :numberOfWords="$store.state.displayMode")
    +e.approved-words(v-if="$store.state.displayApproved")
      Wordlist(:words="getWords", :mode="1")
    //- Preloader
</template>

<script>
import { mapGetters } from 'vuex';
import Sidebar from './components/Sidebar';
import Wordlist from './components/Wordlist';
import Preloader from './components/Preloader';
import WordsView from './components/WordsView';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'getWords',
      'getMode',
    ]),
  },
  components: {
    Sidebar,
    Wordlist,
    Preloader,
    WordsView,
  },
};
</script>

<style lang="scss">
html, body {
  position: relative;
  margin: 0;
  padding: 0;
  min-height: 100%;
}

.app {
  $sidebar-width: 250px;
  $approved-words-width: $sidebar-width;

  position: relative;
  min-height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: auto;
  // margin-top: 24px;

  &__sidebar {
    position: fixed;
    width: $sidebar-width;
    height: 100vh;
    top: 0;
    left: 0;
  }

  &__content {
    padding-left: $sidebar-width;

    &_withpadding {
      padding-right: $approved-words-width;
    }
  }

  &__words {
    display: flex;
    width: 100%;
  }

  &__words-list {
    flex: 1;
    width: calc(33.333% - 24px);
    margin: 0 12px;
  }

  &__approved-words {
    position: fixed;
    top: 0;
    right: 0;
    width: $approved-words-width;
    height: 100vh;
    background-color: #eee;
  }
}
</style>
