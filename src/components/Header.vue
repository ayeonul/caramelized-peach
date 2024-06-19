<template>
    <div class="header no-select route-view">
        <router-link to="/" class="logo-section">
            <div class="logo-item">Caramelized</div>
            <div class="logo-item">Peach</div>
        </router-link>
        <div class="nav">
            <router-link to="/introduce" class="nav-item" :class="isRoute('/introduce')">Introduce</router-link>
            <router-link to="/gallary" class="nav-item" :class="isRoute('/gallary')">Gallary</router-link>
            <router-link to="/archive" class="nav-item" :class="isRoute('/archive')">Archive</router-link>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        isRoute(targetRoute) {
            const base = process.env.NODE_ENV === 'production' ? '/caramelized-peach' : '';
            if (this.$route.path === `${base}${targetRoute}`) {
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
