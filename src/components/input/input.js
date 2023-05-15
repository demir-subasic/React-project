import React from "react";
import './input.css'


const Input = ({type, placeholder, color}) => {
    return (
        <div className="input-props-div">
        <input className="input-propsa" type={type} placeholder={placeholder} style={{backgroundColor: color}}/> <br></br>
        </div>
    )
}

export default Input;