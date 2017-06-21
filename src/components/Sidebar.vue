<template lang="pug">
  include ../vuek/mixins.pug

  +b.sidebar
    +e.top-part
      +e.H1.title Findwords v1.0
      +e.P.description Застосування для пошуку слів для брендінгу.
      MainHeader
    +e.bottom-part
      +e.stats
        +e.P.stat-index Всього слів: {{getNumberOfWords}}
        +e.P.stat-index Відібраних слів: {{getNumberOfSelectedWords}}
        +e.P.stat-index Необроблених слів: {{getNumberOfUntreatedWords}}
        +e.P.stat-index Відкинутих слів: {{getNumberOfDeletedWords}}
      +e.copyright © Kos&Boyar
</template>

<script>
import { mapGetters } from 'vuex';
import MainHeader from './MainHeader';

export default {
  computed: {
    ...mapGetters([
      'getNumberOfWords',
      'getNumberOfUntreatedWords',
      'getNumberOfSelectedWords',
      'getNumberOfDeletedWords',
    ]),
  },
  components: {
    MainHeader,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.sidebar {
  width: calc(100% - 24px);
  height: calc(100% - 24px);
  padding: 12px;
  color: white;
  text-align: left;
  overflow: auto;
  background: rgb(55,185,233);
  background: linear-gradient(to bottom, rgb(27,188,177), rgb(55,185,233));
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__title {
    font-size: 24px;
  }

  &__description {
    margin-bottom: 36px;
  }

  &__copyright {
    font-size: 12px;
    font-weight: bold;
  }
}
</style>
