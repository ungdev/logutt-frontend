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
      path: "/login",
      component: () => import("@/views/ViewLogin.vue"),
    },
    {
      path: "/liste-materiel",
      component: () => import("@/views/ViewObjectList.vue"),
    },
    {
      path: "/liste-associations",
      component: () => import("@/views/ViewAssociationList.vue"),
    },
    {
      path: "/liste-salles",
      component: () => import("@/views/ViewStorageList.vue"),
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