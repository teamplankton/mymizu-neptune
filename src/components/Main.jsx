import React from "react";
import Map from "./Map";
import Info from "./Info";
import Navbar from "./Navbar";
import Rating from "./Rating";
import Route from "./Route";

export default function Main() {
  return (
    <>
      <div>
        <Map />
      </div>
      <Navbar />
      <Info />
      <Rating />
    </>
  );
}
