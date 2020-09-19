import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { LogInPage } from './pages/LogInPage/LogInPage';
import { Homepage } from './pages/homepage/Homepage';
import { AllMoviesPage } from './pages/SecondPage/AllMoviesPage';
import { Header } from './components/header/Header';
import { FooterComponent } from './components/footer/FooterInfo';
import { AboutUsInfo } from './pages/AboutUsPage/AboutUs';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { AddMoviePage } from './pages/AddMoviePage/AddMovie';
import { SearchPage } from './pages/SearchPage/SearchPage';


export class App extends React.Component {
 render(){ 
  return (
   <div className="App">
   <Router> 
     <Header />
      <Switch>
        <Route path="/" exact >
          <Homepage />
        </Route>
        <Route path="/all-movies-page">
          <AllMoviesPage />
        </Route>
        <Route path="/login">
          <LogInPage />
        </Route>
        <Route path="/about-us-page">
          <AboutUsInfo />
        </Route>
        <Route path="/Register-Page-Content">
          <RegisterPage />
        </Route>
        <Route path="/add-movie-content">
          <AddMoviePage />
        </Route>
        <Route path="/search-page">
          <SearchPage/>
        </Route>
      </Switch>
      <FooterComponent />
    </Router>
    </div>
  );
}
}

