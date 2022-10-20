import { remove } from "lodash";

interface IData{
    expire?:number,
    [key:string]:any
}
export default {
    set(key:string,data:any,expire?:number){
        let cache:IData={data}
    if(expire){
        cache.expire=new Date().getTime()+data.expire*1000;
    }
    localStorage.setItem(key,JSON.stringify(cache))
    },
    get(key:string):any{
        const cacheStore=localStorage.getItem(key)
        if(cacheStore){
              const cache=JSON.parse(cacheStore)
              const expire=cache?.expire;
              if(expire&&expire<new Date().getTime()){
                localStorage.removeItem(key)
                return null
            }
            return cache.data
        }//从本地进行获取
        return null
 //对他进行转化
    },
    remove(key:string){
        localStorage.removeItem(key)
    }
}