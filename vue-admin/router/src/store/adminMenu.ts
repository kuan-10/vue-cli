import { defineStore } from "pinia";

//控制左侧菜单缩放
export default defineStore('close',{
    state:()=>{
        return {
            isClosed:true as Boolean
        }
    },
    actions:{

    }
})