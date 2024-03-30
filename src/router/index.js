import { createRouter, createWebHistory } from 'vue-router'
import AllVR from '../views/AllVR.vue'
import VR from '../views/VR.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllVR
    },
    {
      path: '/VR/:id',
      name: 'VR',
      component: VR
    }
  ]
})

export default router
