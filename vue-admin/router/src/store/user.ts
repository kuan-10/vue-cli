import {defineStore} from 'pinia'
import UserApi,{User} from '@/api/user'
export default defineStore('user',{
    state :()=>{
        return {
            info:{} as null| User,
        }
    },
    actions:{
        async getUserInfo(){
     const res= await UserApi.info()
     this.info=res.result
        }
    }
})