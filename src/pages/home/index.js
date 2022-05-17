import {Box, MenuItem, TextField} from "@mui/material";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import {useHomePage} from "../../hooks/useHomePage";
import {currencies} from '../../helpers'

const HomePage = () => {
    const {
        value,
        setValue,
        switchCurrency,
        fromCurrency,
        setToCurrency,
        toCurrency,
        setFromCurrency,
        getConvert
    } = useHomePage()


    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                flexDirection: 'column'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <TextField
                    sx={{
                        marginRight: '10px'
                    }}
                    label={fromCurrency}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
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
                <SwapHorizIcon sx={{cursor: "pointer"}} onClick={switchCurrency}/>
                <TextField
                    sx={{
                        marginLeft: '10px',
                        width: 100,
                    }}
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                >
                    {
                        currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))
                    }
                </TextField>
            </Box>
            <Box sx={{marginTop: '10px'}}>
                {`${value} ${fromCurrency} равно ${getConvert()} ${toCurrency}`}
            </Box>
        </Box>
    )
}

export default HomePage