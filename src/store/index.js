import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    login(state, userInfo) {
      console.log(userInfo);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("logined", true);
      console.log("已登录...");
    },
    logout() {
      localStorage.setItem("logined", false);
      localStorage.setItem("userInfo", "");
      console.log("退出登录...");
    }
  },
  actions: {},
  modules: {}
});
