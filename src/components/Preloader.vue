<template lang="pug">
  include ../vuek/mixins.pug

  +b.preloader(:class="{ preloade_risLoaded: isLoaded }") loading...
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'preloader',
  computed: {
    ...mapGetters([
      'isLoaded',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1000;
  color: white;

  &_isLoaded {
    z-index: -10;
  }
}
</style>
