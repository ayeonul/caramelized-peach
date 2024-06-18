<template>
    <div class="footer-wave-gradient">
    </div>
</template>

<script>
export default {
    mounted() {
        this.startAnimation();
    },
    methods: {
        startAnimation() {
            const wave = document.querySelector('.footer-wave-gradient');
            wave.style.animation = 'gradientWave 7s infinite';
        },
    },
};
</script>

<style scoped>

@keyframes gradientWave {
  0% {
    background-position: 30% 50%;
  }

  50% {
    background-position: 70% 50%;
  }

  100% {
    background-position: 30% 50%;
  }
}

.footer-wave-gradient {
  width: 100%;
  height: 100px;
  background: linear-gradient(30deg, #cea346 40%, #ff968f 60%);
  background-size: 200% 200%;
  position: relative;
  overflow: hidden;

  margin-top: auto;
}

.footer-wave-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0 C 25 100 75 0 100 100 L 100 0 Z" /></svg>');
  mask-size: cover;
  animation: gradientWave 7s infinite;
}


</style>