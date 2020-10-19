import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
// import moduleA from "./modules/moduleA";

// 1 安装插件
Vue.use(Vuex)

// 2 创建对象
const store = new Vuex.Store({
  state: {
    login: {},
    memory: [{
      ant: '',   // 账号
      pwd: '',
    }]

  },
  mutations,
  actions,
  getters,
  modules: {
    // a: moduleA
  }
})

// 3 导出对象
export default store

