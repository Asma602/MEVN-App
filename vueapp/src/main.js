import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue/dist/bootstrap-vue.esm';
import admin from "./components/admin/admin";
import user from "./components/user/user";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import auth from "./components/auth/auth";
import home from "./components/home";
import employee from "./components/employees/employee";
import employeeDetails from "./components/employees/employeeDetails/employeeDetails";
import addNewEmployee from './components/employees/addNewEmployee/addNewEmployee';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primeicons/primeicons.css';
import  PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import {BaseService} from "./services/base.service";     //optional for column grouping
import Card from 'primevue/card';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Skeleton from 'primevue/skeleton';
import Dropdown from 'primevue/dropdown';
import Divider from 'primevue/divider';


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(PrimeVue);
Vue.use(ToastService);
Vue.use(ConfirmationService)
Vue.component('InputText', InputText);
Vue.component('Toast', Toast);
Vue.component('ConfirmDialog', ConfirmDialog);
Vue.component('Dialog', Dialog);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('ColumnGroup', ColumnGroup);
Vue.component('Card', Card);
Vue.component('Button', Button);
Vue.component('Avatar', Avatar);
Vue.component('Skeleton', Skeleton);
Vue.component('Dropdown', Dropdown);
Vue.component('Divider', Divider);


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
      { path: 'employees', component: employee},
      { path: 'employeeDetails/:id', component: employeeDetails},
      { path: 'addNewEmployee', component: addNewEmployee},
      { path: 'addNewEmployee/:id', component: addNewEmployee},
    ]
  },


];
const router = new VueRouter({
  routes,
  mode: 'history'
});

let vue = new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
BaseService.prototype.$vue = vue;
