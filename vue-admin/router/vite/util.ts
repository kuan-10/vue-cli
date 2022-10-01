import _ from "lodash"

export default function parseEnv(env:viteEnv){
    const envs :any=_.cloneDeep(env)
Object.entries(env).forEach(([key,value])=>{
    if(value=='true'||value=='false'){
        envs[key]=value=='true'?true:false
    }
    if(/^\d+$/.test(value)){
        value=parseInt(value)
    }
})
return envs
}

