<template lang="pug">
  include ../vuek/mixins.pug

  +b.main-header Тут будет заголовок
</template>

<script>
export default {
  name: 'main-header',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.main-header {

}
</style>
