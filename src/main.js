import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from "./plugins/vuetify";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VuexPersistence from 'vuex-persist'


// Vue.use(Chartkick.use(Chart))


Vue.use(VueAxios, axios)
Vue.use(VueChartkick)


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
