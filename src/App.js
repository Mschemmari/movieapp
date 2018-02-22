import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieBox from './MovieBox.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';


Axios.get('https://pokeapi.co/api/v2/pokemon/')
   .then((response)=>console.log(response))
   .catch((error)=>console.log(error));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"></p>
        <MovieBox/>
      </div>
    );
  }
}

export default App;
