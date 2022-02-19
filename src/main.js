import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue';
import Fragment from 'vue-fragment'
import Notifications from 'vue-notification';
import Skeleton from 'vue-loading-skeleton';
import JwPagination from 'jw-vue-pagination';
import VueTheMask from 'vue-the-mask';

Vue.use(Skeleton);
Vue.use(BootstrapVue);
Vue.use(Fragment.Plugin)
Vue.use(Notifications)
Vue.component('jw-pagination', JwPagination);
Vue.use(VueTheMask);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
