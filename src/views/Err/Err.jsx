import React from "react"
import { Link } from "react-router-dom"

import "./Err.css"

const Err = () => {
    return (
        <>
            <div className="container-err">
                <div className="content-err">
                    <h1>Ops!</h1>
                    <h2>404 Página não encontrada</h2>
                    <p>O documento solicitado não existe ou foi removido</p>
                    <div className="links">
                        <Link to="/" className="item">Voltar para Home</Link>
                        <Link to="/calculator" className="item">Ir para Calculadora</Link>
                    </div>
                    <div className="links-hamburguer">
                        <input id="menu-hamburguer" type="checkbox"/>
                        <label for="menu-hamburguer">
                            <span className="hamburguer"></span>
                            <div className="links-2">
                                <Link to="/" className="item2">Home</Link>
                                <Link to="/calculator" className="item2">Calculadora</Link>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Err