/* eslint-disable no-console */

import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import {
import './registerServiceWorker'
  ClientTable,
  Event,
  ServerTable
} from 'vue-tables-2';

Vue.use(ClientTable);
Vue.use(Event);
Vue.use(ServerTable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');