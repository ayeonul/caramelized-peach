<template>
    <div id="app" class="no-select">
        <Header v-show="isRoute" />
        <div class="content-container">
            <router-view :class="{ 'route-view': isRoute }" />
        </div>
        <Footer v-show="isRoute" />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
        Header,
        Footer,
    },
    computed: {
        isRoute() {
            return this.$route.path !== '/';
        },
    },
};
</script>

<style>
@import url('@/assets/styles/pretendard.css');
@import url('@/assets/styles/App.css');
</style>
