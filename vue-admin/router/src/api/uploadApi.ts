import {http} from '@/plugins/axios'

export interface User{
    url:string
}

export function uploadImage(data:FormData){
    return http.request<User>({
        url:'upload/image',
        method:'post',
        data,
    })
}