<template>
  <div id="app">
    <Header v-show="showHeader"/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    Header
  },
  computed: {
    showHeader() {
      return this.$route.path !== '/';
    }
  }
};
</script>

<style>
@import url("@/assets/styles/App.css");
</style>
