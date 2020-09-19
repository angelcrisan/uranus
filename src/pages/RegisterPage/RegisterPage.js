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
    
    //   render(){    
    //   return (
    //             <div className="CreateAccountBody" >
    //                 <img src={PopSuc} alt="popsuc" className="pop-suc"></img>
    //                 <div className="Inputs-Container">
    //                 <InputBar 
    //                   label="UserName" 
    //                   type="text" 
    //                   placeholder="Type your username" 
    //                   value={this.state.value}
    //                   onChangeValue={this.handleChangeUsername}
    //                   />
    //                 <InputBar 
    //                   label="Password" 
    //                   type="password" 
    //                   placeholder="Type your password"
    //                   value={this.state.value}
    //                   onChangeValue={this.handleChangePassword} 
    //                   />
    //                 <InputBar 
    //                   label="Retype Password" 
    //                   type="password" 
    //                   placeholder="Please retype your password"
    //                   value={this.state.value}
    //                   onChangeValue={this.handleChangeRetypePassword} 
    //                   />
    //                 <div className="buttons-container">  
    //                     <Button 
    //                       className="create-account-button" 
    //                       label="Create Account"
    //                       onSubmit={this.handleCreateAccount}  
    //                       />                    
    //                 </div>
    //               </div>   
    //             </div>
    //         );
    //   }
   
   
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