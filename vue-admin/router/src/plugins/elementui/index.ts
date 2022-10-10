import { App } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//element-plus组件使用
export function setupElementPlus(app:App) {
    app.use(ElementPlus)
}