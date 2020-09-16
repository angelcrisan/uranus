import React from 'react';
import { CardContainer } from './Card';
import './ContentHomepage.css';
import stars from "./stars.svg";

export class ContentHomepage extends React.Component {
state={
    topRatedMovies: [],
    bestComedies: []
}  

getAllMovies = () =>{
 
    if (false){//localStorage.getItem("bestRatedMovies")) {
           // this.setState({Movies: JSON.parse(localStorage.getItem("bestRatedMovies"))}) 
    } else{
        fetch("https://movies-app-siit.herokuapp.com/movies?take=9999999&skip=0")
        .then((response)=> response.json())
        .then((json)=>{
        console.log(json.results);
           
            this.setState({
                topRatedMovies: json.results
                .filter(movie => movie.imdbRating >8.5)
                .sort(function(firstMovie, NextMovie){
                 return NextMovie.imdbRating-firstMovie.imdbRating}),
                 bestComedies: json.results
                 .filter(movie => movie.imdbRating > 7.4 && movie.Genre.includes("Comedy"))
                 .sort(function(firstMovie, NextMovie){
                    return NextMovie.imdbRating-firstMovie.imdbRating})
                })  
             console.log(this.state.bestComedies);
        })
        } 
    }
    
componentDidMount() {
    this.getAllMovies()
 }   

render (){

return (
        <div className="Content-Homepage-Container" >
            <div className="Best-Rated-Movies">
                <p className="Best-Rated-Text">Best Rated Movies</p>
                <img src={stars} alt="stars" className="Stars-Image"></img>
            </div>
            <div className="Cards-Container">
                {this.state.topRatedMovies.map((element,index)=>(
                    <CardContainer 
                    key={index} 
                    Title={element.Title} 
                    Poster={element.Poster} 
                    imdbRating={element.imdbRating} />  
                ))}
            </div>
            <div className="Best-Comedies">
                    <p className="Best-Comedies-Text">Best Comedies</p>
            </div>
            <div className="Cards-Container">
                {this.state.bestComedies.map((element,index)=>(
                    <CardContainer 
                    key={index} 
                    Title={element.Title} 
                    Poster={element.Poster} 
                    imdbRating={element.imdbRating} />  
                ))}
            </div><br></br>
        </div> 

    );

    }
}