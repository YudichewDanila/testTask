import { createRouter, createWebHistory  } from 'vue-router'
import main_page from '../page/mainpag.vue'

const routes = [
    {
        path: '/',
        name: 'main_page',
        component: main_page,
    },
   
]
const router = createRouter({
    history: createWebHistory(),
    routes
  })
 
export default router
