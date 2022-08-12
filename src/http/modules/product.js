import {get,post} from "@/http/axios";

export function selectallp(url,params) {
    return get(url,params);
}

export function selectbyid(url,params) {
    return get(url,params);
}

export function selectvague(url,params) {
    return get(url,params);
}

export function post1(url,params) {
    return post(url,params);
}