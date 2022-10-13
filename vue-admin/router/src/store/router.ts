import {defineStore} from 'pinia'
export  const router=defineStore('router',{
    state:()=>{
        return {
            name:'iop',//定义pinia数据
        }
    },
    getters:{
        get(state){
            return state.name//可以通过get来读取
        },
    },
    actions:{

    }
})
//pinia状态管理，state对标vue中data，getters对应computed，actions对应methods
