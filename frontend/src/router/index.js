import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Menu from '../views/Menu.vue';
import Banner from '../views/Banner.vue';
import Contact from '../views/Contact.vue';
import Delivery from '../views/Delivery.vue';
import History from '../views/History.vue';
import Admin from '../views/Admin.vue';
import OrderingGuide from '../views/OrderingGuide.vue';

// const Menu = import('../views/Menu.vue');
// const Banner = import('../views/Banner.vue');
// const Contact = import('../views/Contact.vue');
// const Delivery = import('../views/Delivery.vue');
// const History = import('../views/History.vue');
// const Admin = import('../views/Admin.vue');
// const OrderingGuide = import('../views/OrderingGuide.vue');
// const Login = import('../views/Login.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: '/contact',
        components: Contact,
      },
      {
        path: '/history',
        components: History,
      },
      {
        path: '/delivery',
        components: Delivery,
      },
      {
        path: '/ordering-guide',
        components: OrderingGuide,
      },
    ],
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/banner',
    name: 'Banner',
    component: Banner,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
