import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import Events from '../components/Events.vue'
import Blogs from '../components/Blogs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home' // 重定向到 '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/:pathMatch(.*)*', // 匹配不成功时显示 Home 页面
    name: 'NotFound',
    component: Home
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
