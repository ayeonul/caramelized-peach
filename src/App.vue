<template>
  <div id="app">
    <Header v-show="isRoute"/>
    <router-view :class="{'route-view': isRoute}"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    Header
  },
  computed: {
    isRoute() {
      return this.$route.path !== '/';
    },
  }
};
</script>

<style>
@import url("@/assets/styles/App.css");
</style>
