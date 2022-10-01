import axios from "@/plugins/axios/Axios";

const http=new axios({
   baseURL:'/api',
   timeout:100000,
   headers:{},
   
})
export {http}