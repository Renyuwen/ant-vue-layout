import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "./styles/ant-theme.less";
import { ConfigProvider } from "ant-design-vue"; //引用

Vue.component(ConfigProvider.name, ConfigProvider); //注册

Vue.use(Antd);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let logined = localStorage.getItem("logined");
  if (JSON.parse(logined)) {
    // 已登录
    if (to.path == "/" || to.path == "/login") {
      next("/home");
    }
    next();
  } else {
    // 未登录
    if (to.path == "/login") {
      next();
    } else {
      next("/login");
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
