import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          name: 'vben',
          jak:"iuhkn"
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
       jak:"iuhkn"
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