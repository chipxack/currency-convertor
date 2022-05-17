import {combine, createStore} from 'effector'
import {fetchAll, fetchCurrency} from './effects'

const $currency = createStore({loading: false, data: [], list: [], error: false})
    .on(fetchCurrency.pending, (state, loading) => ({...state, loading}))
    .on(fetchCurrency.done, (state, error) => ({
        ...state,
        error: error.response,
        data: [],
    }))
    .on(fetchCurrency.done, (state, res) => {
        return {
            ...state,
            data: res.result.data.result
        }
    })
    .on(fetchAll.pending, (state, loading) => ({...state, loading}))
    .on(fetchAll.done, (state, error) => ({
        ...state,
        error: error.response,
        list: [],
    }))
    .on(fetchAll.done, (state, res) => {
        const result = []
        for (let key in res.result.data.results) {
            result.push({
                label: key,
                value: res.result.data.results[key]
            })
        }
        return {
            ...state,
            list: result
        }
    })

export const $currencyModel = combine({$currency})
