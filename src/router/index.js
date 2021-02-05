import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Login = () => import("../views/Login.vue");
const Home = () => import("../views/Home.vue");
const Main = () => import("../components/Home.main.vue");
const Nav2 = () => import("../components/Home.nav2.vue");
const Nav3 = () => import("../components/Home.nav3.vue");
const Nav4_5 = () => import("../components/Home.nav4.nav5.vue");
const Nav4_6 = () => import("../components/Home.nav4.nav6.vue");

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home,
    redirect: "/home/main",
    children: [
      {
        path: "/home/main",
        component: Main
      },
      {
        path: "/home/nav2",
        component: Nav2
      },
      {
        path: "/home/nav3",
        component: Nav3
      },
      {
        path: "/home/nav4/nav5",
        component: Nav4_5
      },
      {
        path: "/home/nav4/nav6",
        component: Nav4_6
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
