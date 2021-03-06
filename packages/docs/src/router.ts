import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from './pages/AppLayout.vue'
import Index from "./pages/Index.vue";
import menus from './menus'

export const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: [
    { 
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/component',
      name: 'Layout',
      component: AppLayout,
      redirect: '/button',
      children: menus.reduce((prev, item) => {
        const _routes = item.items.map(i => {
          console.log(i.name)
          return {
            path: `/${i.name.toLowerCase()}`,
            name: i.name,
            component: i.component,
          }
        })
        prev.push(..._routes)
        return prev
      }, [] as RouteRecordRaw[]),
    },
  ],
})
