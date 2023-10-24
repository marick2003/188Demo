import { createRouter, createWebHistory } from 'vue-router';
import TestPage from '@/views/TestPage.vue'
import HomePage from '@/views/HomePage.vue'
import MyAccount from '@/views/MyAccount/index.vue'
import MyAccountDashBoard from '@/views/MyAccount/dashBoard.vue'
import MyAccountProfile from '@/views/MyAccount/profile.vue'
import MyAccountStatement from '@/views/MyAccount/statement.vue'
import MyAccountSettings from '@/views/MyAccount/settings.vue'
import StatementSummary from '@/views/MyAccount/history/summary.vue'
import StatementBetting from '@/views/MyAccount/history/betting.vue'
let routes_pc=[
    // {
    //     path: '/',
    //     name: '',
    //     type:'page',
    //     component: TestPage,
    // },
    {
      path: '/',
      name: 'HomePage',
      type:'page',
      component: HomePage,
    },
    {
      path: '/myaccount',
      name: 'MyAccount',
      type:'page',
      redirect:'/myaccount/dashboard',
      component: MyAccount,
      children:[
        {
          path: '/myaccount/dashboard',
          name: '控制面板',
          component:MyAccountDashBoard,
        },
        {
          path: '/myaccount/Profile',
          name: '个人档案',
          component:MyAccountProfile,
        },
        {
          path: '/myaccount/Statement',
          name: '账户记录',
          redirect:'/myaccount/Statement/summary',
          component:MyAccountStatement,
          children:[
              {
                path:'/myaccount/Statement/summary',
                name: '摘要',
                component:StatementSummary
              },
              {
                path:'/myaccount/Statement/betting-history',
                name: '投注记录',
                component:StatementBetting
              },
          ]
        },
        {
          path: '/myaccount/Settings',
          name: '设置',
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