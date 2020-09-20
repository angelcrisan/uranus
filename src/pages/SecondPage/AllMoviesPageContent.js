import React from 'react';
import { Link } from 'react-router-dom';
import CardContainer from '../homepage/Card';
import "./AllMoviesPageContent.css";

export class AddMovie extends React.Component {
    state={
        allMovies: [],
        URL: "https://movies-app-siit.herokuapp.com/movies?take=10&skip=0",
        NextPage: "",
        PrevPage: "",
        CurrentPage: "",
        numberOfPages: ""
    }

checkIfLoggedIn =() => {
        if (localStorage.getItem("accessToken")) {
            return(
                <Link to="/add-movie-content">
        <button className="add-button">Add a movie</button>
            </Link>
            )
        } else {
           
        }
    }

getAllMovies = () => {
        fetch(this.state.URL)
            .then((response)=> response.json())
            .then((json)=>{
                console.log(json)
                this.setState({
                    allMovies: json.results,
                    NextPage: json.pagination.links.next,
                    CurrentPage: json.pagination.currentPage,
                    numberOfPages: json.pagination.numberOfPages
                     })        
            })
             
}        

handlePagination = (event) =>{
    console.log(event.target.innerHTML); 
    if (event.target.innerHTML === 'Next'){
        fetch(this.state.NextPage)
    .then((response)=> response.json())
    .then((json)=>{
        console.log(json)
        this.setState({
            allMovies: json.results,
            NextPage: json.pagination.links.next,
            PrevPage: json.pagination.links.prev,
            CurrentPage: json.pagination.currentPage
             })
             console.log(json.pagination.links.next)     
    })
} else{
    fetch(this.state.PrevPage)
    .then((response)=> response.json())
    .then((json)=>{
        console.log(json)
        this.setState({
            allMovies: json.results,
            NextPage: json.pagination.links.next,
            PrevPage: json.pagination.links.prev,
            CurrentPage: json.pagination.currentPage
             })        
    })
}       
}


componentDidMount() {
        this.getAllMovies()
     }  

   render() {
    console.log(this.state.allMovies[0]); 
       return (
        <div className="all-movies-page">
            
        <div className="allMovies-container" id="AllMovies-Container">
            {this.state.allMovies.map((element,index)=>(
        
               <CardContainer
                    id={element._id} 
                    containerClass = "allMovies-card-Container"
                    textContainerClass ="allMovies-card-text"
                    cardTitleClass = "allMovies-card-title"
                    cardImdbratingClass = "allMovies-card-imdbRating"
                    imgSrcClass = "card-img"
                    key={index} 
                    Title={element.Title} 
                    Poster={element.Poster} 
                    imdbRating={element.imdbRating} />  
                ))}

        </div>
        <div className="pagination-container">
            <p onClick={this.handlePagination} className="prev-text">
                Prev
            </p>
            <p className="currentPage">
                {this.state.CurrentPage}/{this.state.numberOfPages}
                </p>
            <p onClick={this.handlePagination} className="next-text">
                Next
            </p>
        </div>
        <div>
                {this.checkIfLoggedIn()}
        </div>
        </div>
        
    );
}
}

