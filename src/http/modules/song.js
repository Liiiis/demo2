import {get, post} from "@/http/axios";

export function addsonglist(url,params) {
    return post(url,params);
}
export function songlistall(url,params) {
    return get(url,params);
}