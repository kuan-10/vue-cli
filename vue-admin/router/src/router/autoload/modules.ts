import { RouteRecordRaw } from "vue-router";

export default function autoloadModules():RouteRecordRaw[]{
    let autoload=[] as RouteRecordRaw []
   const route=import.meta.glob('../module/*.ts',{ eager: true , import: 'default',})
   Object.entries(route).forEach(([key,module])=>{
    console.log(module)
  autoload.push(route[key] as unknown as RouteRecordRaw);
   })
return autoload
}//按模块自动注册
