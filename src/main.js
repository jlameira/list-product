/* eslint-disable no-console */

import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { ClientTable, Event, ServerTable } from 'vue-tables-2';
import './registerServiceWorker';

Vue.use(ClientTable);
Vue.use(Event);
Vue.use(ServerTable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
