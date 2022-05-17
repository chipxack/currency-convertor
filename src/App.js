import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/header";
import HomePage from "./pages/home";
import CurrencyPage from "./pages/currency";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="currency" element={<CurrencyPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
