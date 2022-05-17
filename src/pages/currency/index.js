import {Box, MenuItem, TextField} from "@mui/material";
import {useCurrencyPage} from "../../hooks/useCurrencyPage";
import {useStore} from "effector-react";
import {$currencyModel} from "../../models/currency";
import {currencies} from "../../helpers";

const CurrencyPage = () => {
    const {$currency} = useStore($currencyModel)
    const {fromCurrency, setFromCurrency} = useCurrencyPage()

    return (
        <Box
            sx={{
                display: 'flex',
                marginTop: '20px',
                flexWrap: 'wrap'
            }}
        >
            <TextField
                sx={{
                    width: 100,
                    marginRight: '10px'
                }}
                id="outlined-select-currency"
                select
                label="Select"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Box sx={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                flex: '1',
            }}>
                {
                    $currency.list?.map(item =>
                        <Box
                            key={item.label}
                            sx={{marginBottom: '10px', width: '200px'}}><span>{item.label}: </span><span>{item.value}</span>
                        </Box>
                    )
                }
            </Box>

        </Box>
    )
}

export default CurrencyPage