export {}

import { IMenu } from '#/menu'
import 'vue-router'
declare module 'vue-router' {
    interface RouteMeta {
      // is optional
      isAdmin?: boolean
      // must be declared by every route
      requiresAuth?: boolean
      auth?:boolean
      guest?:boolean
      permission?:string[]
      menu?:IMenu
    }
  }