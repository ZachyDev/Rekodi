import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import AddRecord from '@/components/AddRecord.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add-record',
    name: 'AddRecord',
    component: AddRecord,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
