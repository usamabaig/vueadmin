import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false

import './sass/main.scss'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

window.fbAsyncInit = function() {
  FB.init({
    appId      : '893773914319312',
    cookie     : true,  // enable cookies to allow the server to access the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });
};
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

import FBSignInButton from 'vue-facebook-signin-button'
Vue.use(FBSignInButton)


//Dont remove this code in comment
// https://vuejsexamples.com/date-range-picker-for-vuetify-js/
/*import VuetifyDaterangePicker from "vuetify-daterange-picker";
import "vuetify-daterange-picker/dist/vuetify-daterange-picker.css";
Vue.use(VuetifyDaterangePicker);*/

import FBDetails from './components/dashboard/FBDetails';
import LoginFB from './components/dashboard/LoginFB';
import ClientList from './components/dashboard/ClientList';
import UserList from './components/dashboard/UserList';
import MyAgency from './components/dashboard/MyAgency';
import PerformanceEstimator from './components/dashboard/PerformanceEstimator';
const routes = [
  { path: '/client/list',  component: ClientList } ,
  { path: '/LoginFB',  component: LoginFB } ,
  { path: '/FBDetails',  component: FBDetails } ,
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
    FBSignInButton,
  render: h => h(App)
}).$mount('#app')
