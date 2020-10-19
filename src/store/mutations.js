import {   // 引入 自定义的常量
  SETMEM,
  LOGIN,
} from './mutype'

export default {

  // 记住密码
  [SETMEM](state,payload) {
    state.memory.push(payload)
  },
  // 登录
  [LOGIN](state,payload) {
    state.login = payload
  }

}