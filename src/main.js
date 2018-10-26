import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueSemantic from 'semantic-ui-vue';
import VeeValidate from 'vee-validate';
import _ from 'lodash';
import moment from 'moment';

import 'semantic-ui-css/semantic.min.css';
import '@/assets/css/base.css';
import '@/assets/css/layout.css';

global._ = _;
global.moment = moment;

Vue.config.productionTip = false;

Vue.use(VueSemantic);
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
