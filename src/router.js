import Root from '@/views/Root.vue';
import NotFound from '@/views/NotFound.vue';

import Login from '@/views/Login.vue';
import Page1 from '@/views/NowMonth.vue';
import Page2 from '@/views/CompanyList.vue';
import Page3 from '@/views/CompanyAdd.vue';
import Page4 from '@/views/PointManagement.vue';
import Page5 from '@/views/SalesInfo.vue';

import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

const requireAuth = (from, to, next) => {
  if (!_.isEmpty(store.state.franchise)) return next();
  next('/');
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/franchise',
      name: 'franchise',
      beforeEnter: requireAuth,
      redirect: '/franchise/now',
      component: Root,
      children: [
        { path: '/franchise/now', component: Page1 },
        { path: '/franchise/list', component: Page2 },
        { path: '/franchise/add', component: Page3 },
        { path: '/franchise/point', component: Page4 },
        { path: '/franchise/sales', component: Page5 },
      ],
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
    },
  ],
});
