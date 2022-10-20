import { http } from "@/plugins/axios";
export interface User{
   name:string
   age:number
   avatar:string
}
interface loginInterface{
   token:string
}
 function info() {
   return http.request<User>({
    url:`info`,
   })
}
 function login(data:any) {
    return http.request<loginInterface>({
     url:`login`,
     method:'post',
     data
    })
 }
 export default{info,login}