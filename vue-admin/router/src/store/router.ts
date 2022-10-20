import {defineStore} from 'pinia'
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router'
export  const router=defineStore('router',{
    state:()=>{
        return {
            routes:getRoute(),//定义pinia数据
        }
    },
   
    actions:{

    }
})
//pinia状态管理，state对标vue中data，getters对应computed，actions对应methods
function getRoute():RouteRecordNormalized[]{
   const router=useRouter()
//    console.log(router.getRoutes().filter((item)=>(item.children.length)&&(item.meta.show===true)))
 const routes= router.getRoutes()
    .filter(item=>item.children.length && item.meta.show)//过滤父路由，要求是既有孩子show又为真
    .map(item=>{item.children=item.children
    .filter(item=>//过滤孩子中show不为真的页面，不让他显示出来
            item.meta?.show)
            return item
    })
   return routes

}