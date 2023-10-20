import { createRouter, createWebHistory } from 'vue-router';
import TestPage from '@/views/TestPage.vue'
import HomePage from '@/views/HomePage.vue'

let routes_pc=[
    {
        path: '/',
        name: '',
        type:'page',
        component: TestPage,
    },
    {
      path: '/home',
      name: 'HomePage',
      type:'page',
      component: HomePage,
  }
  ]

let routes_h5 =[
  {
    path: '/h5',
    name: 'TestPage',
    type:'page',
    component: TestPage,

  }
]
let routes = [];
routes = routes_pc;
if (
  navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBroswer|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
) {
  routes = routes_h5;
}
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  router.beforeEach( (to,from)=>{
  
  });
  export default router