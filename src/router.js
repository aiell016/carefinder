import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Skills from './views/Skills.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'

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
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },

    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },

    {
      path: '/',
      name: 'home',
      component: Home
    }





  ]
})
