import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vuetify from './plugins/vuetify';

import ApiService from "./common/api.service";

Vue.config.productionTip = false

ApiService.init();

// Ensure we checked user auth before each page load.
router.beforeEach((to, from, next) => {
  console.log("waiting for auth system");
  next();
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
