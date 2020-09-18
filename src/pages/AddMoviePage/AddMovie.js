import React from 'react';
import './AddMovie.css';
// import Axios from 'axios';

export class AddMoviePage extends React.Component{
    // state = {
    //     selectedFile = null;
    // }


    // fileSelectedHandler = event =>{
    //     this.setState({
    //         selectedFile: event.target.files[0]
    //     })
    // }

    // fileUploadHandler = () => {
    //     Axios.post('')
    // }

    render(){
        return(
            <div>
            <div className="add-movie-content">
                <h2>Add a movie</h2>
                <input type="file" onChange={this.fileSelectedHandler}></input>
                <button onClick={this.fileSelectedHandler}>Upload</button>
            </div>
         </div>
        )
    }
}