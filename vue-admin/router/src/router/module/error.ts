import {RouteRecordRaw} from 'vue-router'
export default{
    name:'errors',
    path:'/errors',
    component:()=>import('@/layouts/errors.vue'),
    children:[
        {
            name:'error.403',
            path:'403',
            component:()=>import('@/views/errors/403.vue'),
        },
        {
            name:'error.404',
            path:'404',
            component:()=>import('@/views/errors/404.vue'),
        },
        {
            name:'error.500',
            path:'500',
            component:()=>import('@/views/errors/500.vue'),
        }
        
    ]
} as RouteRecordRaw