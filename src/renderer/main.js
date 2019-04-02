import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import Quasar, * as All from 'quasar-framework/dist/quasar.mat.esm'

import 'quasar-framework/dist/quasar.mat.styl'
import 'quasar-extras/material-icons'
import 'quasar-extras/animate/fadeIn.css'
import 'quasar-extras/animate/fadeOut.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Quasar, {
  framework: {
    cssAddon: true,
    directives: All,
    plugins: All,
    animations: All,
    components: All
  }
})
/* eslint-disable no-new */
new Vue({
  components: {App},
  router,
  store,
  template: '<App/>'
}).$mount('#app')
