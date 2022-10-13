import { App } from "vue";
import { setupElementPlus } from "./elementui";
import { setupTailwindCss } from "./tailwindcss";
import { setupPinia } from "./pinia";
export function setupPlugins(app:App){
  autoRegisterComponent(app)//组件注册
  setupTailwindCss()//tailwindcss安装与使用
  setupElementPlus(app)//elementplus的安装与使用
  setupPinia(app)//pinia的安装与使用
}
//自动注册全局组件
function autoRegisterComponent(app:App){
  const modules=import.meta.glob('../components/form/*.vue')//获取component文件夹中的组件
  Object.entries(modules).forEach(([key,value])=>{

    key=key.replace(/..\/components\/form\/|.vue/ig,'')//获取组件名字
    app.component(key,value)
  })
 
}