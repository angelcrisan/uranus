import React from 'react';
import { AppLogo } from './AppLogo';
import "./Header.css";
import burgerButton from "../../burger-button.svg" 
import search from "../../search.svg";
import { Link } from 'react-router-dom';
// import { CustomDropDown } from './Dropdown'; 


export class Header extends React.Component {
   
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
                <a>Homepage</a>
                </Link>
                <a>Search</a>
                <Link to="/all-movies-page">
                    <a>All movies</a>
                </Link>
                <Link to="/about-us-page">
                <a>About us</a>
                </Link>
            </div>
            
            <p>Menu</p>
            {/* <CustomDropDown title="Home Page" list={this.state.location} toggleItem = {this.toggleSelected} /> */}

        </div>
        <div className="Simple-Search">
            <img src={search} alt="search" className="Search-icon"></img>
            <input className="Search-Input"></input>
        </div>
        <div className="Register-container">
            <Link to="/login">
                <button className="Register-Button">Register/Sign In</button>
            </Link>
        </div>
        </div>
    )
}
}
