import { RouteRecordRaw } from 'vue-router';

export default{
    name:'admin',
    path:'/admin',
    component:()=>import('@/layouts/admin.vue'),
    children:[
        {
            name:'adminHom',
            path:'adminHome',
            component:()=>import('@/views/admin/adminHome.vue')
        }
    ]
} as RouteRecordRaw 