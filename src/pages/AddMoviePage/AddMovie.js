import React from 'react';
import './AddMovie.css';

export class AddMoviePage extends React.Component{
    state ={
        titleValue: "",
        yearValue: "",
        imageUrlValue: "",
        releaseValue: "",
        runtimeValue: "",
        genreValue: "",
        directorValue: "",
        actorsValue: "",
        imdbRatingValue: "",
        countryValue: "",
        URLtyped: ""
    }

    updateTitleValue = (event) => {
        this.setState({
            titleValue: event.target.value 
        })
    }

    updateYearValue = (event) => {
        this.setState({
            yearValue: event.target.value
        })
    }


    updateImageUrlValue = (event) => {
            this.setState({
                imageUrlValue: event.target.value
            })
        }

    updateReleasedValue = (event) => {
            this.setState({
                releaseValue: event.target.value
            })
        }

    updateRuntimeValue = (event) => {
            this.setState({
                runtimeValue: event.target.value
            })
        }

    updateGenreValue = (event) => {
            this.setState({
                genreValue: event.target.value
            })
        }
        
    updateDirectorValue = (event) => {
            this.setState({
                directorValue: event.target.value
            })
        }

    updateActorsValue = (event) => {
            this.setState({
                actorsValue: event.target.value
            })
        }


    updateimdbRatingValue = (event) => {
            this.setState({
                imdbRatingValue: event.target.value
            })
        }

    updateCountryValue = (event) => {
            this.setState({
                countryValue: event.target.value
            })
        }

        
    handleSaveButton = () => {
            fetch("https://movies-app-siit.herokuapp.com/movies", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Auth-Token": localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        Title: this.state.titleValue,
        Year: this.state.yearValue,
        ImageUrl: this.state.imageUrlValue,
        Released: this.state.releaseValue,
        Runtime: this.state.runtimeValue,
        Genre: this.state.genreValue,
        Director: this.state.directorValue,
        Actors: this.state.actorsValue,
        Country: this.state.countryValue,
        imdbRating: this.state.imdbRatingValue
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
        }

    checkIfUrlTyped = () => {
            if (this.state.URLtyped) {
                return <img src={this.state.URLtyped} alt="poster" className="poster-img"></img>
            } else {
              return <p>Your poster</p> 
            }
        }

    renderPoster = (imgSrc) => {
            console.log(imgSrc.target.value);
            this.setState({
                URLtyped: imgSrc.target.value
            })
           
        }

    render(){
        return(
            <div className="add-a-movie-page">

                <div className="poster-container">
                    {this.checkIfUrlTyped()}
                </div>  
              
            <div className="add-movie-content">
                <h2>Add a movie</h2>
                <p className="paragraph">Title: <input value={this.state.titleValue} onChange={this.updateTitleValue}></input></p>
                <p>Year: <input value={this.state.yearValue} onChange={this.updateYearValue}></input></p>
                <p>Image Url: <input value={this.state.imageUrlValue} onChange={this.updateImageUrlValue} onBlur={this.renderPoster}></input></p>
                <p>Released: <input value={this.state.releasedValue} onChange={this.updateReleasedValue}></input></p>
                <p>Runtime: <input value={this.state.runtimeValue} onChange={this.updateRuntimeValue}></input></p>
                <p>Genre: <input value={this.state.genreValue} onChange={this.updateGenreValue}></input></p>
                <p>Director: <input value={this.state.directorValue} onChange={this.updateDirectorValue}></input></p>
                <p>Actors: <input value={this.state.actorsValue} onChange={this.updateActorsValue}></input></p>
                <p>Country: <input value={this.state.countryValue} onChange={this.updateCountryValue}></input></p>
                <p>imdbRating: <input value={this.state.imdbRatingValue} onChange={this.updateimdbRatingValue}></input></p>
                <button className="save-and-cancel-button" onClick={this.handleSaveButton}>Save</button>
                <button className="save-and-cancel-button">Cancel</button>
            </div>
            
         </div>
        )
    }
}