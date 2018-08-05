// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './firebase';
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import jQuery from 'jquery'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import './assets/tacofy.css'
global.jQuery = jQuery
global.$ = jQuery
let Materialize = require('materialize-css')

Vue.use(VueFire)
Vue.config.productionTip = false

import Firebase from 'firebase';

Firebase.auth().onAuthStateChanged(function(user){
	console.log(user);
	if(user){
		console.log('Tenemos usuario');
		$('#fbBtnLogIn').hide();
		$('#fbBtnLogOut').show();
	}else{
		console.log('No hay usuario');
		$('#fbBtnLogIn').show();
		$('#fbBtnLogOut').hide();
	}
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
