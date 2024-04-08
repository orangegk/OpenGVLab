import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home' // 重定向到 '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('../views/home/index.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ()=>import('../views/projects/index.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: ()=>import('../views/events/index.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: ()=>import('../views/blogs/index.vue')
  },
  {
    path: '/jointTraining',
    name: 'JointTraining',
    component: ()=>import('../views/jointTraining/index.vue')
  },
  // {
  //   path: '/:pathMatch(.*)*', // 匹配不成功时显示 Home 页面
  //   name: 'NotFound',
  //   component: Home
  // }
];


const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
