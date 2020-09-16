import React from 'react';

import './App.css';
// import { LogInPage } from './pages/LogInPage/LogInPage';
import { Homepage } from './pages/homepage/Homepage';
// import { AllMoviesPage } from './pages/SecondPage/AllMoviesPage';


export class App extends React.Component {
 render(){ 
  return (
    <div className="App">
    <Homepage />
    {/* <AllMoviesPage /> */}
    {/* <LogInPage /> */}
    </div>
  );
}
}

