//imports all the comonents for the router view
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Login from '../pages/login.vue'


Vue.use(Router)

//makes the router with routes
const router = new Router({
    
    routes: [

    {
      path: '/',
      redirect: '/home'
    },


    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresAuth: false //this tag means you need to be logged in to see it
        }

    },

        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: false //this tag means you need to be logged in to see it
            }

        },

        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                requiresAuth: false //this tag means you need to be logged in to see it
            }

        }

        // add more routes to views here


    
    
    ]

})

export default router //send it to the router view thing

// Done done
