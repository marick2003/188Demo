import { createRouter, createWebHistory } from 'vue-router';
import TestPage from '@/views/TestPage.vue'
import HomePage from '@/views/HomePage.vue'
import MyAccount from '@/views/MyAccount/index.vue'
import MyAccountDashBoard from '@/views/MyAccount/dashBoard.vue'
import MyAccountProfile from '@/views/MyAccount/profile.vue'
import MyAccountStatement from '@/views/MyAccount/statement.vue'
import MyAccountSettings from '@/views/MyAccount/settings.vue'
import Live from '@/views/GameList/live.vue'
import Lottery from '@/views/GameList/lottery.vue'
import StatementSummary from '@/views/MyAccount/history/summary.vue'
import StatementBetting from '@/views/MyAccount/history/betting.vue'
let routes_pc=[
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
          path: 'dashboard',
          name: '控制面板',
          component:MyAccountDashBoard,
        },
        {
          path: 'Profile',
          name: '个人档案',
          component:MyAccountProfile,
        },
        {
          path: 'Statement',
          name: '账户记录',
          props: (route) => ({ tab: route.query.tab || 'summarys' }), // 设置带有查询参数的tab
          component:MyAccountStatement,
        },
        {
          path: 'Settings',
          name: '设置',
          component:MyAccountSettings,
        },
      ]
    },
    {
      path: '/live',
      name: '真人荷官',
      type:'page',
      component: Live,
    },
    {
      path: '/lottery',
      name: '彩票',
      type:'page',
      component: Lottery,
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