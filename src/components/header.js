import {AppBar, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar sx={{a: {color: 'white', textDecoration: 'none', marginRight: '10px'}}} variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    <Link to='/'>
                        Главная
                    </Link>
                </Typography>
                <Typography variant="h6" color="inherit" component="div">
                    <Link to='currency'>
                        Курс валют
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}