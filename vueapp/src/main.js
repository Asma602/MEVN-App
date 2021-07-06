import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue/dist/bootstrap-vue.esm';
import admin from "./components/admin";
import user from "./components/user";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import auth from "./components/auth";
import home from "./components/home";
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const routes = [

  { path: '/',
    component: auth,
  },
  {
    path: '/home',
    component: home,
    children: [
      { path: 'admin', component: admin },
      { path: 'user', component: user },
    ]
  }

];
const router = new VueRouter({
  routes,
  mode: 'history'
});

 new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
