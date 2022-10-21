interface Menu{
    title?:string
    icon?:string
    isClicked?:boolean
    route:string
}
export  interface IMenu extends Menu{
 children?:Menu[]
}