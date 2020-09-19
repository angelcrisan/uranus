import React from 'react';
import './RegisterPage.css';

export class RegisterPage extends React.Component{
    state = {
        username: '',
        password:'',
        retypepassword:'',
      };
    
    handleChangeUsername = event => this.setState({username: event.target.value}) 
    handleChangePassword = event => this.setState({password: event.target.value})
    handleChangeRetypePassword = event => this.setState({retypepassword: event.target.value})

    handleRegisterAccount = ()=> {
      if (this.state.password !== this.state.retypepassword) {
        alert("Password doesn't match!!")
      } if (this.state.username === '' || this.state.password === '') {
        alert("All fields must contain values!!")
      }else {
          fetch("https://movies-app-siit.herokuapp.com/auth/register", {
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
            if (json.message === "Username already existing") {
             alert("Username already existing!! Please go to Log in Page.")
            }else{
             localStorage.setItem("accessToken", json.accessToken);
            }
          });
      }
    }
   
    render(){
        return(
        <div className = "Register-Page-Content"> 
        <h2>Register</h2>
        {/* <br></br> */}
        <p>Enter your username</p>
        <input 
            value={this.state.value}
            onChange={this.handleChangeUsername}>
        </input>
        <p>Enter your password</p>
        <input
            type="password"
            value={this.state.value}
            onChange={this.handleChangePassword}>

        </input>
        <p>Re-enter your password</p>
        <input
            type="password"
            value={this.state.value}
            onChange={this.handleChangeRetypePassword}>
        </input>
        <br></br>
        <br></br>

        <button onClick={this.handleRegisterAccount}>Create account</button>
        
        </div>)
        
    }
}