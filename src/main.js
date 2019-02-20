import Vue from 'vue'

import App from './App.vue'

import VeeValidate from 'vee-validate';
import routers from './routes';

Vue.use(VeeValidate);


Vue.config.productionTip = false


new Vue({
  el : "#app",
  router: routers,
  render: h => h(App),
})
