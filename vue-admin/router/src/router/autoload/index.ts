import {RouteRecordRaw} from 'vue-router'
import getLayoutRoute from '../autoload'
import  autoloadModules  from './modules'
let autoloadroutes=[] as RouteRecordRaw []

if(0){
    autoloadroutes=getLayoutRoute()
}else{
    autoloadroutes=autoloadModules()
}

export default autoloadroutes