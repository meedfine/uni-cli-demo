import Vue from 'vue'
import App from './App'
import store from './store'
import uView from "uview-ui";
import "./assets/css/mintui.css"
import "./assets/iconfont/iconfont.css"
import clHeader from './components/clHeader.vue';

// import Router, {RouterMount} from 'uni-simple-router';
// Vue.use(Router)
Vue.use(uView);
Vue.component('clHeader', clHeader);

Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
