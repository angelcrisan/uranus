import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Link } from 'react-router-dom';
import { CardContainer } from '../homepage/Card';
import "./AllMoviesPageContent.css";

export class AddMovie extends React.Component {
    state={
        allMovies: [],
        PaginationTake: 10,
        PaginationSkip: 0,
        value: 0
    }

getAllMovies = () => {
         if (false){//localStorage.getItem("allMovies")) {
        //     this.setState({
        //         allMovies: JSON.parse(localStorage.getItem("allMovies")),
        //         // Pagination: JSON.parse(localStorage.getItem("Pagination"))
        //          }) 
        } else{
            fetch(`https://movies-app-siit.herokuapp.com/movies?take=${this.state.PaginationTake}&skip=${this.state.PaginationSkip}`)
            .then((response)=> response.json())
            .then((json)=>{
               
                this.setState({
                    allMovies: json.results,
                    // Pagination: json.pagination
                     })

            localStorage.setItem("allMovies", JSON.stringify(this.state.allMovies));
            // localStorage.setItem("Pagination", JSON.stringify(this.state.Pagination));
        
            })
        } console.log(this.state.Pagination);       
    }
// componentDidUpdate(){
//    if (this.state.PaginationTake ) {
       
//    } 
//     this.getAllMovies()
// } 

handlePagination = (event) =>{
    console.log(event.target.innerHTML); 
    if (event.target.innerHTML === 'Next') {
        this.setState({
            PaginationTake: this.state.PaginationTake + 10,
            PaginationSkip: this.state.PaginationSkip + 10
        });
        }else{
            this.setState({
                PaginationTake: this.state.PaginationTake - 10,
                PaginationSkip: this.state.PaginationSkip - 10
            })
        }      
    console.log(this.state.PaginationSkip,this.state.PaginationTake);
    unmountComponentAtNode(document.getElementById("AllMovies-Container"))
    this.getAllMovies()
    }


componentDidMount() {
        this.getAllMovies()
     }  

   render() {
    console.log(this.state.Pagination);
       return (
        <div className="all-movies-page">
            <Link to="/add-movie-content">
            <button className="add-button">Add a movie</button>
            </Link>
        <div className="allMovies-container" id="AllMovies-Container">
            {this.state.allMovies.map((element,index)=>(
                    <CardContainer 
                    key={index} 
                    Title={element.Title} 
                    Poster={element.Poster} 
                    imdbRating={element.imdbRating} />  
                ))} 

        </div>
        <div className="pagination-container">
            <p onClick={this.handlePagination}>
                Prev
            </p>
            <p>1</p>
            <p onClick={this.handlePagination}>
                Next
            </p>
        </div>
        <br></br>
        <br></br>
        </div>
        
    );
}
}

