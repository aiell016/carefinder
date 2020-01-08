//imports all the comonents for the router view
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'

import List from '../pages/list.vue'
import Find from '../pages/find.vue'
import Edit from '../pages/edit.vue'


Vue.use(Router)

//makes the router with routes
const router = new Router({

    routes: [

        {
            path: '/',
            redirect: '/home'
        },




        {
            path: '/find',
            name: 'find',
            component: Find,
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

        },

        {
            path: '/list',
            name: 'list',
            component: List,
            meta: {
                requiresAuth: false //this tag means you need to be logged in to see it
            }

        },


        {
            path: '/edit',
            name: 'edit',
            component: Edit,
            meta: {
                requiresAdmin: true //this tag means you need to be Admin to edit this
            }

        }

        // add more routes to views here




    ]

})

export default router //send it to the router view thing

// Done done
