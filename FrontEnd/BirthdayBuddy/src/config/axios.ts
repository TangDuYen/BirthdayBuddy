import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    baseURL: "http://localhost:8080/swagger-ui/index.html"
}

const api = axios.create(config);

axios.interceptors.request.use(function (config) {
    return config;
}, null);

export default api;