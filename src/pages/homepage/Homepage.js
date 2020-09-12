import React from 'react';
import { Header } from "../../components/header/Header"
import './Homepage.css';
import { ContentHomepage } from './ContentHomepage';


export function Homepage(){
    return (
        <div className="Home-Page">
        <Header />
        <ContentHomepage />
        </div>
    )

}