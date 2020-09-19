import React from 'react';
import './SearchPage.css';
export class SearchPage extends React.Component{
    render(){
        return(
            <div class="search">
                <h3>Search By:</h3> <br></br>
               <p>Title:</p> <input type="text"></input> <br></br>
               <p>Year:</p> <input type="text"></input> <br></br>
               <p>Runtime:</p> <input type="text"></input> <br></br>
               <p>Genre:</p> <input type="text"></input> <br></br>
               <p>Language:</p> <input type="text"></input> <br></br>
               <p>Country:</p> <input type="text"></input> <br></br>
               <p>Poster:</p> <input type="text"></input> <br></br>
               <p>Rating:</p> <input type="text"></input> <br></br>
               <p>Votes:</p> <input type="text"></input> <br></br>
               <p>ID:</p> <input type="text"></input> <br></br>
               <p>Type:</p> <input type="text"></input> <br></br>
               
               <button id="search-button">Search</button>     
            </div>
           
        )
    }
};
    