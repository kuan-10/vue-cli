import { RouteRecordRaw } from 'vue-router';

export default{
    name:'admin',
    path:'/admin',
    component:()=>import('@/layouts/admin.vue'),
    children:[
        {
            name:'adminHome',
            path:'adminHome',
            meta:{auth:true},
            component:()=>import('@/views/admin/adminHome.vue')
        }
    ]
} as RouteRecordRaw 