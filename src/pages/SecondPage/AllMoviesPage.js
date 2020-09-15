import React from 'react';
import { FooterComponent } from '../../components/footer/FooterInfo';
import { Header } from '../../components/header/Header';
import { AddMovie } from '../SecondPage/AllMoviesPageContent';


export function AllMoviesPage () {
    return(
        <div>
        <Header />
        <FooterComponent />
        <AddMovie />
        </div>
    )
}


