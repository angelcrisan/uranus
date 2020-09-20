import React from 'react';
import { CardContainer } from './Card';
import './ContentHomepage.css';
import stars from "./stars.svg";

export class ContentHomepage extends React.Component {
state={
    topRatedMovies: [],
    bestComedies: [],
    bestDramas: []
}  

getAllMovies = () =>{
 
    if (localStorage.getItem("bestRatedMovies")) {
        this.setState({
            topRatedMovies: JSON.parse(localStorage.getItem("bestRatedMovies")),
            bestComedies: JSON.parse(localStorage.getItem("bestComedies")),
            bestDramas: JSON.parse(localStorage.getItem("bestDramas"))
    }) 
    } else{
        fetch("https://movies-app-siit.herokuapp.com/movies?take=9999999&skip=0")
        .then((response)=> response.json())
        .then((json)=>{
           
            this.setState({
            topRatedMovies: json.results
                .filter(movie => movie.imdbRating >8.5)
                .sort(function(firstMovie, NextMovie){
                 return NextMovie.imdbRating-firstMovie.imdbRating}),
            bestComedies: json.results
                 .filter(movie => movie.imdbRating > 7.4 && movie.Genre.includes("Comedy"))
                 .sort(function(firstMovie, NextMovie){
                    return NextMovie.imdbRating-firstMovie.imdbRating}),
            bestDramas: json.results
                 .filter(movie => movie.imdbRating > 8.0 && movie.Genre.includes("Drama"))
                 .sort(function(firstMovie, NextMovie){
                    return NextMovie.imdbRating-firstMovie.imdbRating})
                   
                })  
            
             localStorage.setItem("bestRatedMovies", JSON.stringify(this.state.topRatedMovies))
             localStorage.setItem("bestComedies", JSON.stringify(this.state.bestComedies))
             localStorage.setItem("bestDramas", JSON.stringify(this.state.bestDramas))
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
                    containerClass = "card-Container"
                    textContainerClass ="card-text" 
                    cardTitleClass = "card-title"
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
                    containerClass = "card-Container"
                    textContainerClass ="card-text"
                    cardTitleClass = "card-title"

                    key={index} 
                    Title={element.Title} 
                    Poster={element.Poster} 
                    imdbRating={element.imdbRating} />  
                ))}
            </div>
            <div className="Best-Dramas">
                    <p className="Best-Dramas-Text">Best Dramas</p>
            </div>
            <div className="Cards-Container">
                {this.state.bestDramas.map((element,index)=>(
                    <CardContainer 
                    containerClass = "card-Container"
                    textContainerClass ="card-text"
                    cardTitleClass = "card-title"
                    cardImdbratingClass = "card-imdbRating"
                    imgSrcClass = "card-img"
                    posterClass = "posters"
                    key={index} 
                    Title={element.Title} 
                    Poster={element.Poster} 
                    imdbRating={element.imdbRating} />  
                ))}
            </div>
            
            <br></br>
        </div> 

    );

    }
}