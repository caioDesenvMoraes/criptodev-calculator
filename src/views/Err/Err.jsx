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
                </div>
            </div>
        </>
    )
}

export default Err