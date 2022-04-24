import React from 'react'

import "./Button.css"

const Button = (btn) => {
    let classes = "button "
    classes += btn.operation ? "operation" : ""
    classes += btn.double ? "double" : ""
    classes += btn.triple ? "triple" : ""
    classes += btn.result ? "result" : ""

    return <button className={ classes } onClick={ () => btn.click && btn.click(btn.label)}>
                {btn.label}
            </button>
}

export default Button