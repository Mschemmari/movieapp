import React, { Component } from 'react';
import './App.css';
import MovieBox from './MovieBox.js';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css'
import 'material-icons/css/material-icons.min.css'
=======
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
>>>>>>> b95825b889fdda5aa7e16a3066e7075c598701a7
// import Axios from 'axios';


// Axios.get('https://pokeapi.co/api/v2/pokemon/')
//    .then((response)=>console.log(response))
//    .catch((error)=>console.log(error));
<<<<<<< HEAD
=======

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
>>>>>>> b95825b889fdda5aa7e16a3066e7075c598701a7

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
<<<<<<< HEAD
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
=======
    const ItemsSection = movies.map((movie)=>
      <MovieBox titulo={movies.name} key={movie}/>
    );
    return (
      <div className="App">
      <div>{ItemsSection}</div>
      </div>
>>>>>>> b95825b889fdda5aa7e16a3066e7075c598701a7
    );
  }
}

export default App;
