import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import routes from './routes'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// To-do check to use js-cookie
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  let { isAuthenticated } = storeToRefs(authStore)
  isAuthenticated = isAuthenticated.value
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  console.log("=============================route-index=========================");
  
console.log("Route -"+to.name);
console.log("requiresAuth -"+requiresAuth);

// Check authentication on navigation

  // Redirect to login page if not authenticated and the route requires auth
  if (requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  }

  // Redirect to home page if authenticated and the route requires guest
  // else if (requiresAuth && isAuthenticated) {
    // next({ name: 'home' })
  // }
  else{

  next()

  }

})

export default router
