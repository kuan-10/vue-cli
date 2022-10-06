import { ConfigEnv } from "vite";
import { Plugin } from "vite";
import vue from '@vitejs/plugin-vue'
import { setupMockPlugin } from "./mock";
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
export default function setupPlugins(isBuild:boolean,env:viteEnv){
const plugins:Plugin[]=[vue()]
plugins.push(setupMockPlugin(isBuild))
const component=Components({
    resolvers: [VantResolver()],
  })
  plugins.push(component)
return plugins
}