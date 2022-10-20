import store from "@/util/store"
import user from "@/store/user"
import { RouteLocationNormalized, Router } from "vue-router"

//路由守卫
class Guard{
    constructor(private router:Router){
        
    }
    public run(){
        this.router.beforeEach(this.beforeeach.bind(this))
    }
    private beforeeach(to:RouteLocationNormalized,from:RouteLocationNormalized){
            //to.meta会匹配两个路由
             if(this.isLogin(to)===false){
                  return {
                      name:'login'
                       }
             }
             if(this.isGuest(to)===false){
                return from
             }
             this.getUserInfo()
         //添加next参数页面为空白，不添加next参数页面有内容
    }
    //判断是否是管理员登陆
    private isLogin(route:RouteLocationNormalized){
        //判断是否路由验证通过
       return Boolean(!route.meta.auth||(route.meta.auth&&this.token()))

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