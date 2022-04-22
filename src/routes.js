import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Err from "./views/Err/Err"
import Home from "./views/Home/Home"
import Calculator from "./views/Calculator/Calculator"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={ <Err/> }/>
                <Route path="/" element={ <Home/> }/>
                <Route path="/calculator" element={ <Calculator/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router