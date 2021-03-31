import React from "react";
import axios from "axios";
import RouteMap from "./RouteMap";

async function geocode(loc) {
  const query = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${loc}&key=${process.env.REACT_APP_API_KEY}`
  );
  const geodata = await query.data;
  return geodata.results[0].geometry.location;
}

function Route() {
  const [origin, setOrigin] = React.useState(null);
  const [originLatLng, setOriginLatLng] = React.useState(null);

  async function submit() {
    const LatLng = await geocode(origin);
    setOriginLatLng(LatLng);
  }

  return (
    <>
      <div>
        <input
          placeholder="origin"
          onChange={(e) => {
            setOrigin(e.target.value);
          }}
        ></input>
        <button onClick={submit}>Submit</button>
        <div>{origin}</div>
        <div>{JSON.stringify(originLatLng)}</div>
      </div>
      <RouteMap originLatLng={originLatLng} />
    </>
  );
}

export default Route;
