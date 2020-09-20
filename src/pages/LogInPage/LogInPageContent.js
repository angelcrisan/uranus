import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import './LogInPageContent.css';


export class LogIn extends React.Component{
    state = {
        username: '',
        password:''
      };
  
    
    handleChangeUsername = event => this.setState({username: event.target.value}) 
    
    handleChangePassword = event => this.setState({password: event.target.value})

    handleLogIn = ()=> {
      fetch("https://movies-app-siit.herokuapp.com/auth/login", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
         if(this.state.username === '' || this.state.password === ''){
            alert("Please provide values for Username or Password")
            return
            }if (json.message === "Wrong password") {
            alert("Incorrect credentials!!")
            return
          } if (json.message === "User not found") {
            alert("User not found! Not a menber yet?")
            return
          } 
        localStorage.setItem("accessToken", json.accessToken);
        window.location.reload()             
        });
    }

    render(){
       
        return(
            <div className="page-content">
                <h3 className="title">Log in</h3> 
                <p>Username:</p>
                <input 
                    value={this.state.value} 
                    onBlur={this.handleChangeUsername}>
                </input>
                <p>Password:</p>
                <input 
                    className="last-input" 
                    type="password" 
                    value={this.state.value} 
                    onBlur={this.handleChangePassword}>
                </input>
                <br></br>
            <div className="linkToRegister">
                <Link to="/Register-Page-Content">
                    <p>Not a member yet?</p>
                </Link>
            </div>
            <br></br>
                <Link to="/">
                <button className="log-in-button" onClick={this.handleLogIn} >
                  Log In
                  </button>
                  </Link>
            </div>
        )
    }
}