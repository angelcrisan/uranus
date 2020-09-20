import React from 'react';
import './MovieDetailsPage.css';

export class MovieDetails extends React.Component{

state = {
    UserState:false
}

handleUserState = () => {
    if(localStorage.getItem("accesToken")){
        this.setState({
            UserState: true
        })
    }
}

    render(){
        return(
            <div className="single-card-container">
                <div>
                    <img></img>
                </div>
                <p>Title: <input></input></p>
                <p>Year: <input></input></p>
                <p>Released: <input></input></p>
                <p>Runtime: <input></input></p>
                <p>Genre: <input></input></p>
                <p>Director: <input></input></p>
                <p>Actors: <input></input></p>
                <p>Country: <input></input></p>
                <p>imdbRating: <input></input></p>
            </div>
        )

    }
}