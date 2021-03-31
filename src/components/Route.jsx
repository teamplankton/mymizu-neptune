import React from "react";
import RouteMap from "./RouteMap";
import Navbar from "./Navbar";

function Route() {
  // const [origin, setOrigin] = React.useState(null);
  // const [originLatLng, setOriginLatLng] = React.useState(null);

  // async function submit() {
  //   const LatLng = await geocode(origin);
  //   setOriginLatLng(LatLng);
  // }

  return (
    <>
      <RouteMap />
      <Navbar />
    </>
  );
}

export default Route;
