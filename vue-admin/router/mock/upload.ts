import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/upload/image',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message:"上传成功",
        result: {
         url:"../src/assets/vue.svg",
         avatar:"/images/",
        },
      }
    },
  },
  
  
] as MockMethod[]