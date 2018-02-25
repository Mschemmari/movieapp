import React, { Component } from 'react';
import './App.css';
import MovieBox from './MovieBox.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Axios from 'axios';


// Axios.get('https://pokeapi.co/api/v2/pokemon/')
//    .then((response)=>console.log(response))
//    .catch((error)=>console.log(error));

const movies = [
 {
 name: "Thor Ragnarok",
 },
 {
 name: "Back to the Future",
 },
 {
 name: "Robocop",
 },
];

class App extends Component {
  render() {
    const ItemsSection = movies.map((movie)=>
      <MovieBox titulo={movies.name} key={movie}/>
    );
    return (
      <div className="App">
      <div>{ItemsSection}</div>
      </div>
    );
  }
}

export default App;
