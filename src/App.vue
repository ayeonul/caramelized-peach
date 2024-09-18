<template>
  <div id="app" class="no-select">
    <div class="wave-gradient"></div>
    <div class="dark-veil"></div>

    <transition name="fade" mode="out-in">
      <div v-if="isNotRoute" class="fade" key="not-route-content">
        <router-view />
      </div>
    </transition>

    <transition name="slide-bounce" mode="out-in">
      <div
        v-if="!isNotRoute"
        class="slide content-container"
        key="route-content"
      >
        <div class="papers">
          <div class="stacked-paper paper-1"></div>
          <div class="stacked-paper paper-2"></div>
        </div>
        <Header ref="header" />
        <router-view class="route-view no-scrollbar" />
        <div class="spacer"></div>
      </div>
    </transition>

    <transition name="paper-slide" mode="out-in">
    <div v-show="!isNotRoute" class="backgroud-papers">
      <img src="@/assets/imgs/background/신문1.png" class="bg-paper bg-paper-1"/>
      <img src="@/assets/imgs/background/신문2.png" class="bg-paper bg-paper-2"/>
      <img src="@/assets/imgs/background/신문3.png" class="bg-paper bg-paper-3"/>
      <img src="@/assets/imgs/background/신문4.png" class="bg-paper bg-paper-4"/>
      <img src="@/assets/imgs/background/신문5.png" class="bg-paper bg-paper-5"/>
      <img src="@/assets/imgs/background/신문6.png" class="bg-paper bg-paper-6"/>
    </div>
    </transition>
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
    isNotRoute() {
      return this.$route.path == "/";
    },
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


<style scoped>
/* transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter {
  opacity: 1; /* 나타날 때는 애니메이션 없이 바로 등장 */
}

.fade-leave-to {
  opacity: 0; /* 사라질 때는 서서히 투명해짐 */
}

@keyframes slideInBounce {
  0% {
    transform: translateY(100%);
  }
  70% {
    transform: translateY(-8%); /* 살짝 위로 이동 */
  }
  100% {
    transform: translateY(0); /* 제자리로 돌아옴 */
  }
}

@keyframes slideOutBounce {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-8%); /* 위로 살짝 갔다가 */
  }
  100% {
    transform: translateY(100%); /* 아래로 사라짐 */
  }
}



/* slide 트랜지션에 적용되는 바운스 효과 */

.slide-bounce-enter-active, .slide-bounce-leave-active{
  transition-delay: 0.2s;
}
.slide-bounce-enter-active {
  animation: slideInBounce 0.3s ease-out;
}

.slide-bounce-leave-active {
  animation: slideOutBounce 0.3s ease-in;
}


.paper-slide-enter-active, .paper-slide-leave-active {
  transition: transform 0.2s ease;
}

.paper-slide-enter {
  transform: translateY(100%); /* 아래에서 시작 */
}

.paper-slide-enter-to {
  transform: translateY(0); /* 위로 올라옴 */
}

.paper-slide-leave-to {
  transform: translateY(100%); /* 아래로 내려감 */
}
</style>
