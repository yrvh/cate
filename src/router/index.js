import Vue from 'vue'
import VueRouter from 'vue-router'

import main from './main'

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象==============
const routes = [
  {
    path: '*',   // 当路由没有匹配的组件时,  则跳转到login页面
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('views/Login')
  },
  main
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 3. 导出
export default router

