import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/About',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // },
  {
    path: '/iniciosesion',
    name: 'Iniciosesion',
    component: () => import('../views/Iniciosesion.vue')
  },
  {
    path: '/busqueda',
    name: 'Busquedad',
    component: () => import('../views/Busqueda.vue')
  },
  {
    path: '/ayuda',
    name: 'Ayuda',
    component: () => import('../views/Ayuda.vue')
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: () => import('../views/Noticias.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('../views/Perfil.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
