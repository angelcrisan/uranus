import React from 'react';
import './LogInPageContent.css';


export class LogIn extends React.Component{
    render(){
        return(
            <div className="page-content">
                <h3 className="title">Log in</h3> 
                <p>Username:</p>
                <input></input>
                <p>Password:</p>
                <input></input>
                <h4>Not a member yet?</h4>
                <button className="log-in-button">Log In</button>
            </div>
        )
    }
}