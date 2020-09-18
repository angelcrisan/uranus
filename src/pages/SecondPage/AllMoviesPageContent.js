import React from 'react';
import { Link } from 'react-router-dom';
import "./AllMoviesPageContent";

export class AddMovie extends React.Component {
   render () {
       return (
        <div>
            <Link to="/add-movie-content">
            <button className="add-button">Add a movie</button>
            </Link>
        </div>
    );
}
}

