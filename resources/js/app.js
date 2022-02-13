
require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue';
// support for Vue Router
import VueRouter from 'vue-router'
import { routes } from './routers';
Vue.use(VueRouter)

  // Create the router instance and pass the `routes` option
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

  // V form import
  import Form from 'vform'
  window.Form = Form;

  // sweetalert2 import
    import Swal from 'sweetalert2'
    window.Swal = Swal;


const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  window.Toast = Toast


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/adminmaster.vue').default);

const app = new Vue({
    el: '#app',
    router
});
