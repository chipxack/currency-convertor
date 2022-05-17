import axios from "axios";

export const httpClient = axios.create({
    baseURL: 'https://api.fastforex.io/'
})

httpClient.interceptors.request.use(config => {
    const customConfig = config
    customConfig.params = {
        api_key: '216740deec-6a5688f6ac-rc0hc4',
        ...config.params
    }
    return customConfig
})

export const httpGet = params =>
    httpClient({
        method: 'get',
        ...params
    })