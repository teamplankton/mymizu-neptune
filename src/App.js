import React from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import Map from './components/Map';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Rating from './components/Rating';

function App() {

  return (
    <div className="App">
      <Map />
      <Info />
      <Navbar />
      <Rating />
    </div>
  );
}

export default App;
