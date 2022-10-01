import { ConfigEnv } from "vite";
import { Plugin } from "vite";
import vue from '@vitejs/plugin-vue'
import { setupMockPlugin } from "./mock";

export default function setupPlugins(isBuild:boolean,env:viteEnv){
const plugins:Plugin[]=[vue()]
plugins.push(setupMockPlugin(isBuild))
return plugins
}