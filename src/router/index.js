import Vue from "vue";
import Router from "vue-router";

import navBar from "@/components/TheNavbar.vue";

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
      components: {
        navBar,
        default: () => import("@/views/ViewObjectList.vue")
      },
    },
    {
      path: "/liste-associations",
      components: {
        navBar,
        default: () => import("@/views/ViewAssociationList.vue")
      },
    },
    {
      path: "/liste-salles",
      components: {
        navBar,
        default: () => import("@/views/ViewStorageList.vue")
      },
    },
    {
      path: "/calendrier",
      components: {
        navBar,
        default: () => import("@/views/ViewCalendrier.vue")
      },
    },
    {
      path: "/prets",
      components: {
        navBar,
        default: () => import("@/views/ViewPretList.vue")
      },
    },
    {
      path: "/liste-categories",
      components: {
        navBar,
        default: () => import("@/views/ViewCategorieList.vue")
      },
    },
    {
      path: "/equipe-log",
      components: {
        navBar,
        default: () => import("@/views/ViewEquipeLog.vue"),
      }
    }
  ]
});