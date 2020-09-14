import React from 'react';
import { Header } from "../../components/header/Header"
import './Homepage.css';
import { ContentHomepage } from './ContentHomepage';
import { FooterComponent } from '../../components/footer/FooterInfo';






export function Homepage(){
    return (
        <div className="Home-Page">
        <Header />
        <ContentHomepage />
        <FooterComponent />
        </div>
    )

}