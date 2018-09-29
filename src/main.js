import Vue from 'vue'
import App from './App.vue'
import VueResources from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from "./routes";

Vue.use(VueResources);
Vue.use(VueRouter);

const router = new VueRouter({routes: routes, mode: 'history'});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
