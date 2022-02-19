import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue';
import Fragment from 'vue-fragment'
import Notifications from 'vue-notification';

Vue.use(BootstrapVue);
Vue.use(Fragment.Plugin)
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
