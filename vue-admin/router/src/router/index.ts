import { createRouter,createWebHistory } from "vue-router";
import {App} from 'vue'
import routes from "./routes";
import  autoloadroutes from './autoload/index' 
import layoutRoutes from "./autoload";
import guard from "./guard";
import getLayoutRoute from "./autoload";
const router=createRouter({
    history:createWebHistory(),
    routes:[...autoloadroutes,...routes]
})
export function setupRouter(app:App){
    guard(router)
    app.use(router)

}
export default router;