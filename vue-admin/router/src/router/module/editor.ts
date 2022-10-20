import {RouteRecordRaw} from 'vue-router'
export default{
    name:'editor',
    path:'/editor',
    component:()=>import('@/layouts/admin.vue'),
    meta:{title:"编辑器",show:true,
    icon:"fa fa-free-code-camp",active:true},
    children:[
        {
            name:'editor.base',
            path:'base',
            meta:{show:true,title:"富文本编辑器",active:true},
            component:()=>import('@/views/editor/base.vue'),
        },
        {
            name:'editor.markdown',
            path:'markdown',
            meta:{show:true,title:"markdown编辑器",active:true},
            component:()=>import('@/views/editor/markdown.vue'),
        }
        
    ]
} as RouteRecordRaw