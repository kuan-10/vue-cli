import {RouteRecordRaw} from 'vue-router'
const routes=[
    {
        path:'/home',
        name:'home',
        component:()=>import('@/views/home.vue'),
        children:[
            {path:'/home/kj',
              component:()=>("@/views/h.vue")}
        ]
},
] as RouteRecordRaw []
 
export default routes;
