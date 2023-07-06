import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Логін',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  },
  {
    path: '/forgot_password',
    name: 'Відновити пароль',
    component: () => import(/* webpackChunkName: "about" */ '../views/forgot_password/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
