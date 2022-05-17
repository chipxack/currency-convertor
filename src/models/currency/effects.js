import {createEffect} from 'effector'
import currency from '../../service/currency'

export const fetchCurrency = createEffect({
    handler: currency.getCurrency
})

export const fetchAll = createEffect({
    handler: currency.getAll
})