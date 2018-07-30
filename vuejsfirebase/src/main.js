// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import jQuery from 'jquery'
import Custom from './assets/index.js'
global.jQuery = jQuery
global.$ = jQuery
let Materialize = require('materialize-css')
import 'materialize-css/dist/css/materialize.css'
import './assets/tacofy.css'

Vue.use(VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
