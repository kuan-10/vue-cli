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
 function login() {
    return http.request<responseResult<loginInterface>>({
     url:"login",
    })
 }
 export default{info,login}