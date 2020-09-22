import React from 'react';
import { Link } from 'react-router-dom';
import './MovieDetailsPage.css';

export class MovieDetails extends React.Component{

state = {
    UserState:false,
    MovieInformation: {},
    EditButtonState: false,
    MovieID: "",
    redirect: false
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
    const [search, id] = this.props.location.search.split("=");
    this.setState({MovieID: id})
    this.getMovieInfo(id)
}

handleUserState = () => {
    if(localStorage.getItem("accessToken")){
        this.setState({
            UserState: true
        })
    }
}

handleDeleteButton = ()=>{
    fetch(`https://movies-app-siit.herokuapp.com/movies/${this.state.MovieID}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "X-Auth-Token": localStorage.getItem("accessToken")
                },
          })
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              localStorage.removeItem("bestRatedMovies");
              window.location.reload();
            });
}

renderEditStateIfUserLoggedIn = ()=>{
        if (localStorage.getItem("accessToken")) { 
            return(
            <div>   
                {this.handleRenderingButtons()}
                
            </div>
            )}
}

handleEditButton = () => {
    this.setState({EditButtonState:true})
    this.handleUserState()
}

handleCancelButton = () =>{
    this.setState({EditButtonState: false, UserState:false})
}

handleSaveButton = () => {
    fetch(`https://movies-app-siit.herokuapp.com/movies/${this.state.MovieID}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Auth-Token": localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        Poster: "Stefan cel Mare",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
}

handleRenderingButtons = () => {
    if(!this.state.EditButtonState){
      return (
      <div>
      <button onClick={this.handleEditButton}>Edit</button>
      <Link to="/">
      <button onClick={this.handleDeleteButton}>Delete</button>
      </Link>
      </div>
      )
    } else{
       return (
       <div>
       <button onClick={this.handleSaveButton}>Save</button>
       <button onClick={this.handleCancelButton}>Cancel</button>
       </div>
       )
    } 
}

    render(){
        return(
            <div className="single-card-container">
                <div>
                    <img src={this.state.MovieInformation.Poster} alt="poster"></img>
                </div>
                <div className="movie-information-container">
                <p>Title: {(this.state.UserState ? "" : this.state.MovieInformation.Title)}
                    <input className={"edit-imputs"+(this.state.UserState ? " show" : ' hidden')}>
                        </input>
                </p>
                <p>Year: {(this.state.UserState ? "" : this.state.MovieInformation.Year)}
                    <input className={(this.state.UserState ? " show" : ' hidden')}>
                        </input>
                </p>
                <p className={`Poster ${(this.state.UserState ? "show" : 'hidden')}`}>Poster: {(this.state.UserState ? "" : this.state.MovieInformation.Poster)}
                    <input className={(this.state.UserState ? "show" : 'hidden')}>
                        </input>
                </p>
                <p>Released: {(this.state.UserState ? "" : this.state.MovieInformation.Released)}
                    <input className={(this.state.UserState ? " show" : ' hidden')}>
                    </input>
                </p>
                <p>Runtime: {(this.state.UserState ? "" : this.state.MovieInformation.Runtime)}
                    <input className={(this.state.UserState ? " show" : ' hidden')}>
                    </input>
                </p>
                <p>Genre: {(this.state.UserState ? "" : this.state.MovieInformation.Genre)}
                    <input className={(this.state.UserState ? " show" : ' hidden')}>
                    </input>
                </p>
                <p>Director: {(this.state.UserState ? "" : this.state.MovieInformation.Director)}
                    <input className={(this.state.UserState ? " show" : ' hidden')}>
                    </input>
                </p>
                <p>Actors: {(this.state.UserState ? "" : this.state.MovieInformation.Actors)}
                    <input className={(this.state.UserState ? " show" : ' hidden')}>
                    </input>
                </p>
                <p>Country: {(this.state.UserState ? "" : this.state.MovieInformation.Country)}
                    <input className={(this.state.UserState ? " show" : ' hidden')}>
                    </input>
                </p>
                <p>imdbRating: {(this.state.UserState ? "" : this.state.MovieInformation.imdbRating)}
                    <input className={(this.state.UserState ? " show" : ' hidden')}>
                    </input>
                </p>
                </div>
                <div className="edit-and-delete-buttons">
                    {this.renderEditStateIfUserLoggedIn()}
                </div>
        
            </div>

        )

    }
}