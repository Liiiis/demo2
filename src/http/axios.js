import axios from "axios";
import config from "@/http/config";

const instance = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout,
    headers: config.headers
})

instance.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        //如果有具体错误，返回具体的"中文提示"
        console.log(err);
    }
)

export function get(url, params) {
    return instance.get(url, {params});
}

export function post(url, params) {
    return instance.post(url, params)
}
