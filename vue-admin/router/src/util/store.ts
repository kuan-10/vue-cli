interface IData{
    expire?:number,
    [key:string]:any
}
export default {
    set(key:string,data:IData){
    if(data.expire){
        data.expire=new Date().getTime()+data.expire*1000;
    }
    localStorage.setItem(key,JSON.stringify(data))
    },
    get(key:string):IData|null{
        const item=localStorage.getItem(key)//从本地进行获取
 if(item){
    const data=JSON.parse(item);//对他进行转化
    const expire=data.expire;
    if(expire<new Date().getTime()){
        localStorage.removeItem(key)
        return null
    }
   return data
 }
 return null
    }
}