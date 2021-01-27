/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGeoLocation from 'vue-browser-geolocation'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

Vue.use(VueGeoLocation)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAOFCI-Oh26VgBeZ_zfYBWcArXcXvxkzJw',
    libraries: 'places'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/* eslint-disable */