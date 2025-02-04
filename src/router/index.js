import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {path: "/", exact: true, redirect: "/rate-doggos"}
]

export default createRouter({
  history: createWebHistory(),
  routes
})