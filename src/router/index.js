import Vue from "vue";
import Router from "vue-router";

import HomeLayout from "../components/HomeLayout.vue";
import NavMenu from "../components/NavMenu.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "home-layout",
      component: HomeLayout
    },
    {
      path: "/nav",
      name: "nav-menu",
      props: true,
      component: NavMenu
    }
  ],
  mode: "history"
})

export default router;
