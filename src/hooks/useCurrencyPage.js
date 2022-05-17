import {getAll} from "../models/currency";
import {useEffect, useState} from "react";

export const useCurrencyPage = () => {
    const [fromCurrency, setFromCurrency] = useState('UZS')

    useEffect(() => {
        const params = {
            from: fromCurrency
        }
        getAll(params)
        setInterval(() => {
            getAll(params)
        }, 15000)
        return clearInterval
    }, [fromCurrency]);

    return {
        fromCurrency,
        setFromCurrency
    }
}