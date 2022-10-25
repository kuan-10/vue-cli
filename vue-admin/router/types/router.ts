import 'vue-router'
import { IMenu } from './menu'
//定义路由元信息类型
declare module 'vue-router' {
    interface RouteMeta {
        auth?:boolean
        guest?:boolean
        //路由是否显示
        menu?:IMenu
    }
}