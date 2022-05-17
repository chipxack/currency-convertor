import {httpGet} from "./index";

const currency = {
    getCurrency: (params) => httpGet({url: '/fetch-one', params}),
    getAll: (params) => httpGet({url: 'fetch-all', params})
}

export default currency