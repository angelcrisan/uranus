import React from 'react';
import { AppLogo } from './AppLogo';
import "./Header.css";
import burgerButton from "../../burger-button.svg" 
import search from "../../search.svg";
import { Link } from 'react-router-dom';

export class Header extends React.Component {
   
checkIfLoggedIn =() => {
        if (localStorage.getItem("accessToken")) {
            return(
                <button className="Register-Button" onClick={this.handleLogOut}>Log Out</button>
            )
        } else {
           return(
            <Link to="/login">
                <button className="Register-Button">Register/Sign In</button>
            </Link>
            )
        }
    }

   handleLogOut =() =>{
        fetch("https://movies-app-siit.herokuapp.com/auth/logout", {
      method: "GET",
      headers: {
        "X-Auth-Token": localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.removeItem("accessToken")
      }).catch(json => {
          if (json.message === "User logged out successfully" ) {
              //refresh page or something :)
          }else {
              alert("Something bad happen when trying to Log you out, please retry!")
          }
      });
   } 
    render(){
    return (
        <div className= "header-container">
        <AppLogo />
        <div className="Menu-container">
           <div className="button">
                <button className="dropdown"> 
                <img src={burgerButton} alt="Menu" className="Burger-Button"></img>
                </button>
           </div>
           <div className="Dropdown-content">
               <Link to="/">
                   <p>Homepage</p>
                </Link>
                <p>Search</p>
                <Link to="/all-movies-page">
                    <p>All movies</p>
                </Link>
                <Link to="/about-us-page">
                    <p>About us</p>
                </Link>
            </div>
            
            <p>Menu</p>

        </div>
        <div className="Simple-Search">
            <img src={search} alt="search" className="Search-icon"></img>
            <input className="Search-Input"></input>
        </div>
        <div className="Register-container">
           {this.checkIfLoggedIn()}
        </div>
        </div>
    )
}
}
