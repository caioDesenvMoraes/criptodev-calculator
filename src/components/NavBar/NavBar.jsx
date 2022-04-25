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
                    <div className="links-hamburguer">
                        <input id="menu-hamburguer" type="checkbox"/>
                        <label for="menu-hamburguer">
                            <span className="hamburguer"></span>
                            <div className="links-2">
                                <Link to="/" className="item">Home</Link>
                                <Link to="/calculator" className="item">Calculator</Link>
                                <a href="https://www.instagram.com/caiomutley/" target="_blank" rel="noreferrer" className="item">Instagram</a>
                                <a href="https://www.linkedin.com/in/caio-moraes-8026a6158/" target="_blank" rel="noreferrer" className="item">Linkedin</a>
                                <a href="https://github.com/caioDesenvMoraes" target="_blank" rel="noreferrer" className="item">Github</a>
                            </div>
                        </label>
                        
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar