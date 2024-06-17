import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Introduce from '../views/Introduce.vue'
import ConvArch from '../views/ConvArch.vue'
import Gallary from '../views/Gallary.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: Introduce
  },
  {
    path: '/archive',
    name: 'convarch',
    component: ConvArch
  },
  {
    path: '/gallary',
    name: 'gallary',
    component: Gallary
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
