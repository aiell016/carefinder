import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Illinois from './views/Illinois.vue'

import Wisconsin from './views/Wisconsin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // redirect: "/home",
      name: 'home',
      component: Home
    },

    {
      path: '/wisconsin',
      name: 'wisconsin',
      component: Wisconsin
    },
  

    {
      path: '/illinois',
      name: 'illinois',
      component: Illinois
    }


  ]
})
