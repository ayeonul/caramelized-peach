import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd';
import { uniTimes, uniLink, uniEnvelopeHeart } from 'vue-unicons/dist/icons';

Unicon.add([uniTimes, uniLink, uniEnvelopeHeart]);
Vue.use(Unicon);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
