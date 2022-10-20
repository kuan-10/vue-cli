import { CacheEnum } from "@/enum/cacheEnum";
import store from "./store";

export function logout(){
    store.remove(CacheEnum.TOKEN_NAME)
}