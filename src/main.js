import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vuetify from './plugins/vuetify';

import ApiService from "./service/api.service";
import auth from "./common/auth";

Vue.config.productionTip = false

ApiService.init();

router.beforeEach((to, from, next) => {
  if (!['/', '/login'].includes(to.path) && !auth.getCurrentUser()){ 
    next({ path: '/' })
  }
  else next()
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
