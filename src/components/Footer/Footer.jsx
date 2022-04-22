import React from "react"

import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container-footer">
                    <p>Copyright © 2022 CM DEV - Todos os direitos reservados</p>
                    <div className="social-itens">
                        <a href="https://www.instagram.com/caiomutley/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://www.linkedin.com/in/caio-moraes-8026a6158/" target="_blank" rel="noreferrer">Linkedin</a>
                        <a href="https://github.com/caioDesenvMoraes" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer