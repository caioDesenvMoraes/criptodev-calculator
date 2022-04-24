import React, { Component } from "react"

import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
import Display from "../../components/Display/Display"

import "./Calculator.css"

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
export default class Calculator extends Component {

    state = { ...initialState }
    
    clearMemory() {
            // setando pro estado inicial
            this.setState({ ...initialState })
    }
    
    setOperation(operation) {
        if(this.state.current === 0) {
            // setando o estado
            this.setState({clearDisplay: true, operation, current: 1})
        } else {
            // pegando a operação igual (result) "="
            const result = operation === "="
            const currentOperation = this.state.operation

            // clonando o array values
            const values = [ ...this.state.values ]

            // selecionando a operação
            switch(currentOperation) {
                case "+":
                    values[0] += values[1]
                    break
                case "-":
                    values[0] -= values[1]
                    break
                case "*":
                    values[0] *= values[1]
                    break
                case "/":
                    values[0] /= values[1]
                    values[0] = parseFloat(values[0].toFixed(3))
                    break
                case "=":
                    values[0] = 0
                    break
                default:
            }

            // zerando o indice 1
            values[1] = 0

            // setando o estado
            this.setState({
                displayValue: values[0].toString(),
                clearDisplay: !result,
                operation: result ? null : operation,
                values,
                current: result ? 0 : 1
            })
            console.log(this.state.values)

        }
    }
    
    addDigit(dig) {
        // evitando colocar dois pontos na calculadora (123.45.67)
        if(dig === "." && this.state.displayValue.includes(".")) return
        // limpar o display
        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay
        // pegar o valor atual
        const currentValue = clearDisplay ? "" : this.state.displayValue
        // mostrar no display
        const displayValue = currentValue + dig
        // setando o estado
        this.setState({displayValue, clearDisplay: false})

        if(dig !== ".") {
            // pegando o indice atual
            const i = this.state.current
            // criando um novo valor transformado em float
            const newValue = parseFloat(displayValue)
            // clonando o array de valores
            const values = [ ...this.state.values ]
            // colocando o novo valor no indice atual do array
            values[i] = newValue
            // setando o estado
            this.setState({ values })
            console.log(values)
        }

        // deixando mais real
        const values = [ ...this.state.values ]
        if (values[0].toString().length > 10) {
            let maxLength = 9
            let parts = values[0].toString().split('.')
            console.log(values[0].toString().length)    
            if (parts[0].toString().length > 8) {
                console.log(parts[0].toString().length)
                this.setState({ ...initialState })
                this.setState({ displayValue: 'ERRO', clearDisplay: true })
            } else if (parts[1] === '' ){
                this.setState({ displayValue: parts[0] })
            } else {
                parts[1] = parts[1].substring(0,
                    (maxLength - parts[0].toString().length))
                
                this.setState({
                    displayValue: parts.join('.')
                })
            }
        }
    }

    render() {
        const addDigit = dig => this.addDigit(dig)
        const setOperation = ope => this.setOperation(ope)
        return(
            <>
                <NavBar/>
                <div className="container-calculator">
                    <h1>Calculadora</h1>
                    <div className="calculator">
                        {/* primeira linha */}
                        <Display value={ this.state.displayValue }/>

                        {/* segunda linha */}
                        <Button label="AC" click={ () => this.clearMemory() } triple/>
                        <Button label="/" click={ setOperation } operation/>

                        {/* terceira linha */}
                        <Button label="7" click={ addDigit }/>
                        <Button label="8" click={ addDigit }/>
                        <Button label="9" click={ addDigit }/>
                        <Button label="*" click={ setOperation } operation/>

                        {/* quarta linha */}
                        <Button label="4" click={ addDigit }/>
                        <Button label="5" click={ addDigit }/>
                        <Button label="6" click={ addDigit }/>
                        <Button label="-" click={ setOperation } operation/>

                        {/* quinta linha */}
                        <Button label="1" click={ addDigit }/>
                        <Button label="2" click={ addDigit }/>
                        <Button label="3" click={ addDigit }/>
                        <Button label="+" click={ setOperation } operation/>

                        {/* sexta linha */}
                        <Button label="0" click={ addDigit } double/>
                        <Button label="." click={ addDigit }/>
                        <Button label="=" click={ setOperation } result/>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}