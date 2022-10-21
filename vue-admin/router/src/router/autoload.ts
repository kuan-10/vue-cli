import {RouteRecordRaw} from 'vue-router'
const layoutRoutes=[] as RouteRecordRaw []
const route=import.meta.glob('../layouts/*.vue')//自动加载layouts里面的路由，支持通配符
const childRoutes=import.meta.glob('../views/**/*.vue')//自动加载views里面的路由，支持通配符
Object.entries(route).forEach(([key,module])=>{//结构出来，是按照键值对的形式匹配的
    const layoutRoute=getRoute(key,module)//获取路由
    layoutRoute.children= getChildRoute(layoutRoute)//获取子路由
    layoutRoutes.push(layoutRoute)//将嵌套关系的路由存入
})
function getChildRoute(route:RouteRecordRaw){
    let routes=[] as RouteRecordRaw[]
 Object.entries(childRoutes).forEach(([file,module])=>{//遍历子路由
  if(file.includes(route.path)){
   const childRoute=getRoute(file,module) 
   childRoute.path=childRoute.path.substring(9)
   childRoute.name=childRoute.name as string
   childRoute.name=childRoute.name.substring(9)
   childRoute.name=childRoute.name.split("/").pop()
   routes.push(childRoute)
  }
 })

 return routes;
}
function getRoute(file:string,module:any){
        file=file.replace(/.+layouts\/|.vue/ig,'')//使用正则表达式获取路由名字
        const route={
            name:file,
             path:`/${file}`,
             component:module
        } as RouteRecordRaw
       return route
}
function getLayoutRoute(){
    return layoutRoutes
}
export default getLayoutRoute;