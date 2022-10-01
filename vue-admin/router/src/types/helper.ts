import _ from "lodash"

export default new (class{
    private env={} as ImportMetaEnv
    constructor(){
        this.env=this.getEnv()
    }
    public getterEnv(){
        return this.env
    }
    public getEnv(){
       
        const envs=_.cloneDeep(import.meta.env as Record<string,any>) as any
Object.entries(import.meta.env as Record<string,any>).forEach(([key,value])=>{
    if(value=='true'||value=='false'){
        envs[key]=value=='true'?true:false
    }
    else if(/^\d+$/.test(value)){
        value=parseInt(value)
    }
    else if(value===undefined){
        envs[key]=undefined
    }
    else if(value===null){
        envs[key]=null
    }
    else{
        envs[key]=value
    }
})
return envs
    }

})();