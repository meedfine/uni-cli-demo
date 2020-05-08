import Vue from 'vue'
import App from './App'
import store from './store'
import "./assets/css/mintui.css"
import uView from "uview-ui";
Vue.use(uView);

Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
