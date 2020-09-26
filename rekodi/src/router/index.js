import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import AddRecord from '@/components/AddRecord.vue';
import EditRecord from '@/components/EditRecord.vue';

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
  {
    path: '/edit-record/:edit',
    name: 'EditRecord',
    component: EditRecord,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
