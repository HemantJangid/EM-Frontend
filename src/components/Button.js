import React from 'react'
import hex from '../assets/img/design/hex.svg'

function Button(props) {
    return (
        <div className="em-btn">
            <img src={hex} alt="Hexagon arrow" />
            <h4 className="ml-3">{props.text}</h4>
        </div>
    )
}

export default Button
