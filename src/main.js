import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import screenSize from './plugins/screenSize'
import httpClientAxios from './auth/http-common'
import Modal from './components/C_GeneralDialog.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  // screenSize,
  httpClientAxios,
  Modal,
  render: h => h(App)
}).$mount('#app')