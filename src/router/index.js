import { createRouter, createWebHistory } from 'vue-router';
import TestPage from '@/views/TestPage.vue'
import HomePage from '@/views/HomePage.vue'
import MyAccount from '@/views/MyAccount/index.vue'
import MyAccountDashBoard from '@/views/MyAccount/dashBoard.vue'
import MyAccountProfile from '@/views/MyAccount/profile.vue'
import MyAccountStatement from '@/views/MyAccount/statement.vue'
import MyAccountSettings from '@/views/MyAccount/settings.vue'

let routes_pc=[
    {
        path: '/',
        name: 'TestPage',
        type:'page',
        component: TestPage,
    },
    {
      path: '/home',
      name: 'HomePage',
      type:'page',
      component: HomePage,
    },
    {
      path: '/myaccount',
      name: 'MyAccount',
      type:'page',
      component: MyAccount,
      children:[
        {
          path: '',
          name: 'DashBoard',
          component:MyAccountDashBoard,
        },
        {
          path: '/Profile',
          name: 'Profile',
          component:MyAccountProfile,
        },
        {
          path: '/Statement',
          name: 'Statement',
          component:MyAccountStatement,
        },
        {
          path: '/Settings',
          name: 'Settings',
          component:MyAccountSettings,
        },
      ]
    },

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