import React from "react";
import RouteMap from "./RouteMap";
import Navbar from "./Navbar";
import Info from "./Info";

function Route() {
  const [selectedR, setSelectedR] = React.useState(null);
  const [midTaps, setMidTaps] = React.useState([]);
  return (
    <>
      <RouteMap
        setSelectedR={setSelectedR}
        midTaps={midTaps}
        setMidTaps={setMidTaps}
      />
      <Navbar />
      {selectedR && (
        <Info
          selected={midTaps.filter((i) => i.id === selectedR)[0]}
          setSelected={setSelectedR}
        />
      )}
    </>
  );
}

export default Route;
