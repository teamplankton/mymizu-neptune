import React from "react";
// import logo from './logo.svg';
import "./App.css";

//components
import Map from "./components/Map";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Rating from "./components/Rating";
import Route from "./components/Route";

function App() {
  return (
    <div className="App">
      <Map />
      <Info />
      <Navbar />
      <Rating />
      <Route />
    </div>
  );
}

export default App;
