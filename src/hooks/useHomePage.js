import {useEffect, useState} from "react";
import {$currencyModel, getCurrency} from "../models/currency";
import {useStore} from "effector-react";

export const useHomePage = () => {
    const {$currency} = useStore($currencyModel)
    const [fromCurrency, setFromCurrency] = useState('UZS')
    const [toCurrency, setToCurrency] = useState('USD')
    const [value, setValue] = useState(1)

    const switchCurrency = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }

    const getConvert = () => {
        return value * $currency?.data[toCurrency] || 0
    }

    useEffect(() => {
        const params = {
            from: fromCurrency,
            to: toCurrency
        }
        getCurrency(params)
    }, [fromCurrency, toCurrency, value]);


    return {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        value,
        setValue,
        switchCurrency,
        getConvert
    }
}