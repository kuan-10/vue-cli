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
{
    path:'/:any(.*)',
    name:'Not Found',
    component:()=>import('@/views/errors/404.vue')
}
] as RouteRecordRaw []
 
export default routes;
