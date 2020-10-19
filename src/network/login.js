// 登录和注册 的所有网络请求
import {myaxios} from "./request";
import Qs from 'qs'

const root = '/hyt'
// 请求登录的函数, 获取用户信息
export function loginCate(obj) {
  return myaxios({
    method: 'post',
    url: root + "/user_app/login",
    data: Qs.stringify(obj)
  })
}

























// var formData = new FormData();
// formData.append("pworkmassesList", JSON.stringify(arr));
// formData.append("account",this.account);



