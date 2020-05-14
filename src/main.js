import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueMask from 'v-mask'
import VueRouter from 'vue-router'
import vco from "v-click-outside"
import router from './router/index'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMeta from 'vue-meta';

import "@/design/index.scss";
import moment from 'moment';
import VueSweetalert2 from 'vue-sweetalert2';
import store from '@/state/store'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(vco)

Vue.config.productionTip = false

Vue.use(VueMeta);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(VueMask)
Vue.use(VueSweetalert2);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
    libraries: 'places',
  },
  installComponents: true
})

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
