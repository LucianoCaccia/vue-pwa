import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Form from '../views/Form.vue'
// import BigHeader from '../components/BigHeader.vue'
// import Media from '../components/Media.vue'
// import HelloWorld from '../components/HelloWorld.vue'
// const msg = ['Este es el msg']

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home", */'@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about", */'../views/About.vue')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import( webpackChunkName: "about"  '../views/About.vue')
  },
  {
    path: '/form',
    name: 'Form Page',
    component: () => import(/* webpackChunkName: "form", */'../views/Form.vue')
  },
  {
    path: '/countries',
    name: 'Countries',
    component: () => import(/* webpackChunkName: "form", */'../views/Countries.vue')
  },
  {
    path: '/radioplayer',
    name: 'Radio Player',
    component: () => import(/* webpackChunkName: "form", */'../views/RadioPlayer.vue')
  }
]
const router = new VueRouter({
  routes
})
export default router
