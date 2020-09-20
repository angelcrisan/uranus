import React from 'react';
import './MovieDetailsPage.css';

export class MovieDetails extends React.Component{

state = {
    UserState:false,
    MovieInformation: {}
}

getMovieInfo = (MovieID) =>{
    fetch(`https://movies-app-siit.herokuapp.com/movies/${MovieID}`)
        .then((response)=> response.json())
        .then((json)=>{
            console.log(json);
            this.setState({MovieInformation: json})
        })
}

componentDidMount(){
    this.handleUserState();
    const [search, id] = this.props.location.search.split("=");
    this.getMovieInfo(id)
}

handleUserState = () => {
    if(localStorage.getItem("accessToken")){
        this.setState({
            UserState: true
        })
    }
}

    render(){
        return(
            <div className="single-card-container">
                <div>
                    <img src={this.state.MovieInformation.Poster} alt="poster"></img>
                </div>
                <div className="movie-information-container">
                <p>Title: {(this.state.UserState ? "" : this.state.MovieInformation.Title)}<input className={(this.state.UserState ? "show" : 'hidden')}></input></p>
                <p>Year: {(this.state.UserState ? "" : this.state.MovieInformation.Year)}<input className={(this.state.UserState ? "show" : 'hidden')}></input></p>
                <p>Released: {(this.state.UserState ? "" : this.state.MovieInformation.Released)}<input className={(this.state.UserState ? "show" : 'hidden')}></input></p>
                <p>Runtime: {(this.state.UserState ? "" : this.state.MovieInformation.Runtime)}<input className={(this.state.UserState ? "show" : 'hidden')}></input></p>
                <p>Genre: {(this.state.UserState ? "" : this.state.MovieInformation.Genre)}<input className={(this.state.UserState ? "show" : 'hidden')}></input></p>
                <p>Director: {(this.state.UserState ? "" : this.state.MovieInformation.Director)}<input className={(this.state.UserState ? "show" : 'hidden')}></input></p>
                <p>Actors: {(this.state.UserState ? "" : this.state.MovieInformation.Actors)}<input className={(this.state.UserState ? "show" : 'hidden')}></input></p>
                <p>Country: {(this.state.UserState ? "" : this.state.MovieInformation.Country)}<input className={(this.state.UserState ? "show" : 'hidden')}></input></p>
                <p>imdbRating: {(this.state.UserState ? "" : this.state.MovieInformation.imdbRating)}<input className={(this.state.UserState ? "show" : 'hidden')}></input></p>
                </div>
            </div>

        )

    }
}