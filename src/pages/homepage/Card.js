import React from 'react';
import "./Card.css"

export function CardContainer (props) {
   return(
      <div className="card-Container" >
        <div className="card-text">
        <h4 className="card-title">{props.Title}</h4> 
        <p className="card-imdbRating">{props.imdbRating}</p>
        </div> 
        <div className="posters">
           <img src={props.Poster} alt="poster" className="card-img"></img>
        </div>
        
      </div>

   )
};

