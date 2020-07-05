import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.use(BootstrapVue);
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
