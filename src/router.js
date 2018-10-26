import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import _ from 'lodash';

import Root from '@/views/Root.vue';

import Login from '@/views/Login.vue';
import Page1 from '@/views/NowMonth.vue';
import Page2 from '@/views/CompanyList.vue';
import Page3 from '@/views/CompanyAdd.vue';
import Page4 from '@/views/PointManagement.vue';
import Page5 from '@/views/SalesInfo.vue';

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  const isAuth = true;
  if (isAuth) return next();
  else next('/');
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      redirect: '/franchise'
    },
    {
      path: '/franchise',
      name: 'franchise',
      beforeEnter: requireAuth(),
      redirect: '/franchise/now',
      component: Root,
      children: [
        { path: '/franchise/now', component: Page1 },
        { path: '/franchise/list', component: Page2 },
        { path: '/franchise/add', component: Page3 },
        { path: '/franchise/point', component: Page4 },
        { path: '/franchise/sales', component: Page5 }
      ]
    }
  ]
})
