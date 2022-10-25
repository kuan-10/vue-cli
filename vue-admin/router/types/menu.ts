//路由元信息中的menu类型
interface Menu{
    title?:string
    icon?:string
    isClicked?:boolean
    route:string
}
export  interface IMenu extends Menu{
 children?:Menu[]
}