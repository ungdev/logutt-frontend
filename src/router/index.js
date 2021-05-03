import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
    {
      path: "/",
      component: () => import("@/views/ViewHome.vue"),
    },
    {
      path: "/liste-materiel",
      component: () => import("@/views/ViewObjectList.vue"),
    },
    {
      path: "/liste-associations",
      component: () => import("@/views/ViewAssoList.vue"),
    },
    {
      path: "/liste-salles",
      component: () => import("@/views/ViewSalleList.vue"),
    },
    {
      path: "/calendrier",
      component: () => import("@/views/ViewCalendrier.vue"),
    },
    {
      path: "/prets",
      component: () => import("@/views/ViewPretList.vue"),
    },
    {
      path: "/liste-categories",
      component: () => import("@/views/ViewCategorieList.vue"),
    }
  ]
});