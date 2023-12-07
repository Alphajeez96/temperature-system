import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import $toast from '@/plugins/notificationToast'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    }
  ]
})

// Route Navigation Guards
router.beforeEach((to, from, next) => {
  const accessToken = sessionStorage.getItem('accessToken')

  // Login Guard
  if (accessToken && to.name === 'Login') {
    $toast.error('You are already logged in')
    return next({ name: 'Dashboard' })
  }

  if (to.meta.requiresAuth) {
    if (accessToken) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
