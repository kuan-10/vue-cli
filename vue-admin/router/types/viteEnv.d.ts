interface viteEnv{
    VITE_SOME_KEY:number
    VITE_AUTOLOAD:boolean
    VITE_API_UR:string
}
interface ImportMetaEnv extends viteEnv{
    readonly VITE_APP_TITLE: Object
    // 更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }