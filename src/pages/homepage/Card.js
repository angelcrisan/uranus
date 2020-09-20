import React from 'react';
import { withRouter } from 'react-router-dom';
import "./Card.css"

class CardContainer extends React.Component{

   handleOnCLick = () => {
      this.props.history.push(`/movie-details-page?movieId=${this.props.id}`)
   }
  render(){ 
   return(
      <div className={this.props.containerClass} onClick={this.handleOnCLick}>
        <div className={this.props.textContainerClass}>
        <h4 className={this.props.cardTitleClass}>{this.props.Title}</h4> 
        <p className={this.props.cardImdbratingClass}>{this.props.imdbRating}</p>
        </div> 
        <div className={this.props.posterClass}>
           <img src={this.props.Poster} alt="poster" className={this.props.imgSrcClass}></img>
        </div>
        
      </div>

   )
}
}

export default withRouter(CardContainer);
