import 'vue-router'
import { IMenu } from './menu'

declare module 'vue-router' {
    interface RouteMeta {
        auth?:boolean
        guest?:boolean
        //路由是否显示
        menu?:IMenu
    }
}