import store from "@/util/store"
import user from "@/store/user"
import { RouteLocationNormalized, Router } from "vue-router"
import menuStore from "@/store/menuStore"

//路由守卫
class Guard{
    constructor(private router:Router){
        
    }
    public run(){
        this.router.beforeEach(this.beforeeach.bind(this))//路由守卫
    }
    private beforeeach(to:RouteLocationNormalized,from:RouteLocationNormalized){
            //to.meta会匹配两个路由
             if(this.isLogin(to)===false){
                  return {
                      name:'login'
                       }
             }//判断该页面是否是登陆状态
             if(this.isGuest(to)===false){
                return from
             }//判断该页面是否是游客状态
             this.getUserInfo()
         //添加next参数页面为空白，不添加next参数页面有内容
         menuStore().addHistoryRoute(to)
         //管理历史路由
    }
    //判断是否是管理员登陆
    private isLogin(route:RouteLocationNormalized){
        //判断是否路由验证通过
       return Boolean(!route.meta.auth||(route.meta.auth&&this.token()))//登陆状态的两个条件，必须要有权限或者有权限但是有token

    }
    //判断是否是游客登陆
    private isGuest(route:RouteLocationNormalized){
        //判断是否路由验证通过
       return Boolean(!route.meta.guest||(route.meta.guest&&this.token()))

    }
    private token():string|null{
        return store.get("token")?.token
    }
    private getUserInfo(){
        if(this.token()){
            console.log(1)
            user().getUserInfo()
        }
    }
}
export default (router:Router)=>{
    new Guard(router).run()
}