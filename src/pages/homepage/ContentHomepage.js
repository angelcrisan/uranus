import React from 'react';
import './ContentHomepage.css';
import stars from "./stars.svg";
export class ContentHomepage extends React.Component {
    state = {
        Movies: {},
    }

    getAllMovies(){
        
        if (localStorage.getItem("bestRatedMovies")) {
            // this.setState({Movies: JSON.parse(localStorage.getItem("bestRatedMovies"))}) 
        } else{
            fetch("https://movies-app-siit.herokuapp.com/movies?take=200&skip=0")
            .then((response)=> {return response.json();})
            .then((json)=>{
                
             let topRatedMovies =  [];
             
             for (const movie of json.results){
                //  console.log(movie);
               if(movie.imdbRating > 8.5){
                   
                   topRatedMovies.push(movie);
               }  
             }
             localStorage.setItem("bestRatedMovies", JSON.stringify(topRatedMovies))
             console.log(JSON.parse(localStorage.getItem("bestRatedMovies"))); 
            })
        }
    }

    render (){
        console.log(this.state);

    return (
        <div className="Content-Homepage-Container" onLoad={this.getAllMovies}>
            <div className="Best-Rated-Movies">
            <p className="Best-Rated-Text">Best Rated Movies</p>
            <img src={stars} alt="stars" className="Stars-Image"></img>
            </div>
        </div>

    );

    }
}