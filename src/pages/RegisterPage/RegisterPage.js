import React from 'react';
import './RegisterPage.css';

export class RegisterPage extends React.Component{
    render(){
        return(
        <div className = "Register-Page-Content"> 
        <h2>Register</h2>
        <br></br>
        <p>Enter your email</p>
        <input></input>
        <p>Enter your password</p>
        <input></input>
        <br></br>
        <br></br>

        <button>Create account</button>
        </div>)
    }
}