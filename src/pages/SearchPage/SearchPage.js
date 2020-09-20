import React from 'react';
import './SearchPage.css'
import  SearchResults  from "./SearchResults";
const appendQuery = require("append-query");

export class SearchPage extends React.Component {
    state = {
        movieData: null,
        searchData: {
            Title: null,
            Year: null,
            Runtime: null,
            Genre: null,
            Language: null,
            Country: null,
            Poster: null,
            imdbRating: null,
            imdbVotes: null,
            imdbId: null,
            Type: null
        }
    };

    handleInputChange = (e) => {
        const newState = { ...this.state };
        newState.searchData[e.target.name] = e.target.value || null;
        this.setState(newState);
    }

    onSearchClick = () => {
        const url = appendQuery(
            "https://movies-app-siit.herokuapp.com/movies", 
            this.state.searchData, 
            { removeNull: true}
        );
        fetch(url)
        .then(res => res.json())
        .then(json => this.setState({ movieData: json }));
    
    }

    render() {
        const {
            Title,
            Year, 
            Runtime, 
            Genre, 
            Language, 
            Country, 
            Poster, 
            imdbRating, 
            imdbVotes, 
            imdbId, 
            Type
        } = this.state;

        return (
            <div>
                <h3>Search By:</h3> 
                    <div className="search">
                        <form onChange={this.handleInputChange}>
                            <div className="first-rows"> 
                                <label><p>Title:</p> <input type="text" name="Title" value={Title} /></label>
                                <label><p>Year:</p> <input type="text" name="Year" value={Year} /> </label>
                                <label><p>Runtime:</p> <input type="text" name="Runtime" value={Runtime} /> </label>
                                <label><p>Genre:</p> <input type="text" name="Genre" value={Genre} /> </label>
                                <label><p>Language:</p> <input type="text" name="Language" value={Language} />  </label>
                                <label><p>Country:</p> <input type="text" name="Country" value={Country} /> </label>
                            </div>
                            <div className="second-rows">
                                <label><p>Poster:</p> <input type="text" name="Poster" value={Poster} /> </label>
                                <label><p>Rating:</p> <input type="text" name="imdbRating" value={imdbRating} /> </label>
                                <label><p>Votes:</p> <input type="text" name="imdbVotes" value={imdbVotes} /> </label>
                                <label> <p>ID:</p> <input type="text" name="imdbId" value={imdbId} /> </label>
                                <label> <p>Type:</p> <input type="text" name="Type" value={Type} /> </label>
                            </div>
                        </form>
                        <button className="search-button" onClick={this.onSearchClick}>Search</button>  
                    </div>
                <SearchResults movieData={this.state.movieData} />
            </div> 
        )
    }
};
    