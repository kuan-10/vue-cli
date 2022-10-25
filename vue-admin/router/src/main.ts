import { createApp } from 'vue'
import './style.css'
import 'animate.css'
import App from './App.vue'
import router,{setupRouter} from '@/router'
import { setupPlugins } from './plugins'
import passwordA from '@/components/form/password.vue'
async function bootstrap(){
    const app= createApp(App)
    setupRouter(app)
    setupPlugins(app)
    await router.isReady()
    app.component('passwordA',passwordA)
    app.mount('#app')
}

bootstrap()