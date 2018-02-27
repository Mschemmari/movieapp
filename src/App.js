import React, { Component } from 'react';
import './App.css';
import MovieBox from './MovieBox.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'material-icons/css/material-icons.min.css'
// import Axios from 'axios';


// Axios.get('https://pokeapi.co/api/v2/pokemon/')
//    .then((response)=>console.log(response))
//    .catch((error)=>console.log(error));

var movies = [
 {
 name: "Thor Ragnarok",
 viewed: true,
 },
 {
 name: "Back to the Future",
 viewed: true,
 },
 {
 name: "Robocop",
 viewed: false,
 },
];
class App extends Component {
  render() {
    const ItemsSection = movies.map((movies)=>
      <MovieBox titulo={movies.name} key={movies.name}/>
    );
    return (
          <div className="App">
            <div className="container">
              <div className="row">
                {ItemsSection}
              </div>
            </div>
          </div>
    );
  }
}

export default App;
