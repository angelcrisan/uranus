import React from 'react';
import { AppLogo } from './AppLogo';
import "./Header.css";
import burgerButton from "../../burger-button.svg"
import search from "../../search.svg";

export function Header(){
    return (
        <div className= "header-container">
        <AppLogo />
        <div className="Menu-container">
            <img src={burgerButton} alt="Menu" className="Burger-Button"></img>
            <p>Menu</p>
        </div>
        <div className="Simple-Search">
            <img src={search} alt="search" className="Search-icon"></img>
            <input className="Search-Input"></input>
        </div>
        <div className="Register-container">
            <button className="Register-Button">Register/Sign In</button>
        </div>
        </div>
    )
}