import React from "react";

import "./Display.css"

const Display = (dsp) => {
    return <div className="display">{ dsp.value }</div>
}

export default Display