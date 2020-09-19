import React from 'react';
import './SearchPage.css';
export class SearchPage extends React.Component{
    render(){
        return(
            <div>
            <h3>Search By:</h3> 
            <div className="search">
              <div className="first-rows"> <p>Title:</p> <input type="text"></input> 
               <p>Year:</p> <input type="text"></input>
               <p>Genre:</p> <input type="text" ></input>
               <p>Language:</p> <input type="text"></input> 
               <p>Country:</p> <input type="text"></input> 
               </div>
               <div className="second-rows">
               <p>Poster:</p> <input type="text"></input> 
               <p>Rating:</p> <input type="text"></input> 
               <p>Votes:</p> <input type="text"></input> 
               <p>ID:</p> <input type="text"></input>
               <p>Type:</p> <input type="text"></input> 
               </div>
               
               <button className="search-button">Search</button> 
               
            </div>
            </div>
           
        )
    }
};
    