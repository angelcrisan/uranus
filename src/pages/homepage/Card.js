import React from 'react';
import "./Card.css"

export function CardContainer (props) {
   return(
      <div className={props.containerClass} >
        <div className={props.textContainerClass}>
        <h4 className={props.cardTitleClass}>{props.Title}</h4> 
        <p className={props.cardImdbratingClass}>{props.imdbRating}</p>
        </div> 
        <div className={props.posterClass}>
           <img src={props.Poster} alt="poster" className={props.imgSrcClass}></img>
        </div>
        
      </div>

   )
};

