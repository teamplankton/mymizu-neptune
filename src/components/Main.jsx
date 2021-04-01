import React from "react";
import Map from "./Map";
import Info from "./Info";
import Navbar from "./Navbar";
import Rating from "./Rating";

export default function Main() {
  const [taps, setTaps] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [rating, setRating] = React.useState(false);
  return (
    <>
      <div>
        <Map taps={taps} setTaps={setTaps} setSelected={setSelected} />
      </div>
      <Navbar />
      {selected && (
        <Info
          selected={taps.filter((i) => i.id === selected)[0]}
          setSelected={setSelected}
          setRating={setRating}
        />
      )}
      {selected && rating && (
        <Rating
          selected={taps.filter((i) => i.id === selected)[0]}
          setRating={setRating}
        />
      )}
    </>
  );
}
