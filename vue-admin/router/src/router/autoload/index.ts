import {RouteRecordRaw} from 'vue-router'
import getLayoutRoute from '../autoload'
import  autoloadModules  from './modules'
let autoloadroutes=[] as RouteRecordRaw []

if(0){
    autoloadroutes=getLayoutRoute()//自动加载路由
}else{
    autoloadroutes=autoloadModules()//按模块加载路由
}

export default autoloadroutes