import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import Events from '../components/Events.vue'
import Blogs from '../components/Blogs.vue'

const routes: Array<RouteRecordRaw> = [
  {
  //路由初始指向
    path: '/home',
    name: 'Home',
    component:Home,
  },
  {
  //路由初始指向
    path: '/home',
    name: 'Home',
    component:Home,
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
