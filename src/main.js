import Vue from 'vue'
import App from './App.vue';
import abbo from './lib/index.js';
Vue.use(abbo)
new Vue({
  el: '#app',
  render: h => h(App)
})
