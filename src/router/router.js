import { createRouter, createWebHistory } from 'vue-router'
import { isLoggedIn } from "../state/login";

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  },
  {
    path: '/login',
    name: 'Логін',
    meta: {
      requiresAuth: false
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  },
  {
    path: '/forgot_password',
    name: 'Відновити пароль',
    meta: {
      requiresAuth: false
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/forgot_password/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    meta: {
      requiresAuth: false
    },
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn.value) {
    next({ name: 'Логін' })
  } else {
    next()
  }
})

export default router
