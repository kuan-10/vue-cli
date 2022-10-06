import { http } from "@/plugins/axios";
interface User{
   name:string
   age:number
   avatar:string
}
interface loginInterface{
   token:string
}
 function info() {
   return http.request<responseResult<User>>({
    url:"/info",
   })
}
 function login(data:any) {
    return http.request<loginInterface>({
     url:"login",
     method:'post',
     data
    })
 }
 export default{info,login}