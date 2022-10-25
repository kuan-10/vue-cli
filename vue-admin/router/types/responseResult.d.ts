//定义axios中的一部数据返回结果类型
interface responseResult<T>{
    code:number
    message:string
    type:'success' | 'error'
    result: T
  
} 