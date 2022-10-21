import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import _ from "lodash"
import parseEnv from './vite/util'
import setupPlugins from './vite/plugin'

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
  const env=parseEnv(loadEnv(mode,root) as any)
  return {
    plugins: setupPlugins(isBuild,env),
      resolve:{
        alias:{'@':path.resolve(__dirname,'src'),
        '#':path.resolve(__dirname,'types')
  }

}
}
}