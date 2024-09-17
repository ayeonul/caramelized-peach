<template>
  <div id="app" class="no-select">
    <div class="wave-gradient"></div>
    <div class="dark-veil"></div>

    <div
      :class="{ 'content-container': isRoute }"
      ref="contentContainer"
    >
      <div class="papers" v-show="isRoute">
        <div class="stacked-paper paper-1"></div>
        <div class="stacked-paper paper-2"></div>
      </div>
      <Header ref="header" v-show="isRoute" />
      <router-view :class="{ 'route-view no-scrollbar': isRoute }" />
      <div class="spacer" v-show="isRoute "></div>
      <!-- <Footer ref="footer" v-show="isRoute" /> -->
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    isRoute() {
      return this.$route.path !== "/";
    },
    isNotIntroduce(){
      return this.$route.path !== "/introduce";
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      const wave = document.querySelector(".wave-gradient");
      wave.style.animation = "gradientWave 7s infinite";
    },
  },
};
</script>

<style>
@import url("@/assets/styles/pretendard.css");
@import url("@/assets/styles/App.css");
</style>
