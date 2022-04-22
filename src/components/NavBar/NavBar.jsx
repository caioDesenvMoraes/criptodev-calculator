import React from "react"
import Logo from "../../img/logo.jpg"
import { Link } from "react-router-dom"

import "./NavBar.css"

const NavBar = () => {
    return(
        <>
            <header className="header">
                <div className="container-header">
                    <img className="logo" src={ Logo } alt="logo"/>
                    <div className="links">
                        <Link to="/" className="item">Home</Link>
                        <Link to="/calculator" className="item">Calculator</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar