import {RouteRecordRaw} from 'vue-router'
const layoutRoutes=[] as RouteRecordRaw []
const route=import.meta.glob('../layouts/*.vue')
const childRoutes=import.meta.glob('../views/**/*.vue')
Object.entries(route).forEach(([key,module])=>{
    const layoutRoute=getRoute(key,module)
    console.log(layoutRoute)
    layoutRoute.children= getChildRoute(layoutRoute)
    layoutRoutes.push(layoutRoute)
})
function getChildRoute(route:RouteRecordRaw){
    let routes=[] as RouteRecordRaw[]
 Object.entries(childRoutes).forEach(([file,module])=>{
  if(file.includes(route.path)){
   const childRoute=getRoute(file,module) 
   childRoute.path=childRoute.path.substring(9)
   childRoute.name=childRoute.name as string
   childRoute.name=childRoute.name.substring(9)
   routes.push(childRoute)
  }
 })
 return routes;
}
function getRoute(file:string,module:any){
        file=file.replace(/.+layouts\/|.vue/ig,'')
        const route={
            name:file,
             path:`/${file}`,
             component:module
        } as RouteRecordRaw
       return route
}
export default layoutRoutes;