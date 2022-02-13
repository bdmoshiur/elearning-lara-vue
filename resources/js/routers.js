import dashboard from './components/admin/dashboard/index.vue';
import list from './components/admin/category/list.vue';
import create from './components/admin/category/create.vue';
export const routes = [
    { path: '/', component: dashboard },
    { path: '/category', component: list },
    { path: '/addCategory', component: create },
  ]
