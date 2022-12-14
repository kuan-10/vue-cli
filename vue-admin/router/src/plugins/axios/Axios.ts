import axios, { AxiosRequestConfig } from 'axios'
export default class Axios{
   private instance
   constructor(config:AxiosRequestConfig){
       this.instance=axios.create(config)
       this.interceptor()
   }
   public async request<T, D=responseResult<T>>(config:AxiosRequestConfig):Promise<D>{
     return new Promise(async (resolve,reject)=>{
      try{
        const response =await this.instance.request<D>(config)
        resolve(response.data)
      }catch(error){
           reject(error)
      }
     })
    //   this.instance.request(<responseResult<T>>)
   }
   public interceptor(){
      this.requestInterceptor()//固定写法
     this.sendInterceptor()//固定写法
   }
   public requestInterceptor(){
      this.instance.interceptors.request.use(function (config) {
         // 在发送请求之前做些什么
         return config;
       }, function (error) {
         // 对请求错误做些什么
         return Promise.reject(error);
       });
}
public sendInterceptor(){
   this.instance.interceptors.response.use(function (response) {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      return response;
    }, function (error) {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      return Promise.reject(error);
    });
}
}