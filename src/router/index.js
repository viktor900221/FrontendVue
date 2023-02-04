import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PizzenView from '../views/PizzenView.vue'
import GetraenkeView from '../views/GetraenkeView.vue'
import KuchenView from '../views/KuchenView.vue'
import CRUDView from '../views/CRUDView.vue'

const routes = [
 
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crud',
    name: 'crud',
    component: CRUDView
  },
  
  {
    path: '/pizzen',
    name: 'pizzen',
    component: PizzenView
  },
  {
    path: '/getraenke',
    name: 'getraenke',
    component: GetraenkeView
  },
  {
    path: '/kuchen',
    name: 'kuchen',
    component: KuchenView
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
