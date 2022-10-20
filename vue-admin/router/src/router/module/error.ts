import {RouteRecordRaw} from 'vue-router'
export default{
    name:'errors',
    path:'/errors',
    component:()=>import('@/layouts/admin.vue'),
    meta:{title:"错误页面",show:true,icon:'fa fa-digg',
    active:true,},
    children:[
        {
            name:'error.403',
            path:'403',
            meta:{show:true,title:"404页面",active:true},
            component:()=>import('@/views/errors/403.vue'),
        },
        {
            name:'error.404',
            path:'404',
            meta:{show:true,title:"403页面",active:true},
            component:()=>import('@/views/errors/404.vue'),
        },
        {
            name:'error.500',
            path:'500',
            meta:{show:true,title:"500页面",active:true},
            component:()=>import('@/views/errors/500.vue'),
        }
        
    ]
} as RouteRecordRaw