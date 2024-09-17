<template>
    <div class="header">
        <router-link to="/" class="logo-section">
            <div class="logo-item">Caramelized</div>
            <div class="logo-item">Peach</div>
        </router-link>
        <div class="nav">
            <router-link
                to="/introduce"
                class="nav-item"
                :class="isRoute('/introduce')"
                >Introduce</router-link
            >
            <router-link
                to="/gallary"
                class="nav-item"
                :class="isRoute('/gallary')"
                >Gallary</router-link
            >
            <router-link
                to="/archive"
                class="nav-item"
                :class="isRoute('/archive')"
                >Archive</router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        isRoute(targetRoute) {
            if (this.$route.path === targetRoute) {
                return 'is-active';
            }
            return '';
        },
    },
};
</script>

<style>
@import url('@/assets/styles/Header.css');
</style>
