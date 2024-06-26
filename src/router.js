import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Meta from "vue-meta";

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contact.vue")
    },

    {
      path: "/portfolio",
      name: "portfolio",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/Portfolio/Portfolio.vue"
        )
    },
    {
      path: "/portfolio/web",
      name: "webPortfolio",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Portfolio/Web.vue")
    },
    {
      path: "*",
      name: "Error",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Error.vue")
    }
  ]
});
