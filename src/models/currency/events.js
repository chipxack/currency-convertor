import {createEvent} from "effector";
import {fetchAll, fetchCurrency} from './effects'

export const getCurrency = createEvent()
export const getAll = createEvent()

getCurrency.watch(fetchCurrency)
getAll.watch(fetchAll)