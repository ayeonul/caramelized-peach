<template>
    <div class="wave-gradient">
        <!-- if use image, use bg-main-page -->
        <div class="main-page">
            <div class="site-title-section">
                <div class="site-title">Caramelized</div>
                <div class="site-title">Peach</div>
                <div class="main-nav">
                    <router-link to="/introduce" class="main-nav-item" >Introduce</router-link>
                    <router-link to="/gallary" class="main-nav-item">Gallary</router-link>
                    <router-link to="/archive" class="main-nav-item">Archive</router-link>
                </div>
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
            const wave = document.querySelector('.wave-gradient');
            wave.style.animation = 'gradientWave 7s infinite';
        },
    },
};
</script>

<style scoped>
@import url('@/assets/styles/MainPage.css');
</style>
