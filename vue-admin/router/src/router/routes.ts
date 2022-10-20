import {RouteRecordRaw} from 'vue-router'
const routes=[
    {
        path:'/home',
        name:'home',
        component:()=>import('@/views/home.vue'),
    
},
{
    path:'/login',
    name:'login',
    component:()=>import('@/views/auth/login.vue'),
},
{
    path:'/register',
    name:'register',
    component:()=>import('@/views/auth/register.vue'),
},
] as RouteRecordRaw []
 
export default routes;
