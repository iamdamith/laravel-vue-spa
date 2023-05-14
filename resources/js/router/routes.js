import Home from './../views/Home.vue'
import Dashboard from './../views/Dashboard.vue'
import Login from './../views/auth/Login.vue'
import Register from './../views/auth/Register.vue'
// import Register from '@/views/Register.vue'
// import NotFound from '@/views/NotFound.vue'


export default [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
          layout: 'BaseLayout',
          requiresAuth: false,
        },
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          layout: 'DashboardLayout',
          requiresAuth: true
        }
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          layout: 'AuthLayout',
          requiresAuth: false,
        },
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
          layout: 'AuthLayout',
          requiresAuth: false,
        },
      },
    //   {
    //     path: '/register',
    //     name: 'Register',
    //     component: Register,
    //     meta: {
    //       requiresGuest: true
    //     }
    //   },
    //   {
    //     path: '/:catchAll(.*)',
    //     name: 'NotFound',
    //     component: NotFound
    //   }
]