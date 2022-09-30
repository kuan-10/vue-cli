import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve:{
//     alias:{'@':path.resolve(__dirname,'src')}
//   }
//   })
export default ({command,mode}:ConfigEnv)=>{
  const isBuild=command=='build'
  const root=process.cwd()
  const env=loadEnv(mode,root)
  return {
    plugins: [vue()],
      resolve:{
        alias:{'@':path.resolve(__dirname,'src')}
      }
  }

}