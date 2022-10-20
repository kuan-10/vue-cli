import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          name: 'vben',
         age:2,
         avatar:"ad",
        },
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
         age:"adas",
         avatar:"ad",
      },
    },
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: ()=>{
     return {
       code: 200,
       message:"登陆成功",
       type:"success",
       result:{
        token:Random.string(10)
       },
     
    }
  },
}
] as MockMethod[]