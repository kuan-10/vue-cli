import store from "@/util/store"
import { RouteLocationNormalized, Router } from "vue-router"

//路由守卫
class Guard{
    constructor(private router:Router){
        
    }
    public run(){
        this.router.beforeEach((to,from)=>{
           //to.meta会匹配两个路由
           console.log(to.meta)
            let token=store.get('token') as any
            console.log(token)
            if(this.isLogin(to,token)===false){
                 return {
                     name:'login'
                      }
            }
        })//添加next参数页面为空白，不添加next参数页面有内容
    }
    private isLogin(route:RouteLocationNormalized,token:string|null){
        //判断是否路由验证通过
       return Boolean(!route.meta.auth||(route.meta.auth&&token))

    }
}
export default (router:Router)=>{
    new Guard(router).run()
}