import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/main',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import(/* webpackChunkName: "about" */ '../views/Home'),
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About'),
            },
        ],
    },
    {
        path: '/child01/index',
        name: 'Main',
        component: Main,
    },
    {
        path: '/child01/about',
        name: 'Main',
        component: Main,
    },
    {
        path: '/child02/index',
        name: 'Main',
        component: Main,
    },
    {
        path: '/child02/view',
        name: 'Main',
        component: () => import('../views/Child02'),
    },
]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    base: '',
    routes,
})

export default router
