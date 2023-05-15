import React from "react";
import './button-login.css'

const ButtonLogin = ({text, color}) => {
    return (
    <button className="login-dugme" style={{backgroundColor: color}}>{text}</button>
    )
}

export default ButtonLogin
