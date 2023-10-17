import { createRouter, createWebHistory } from 'vue-router';
import TestPage from '@/views/TestPage.vue'

  let routes = [];
  routes = routes_pc;
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBroswer|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    routes = routes_h5;
  }
  let routes_pc=[
    {
        path: '/',
        name: 'TestPage',
        component: TestPage,

    }
  ]
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'TestPage',
        component: TestPage,
      }
    ]
  })

  router.beforeEach( (to,from)=>{
  
  });
  export default router