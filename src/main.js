import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false

import './sass/main.scss'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

//Dont remove this code in comment
// https://vuejsexamples.com/date-range-picker-for-vuetify-js/
/*import VuetifyDaterangePicker from "vuetify-daterange-picker";
import "vuetify-daterange-picker/dist/vuetify-daterange-picker.css";
Vue.use(VuetifyDaterangePicker);*/

import ClientList from './components/dashboard/ClientList';
import UserList from './components/dashboard/UserList';
import MyAgency from './components/dashboard/MyAgency';
import PerformanceEstimator from './components/dashboard/PerformanceEstimator';
const routes = [
  { path: '/client/list',  component: ClientList } ,
  { path: '/performance/estimator', component: PerformanceEstimator } ,
  { path: '/user/list', component: UserList } ,
  { path: '/my/agency', component: MyAgency }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});



new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
