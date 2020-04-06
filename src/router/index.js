import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import cheque_staffmenu from "../views/cheque_staffmenu.vue";
import cheque_usermenu from "../views/cheque_usermenu.vue";
import cheque_approve from "../views/cheque_approve.vue";
import cheque_submit from "../views/cheque_submit.vue";
import cheque_status from "../views/cheque_status.vue";
import cheque_verify from "../views/cheque_verify.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/cheque_staffmenu",
    component: cheque_staffmenu,
  },
  {
    path: "/cheque_usermenu",
    component: cheque_usermenu,
  },
  {
    path: "/cheque_approve",
    component: cheque_approve,
  },
  {
    path: "/cheque_verify",
    component: cheque_verify,
  },
  {
    path: "/cheque_submit",
    component: cheque_submit,
  },
  {
    path: "/cheque_status",
    component: cheque_status,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
