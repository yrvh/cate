// 进入主界面之后  各个子页->相关数据请求
import {tkaxios} from "./request";
import Qs from 'qs'
const root = '/control'


export function getUserMain(obj) {   // 风控获取用户信息
  return tkaxios({
    method: 'post',
    url: root+'/ms/fr/user/main ',
    data: Qs.stringify(obj)
  })
}