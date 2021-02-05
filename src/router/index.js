import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("../views/Home.vue");
const Login = () => import("../views/Login.vue");
const Main = () => import("../components/Home.main.vue");

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
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
