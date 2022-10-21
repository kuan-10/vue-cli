import {defineStore} from 'pinia'
import { RouteLocationNormalized, RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router'
import {IMenu} from '#/menu'
import router from '@/router'
export default defineStore('menu',{
    state:()=>{
        return {
            menus:[] as IMenu[],//定义pinia数据
            historyRoutes:[] as IMenu[]
        }
    },
   
    actions:{
        init(){
           this.getMenuByRoute()
        //    this.addHistoryRoute=store.get(CacheEnum.HISTORY_MENU)
        },
        //移除历史菜单
        removeHistoryRoute(menu:IMenu){
            this.historyRoutes.splice(this.historyRoutes.indexOf(menu),1)
        },
        //增加历史路由导航条
        addHistoryRoute(route:RouteLocationNormalized){
            let menu:IMenu={...route.meta.menu,route:route.name as string}//将点击的路由保存起来
            const isHas=this.historyRoutes.some(item=>item.route==route.name)//判断这个路由是否在历史路由中已经存在过了
            if(!isHas){
                this.historyRoutes.unshift(menu)
                if(this.historyRoutes.length>10){//长度大于十的时候按照队列的形式进行删除
                    this.historyRoutes.pop()
                }
            }
            // store.set(CacheEnum.HISTORY_MENU,this.historyRoutes)//保存历史菜单记录
        },
        getMenuByRoute(){
            //    console.log(router.getRoutes().filter((item)=>(item.children.length)&&(item.meta.show===true)))
              this.menus= router
                .getRoutes()//获取当前路由
                .filter(route=>route.children.length && route.meta.menu)//过滤父路由，要求是既有孩子又有menu选项，否在不进行展示
                .map(route=>
                    { 
                   let menu:any={...route.meta?.menu}//进行遍历，确保了这个meta信息中一定有菜单选项
                        menu.children=route.children
                .filter(route=>//过滤孩子中menu不存在的页面，不让他显示出来
                        route.meta?.menu) 
                .map(route=>{
                    return {...route.meta?.menu,route:route.name}
                })as IMenu[]
               return menu
                })
                .filter(menu=>menu.children?.length)
            
        } 
    }
})
//pinia状态管理，state对标vue中data，getters对应computed，actions对应methods

//pinia状态管理，state对标vue中data，getters对应computed，actions对应methods
