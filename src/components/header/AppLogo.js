import React from "react";
import planet from "../../world.svg"
import "./AppLogo.css"

export function AppLogo() {
    return (
   <div className="Logo-container">     
    <img src={planet} alt="planet" className="Logo-Pic" />
    <p className="Logo-Text">Worldwide Movies </p>
    </div>
    )
}

