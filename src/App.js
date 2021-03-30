<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import MapSample from "./MapSample";
=======
import React from 'react';
// import logo from './logo.svg';
import './App.css';
>>>>>>> 46e77dbbb76ffa56f35fc5e095e275b2c4e34976

//components
import Map from './components/Map';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Rating from './components/Rating';

function App() {

  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MapSample id="map" />
=======
      <Map />
      <Info />
      <Navbar />
      <Rating />
>>>>>>> 46e77dbbb76ffa56f35fc5e095e275b2c4e34976
    </div>
  );
}

export default App;
