import React from "react";
import './login.css'
import Input from "../../components/input/input";
import ButtonLogin from "../../components/button-login/button-login";

const Login = () => {
    return (
        <div className="full-page">
            <div className="container">
                <section className="sectionn"><p>Login</p></section>
                <Input type="email" placeholder = "Enter Your Email" color="#77ACA2" />
                <Input type="password" placeholder="Enter Your Password" color="#468189"/>
                <ButtonLogin text="Dodaj" color="red"/>
            </div>
        </div>
    )
}
export default Login