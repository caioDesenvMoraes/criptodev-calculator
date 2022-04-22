import React from "react"

import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"

import "./Home.css"

const Home = () => {
    return (
        <>
            <NavBar/>
            <div className="container">
                <h1>Cripto Dev</h1>
                <div className="content">
                    <div className="info">
                        <h2>Projeto Calculadora</h2>
                        <h3>Desenvolvido em React</h3>
                        <h3>Desenvolvedor Caio Moraes</h3>
                    </div>
                    <div className="description">
                        <h3>Descrição</h3>
                        <p>
                            Projeto desenvolvido pelo curso cripto dev, aonde desenvolvi uma página web 
                            utilizando a biblioteca react com o template em JavaScript, contendo duas 
                            páginas, uma sendo a home, onde eu trago uma breve descrição sobre o projeto, 
                            e a outra página contém a calculadora, onde podemos fazer as 4 principais 
                            operações matemáticas, e desenvolvi também dois componentes, sendo um o 
                            cabeçalho, aonde tem o meu logo e os links para acessarmos as duas páginas, 
                            e o rodapé que contém a copy e os links para minhas redes sociais.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home