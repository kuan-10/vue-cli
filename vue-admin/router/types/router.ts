import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        auth?:boolean
        gueat?:boolean
        //路由是否显示
        show?:boolean
        //菜单的标题
        title?:string
        //路由图标
        icon?:string
    }
}