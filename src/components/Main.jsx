import React, { useState } from "react";
import Map from "./Map";
import Info from "./Info";
import Navbar from "./Navbar";
import Rating from "./Rating";
import Route from "./Route";

export default function Main() {
  const [view, setView] = useState(false);
  return (
    <>
      <div>
        <Map />
      </div>
      {view ? <Info /> : <Navbar />}
    </>
  );
}
