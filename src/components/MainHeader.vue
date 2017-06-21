<template lang="pug">
  include ../vuek/mixins.pug

  +b.main-header
    +e.INPUT.file-input(type="file" @change="openFile")
    +e.FORM.options
      +e.INPUT.mode(type="radio" name="displayMode" value="1" v-model="displayMode")
      | Випадкове слово
      br
      +e.INPUT.mode(type="radio" name="displayMode" value="2" v-model="displayMode")
      | 20 випадкових слів
      br
      +e.INPUT.mode(type="radio" name="displayMode" value="3" v-model="displayMode")
      | Всі слова
      br
      br
      +e.INPUT.wiki(type="checkbox", name="approve", v-model="isApprove")
      | Показувати відібрані слова
      br
      +e.INPUT.wiki(type="checkbox", name="wiki", v-model="isWiki")
      | Показувати Wiki
    +e.BUTTON.button(@click="saveFile") Зберегти слова
</template>

<script>
import { v4 } from 'node-uuid';
import FileSaver from 'file-saver';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      file: null,
    };
  },
  computed: {
    displayMode: {
      get() {
        return this.$store.state.displayMode;
      },
      set(val) {
        this.$store.commit('SET_DISPLAY_MODE', val);
      },
    },
    isApprove: {
      get() {
        return this.$store.state.displayApproved;
      },
      set(val) {
        this.$store.commit('TOGGLE_APPROVED', val);
      },
    },
    isWiki: {
      get() {
        return this.$store.state.displayWiki;
      },
      set(val) {
        this.$store.commit('TOGGLE_WIKI', val);
      },
    },
  },
  methods: {
    ...mapActions([
      'getAllProducts',
    ]),
    // Открытие нового файла
    openFile(e) {
      const vm = this;
      this.file = e.target.files[0];
      if (!this.file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = function (e) {
        const words = JSON.parse(e.target.result);
        /*eslint-disable*/
        words.forEach(function(item) {
          item.id = item.id || v4();
        });
        /*eslint-enable*/
        vm.$store.dispatch('getAllProducts', words);
      };
      reader.readAsText(this.file);
    },
    saveFile() {
      console.log('save');
      console.log(this.$store.state.words);
      const blob = new Blob([JSON.stringify(this.$store.state.words)], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(blob, 'data.json');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.main-header {
  &__file-input {
    display: block;
    margin: 12px 0 36px;
  }

  &__mode {
    // display: block;
    margin: 12px 6px 12px 0;
  }

  &__button {
    display: block;
    margin: 12px 0;
  }

  &__stats {
    margin-bottom: 36px;
  }
}
</style>
