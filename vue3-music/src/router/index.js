import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend'
import Seach from '@/views/search'
import Singer from '@/views/singer'
import Toplist from '@/views/top-list'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/search',
    component: Seach
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: Toplist
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
