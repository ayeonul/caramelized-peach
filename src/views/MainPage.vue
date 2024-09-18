<template>
  <!-- if use image, use bg-main-page -->
  <div class="main-page">
    <div class="site-title-section">
      <div class="site-title">Caramelized</div>
      <div class="site-title">Peach</div>
      <div class="main-nav">
        <router-link to="/introduce" class="main-nav-item"
          >Introduce</router-link
        >
        <router-link to="/gallary" class="main-nav-item">Gallary</router-link>
        <router-link to="/archive" class="main-nav-item">Archive</router-link>
        <span
          class="main-nav-item"
          @click="
            openSite(
              'https://amused-letter-39e.notion.site/Caramelized-Peach-1057274502d0809689d2d2ad0f56400f?pvs=74'
            )
          "
          >Develop-Note<unicon name="link" width="17" height="17" class="icon" fill="#fff"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      const wave = document.querySelector(".wave-gradient");
      wave.style.animation = "gradientWave 7s infinite";
    },
    openSite(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
@import url("@/assets/styles/MainPage.css");
</style>
