import {get, post} from "@/http/axios";

export function adduser(url,params) {
    return post(url,params);
}

export function selectuserall(url,params) {
    return get(url,params);
}

export function selectbyid(url,params) {
    return get(url,params);
}

export function selectvague(url,params) {
    return get(url,params);
}

export function updatauser(url,params) {
    return post(url,params);
}

export function deletebyid(url,params) {
    return get(url,params);
}