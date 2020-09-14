import React from 'react';
import "./Card.css"

export function CardContainer (props) {
   return(
      <div className="card-Container" >
        <h4 className="card-title">{props.Title}</h4>
        <img src={props.Poster} alt="poster" className="card-img"></img>
        <p className="card-imdbRating">{props.imdbRating}</p>
      </div>

   )
};

