import React from 'react';
import { Link } from 'react-router-dom';
import './LogInPageContent.css';


export class LogIn extends React.Component{
    render(){
        return(
            <div className="page-content">
                <h3 className="title">Log in</h3> 
                <p>Username:</p>
                <input></input>
                <p>Password:</p>
                <input className="last-input"></input>
                <br></br>
            <div className="linkToRegister">
                <Link to="/Register-Page-Content"><a>Not a member yet?</a></Link>
            </div>
            <br></br>
                <button className="log-in-button">Log In</button>
            </div>
        )
    }
}