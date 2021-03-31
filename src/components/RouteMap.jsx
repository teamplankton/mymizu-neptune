import React from "react";
import axios from "axios";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "90vh",
};

const center = {
  lat: 35.658057,
  lng: 139.727424,
};

async function geocode(loc) {
  const query = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${loc}&key=${process.env.REACT_APP_API_KEY}`
  );
  const geodata = await query.data;
  return geodata.results[0].geometry.location;
}

function RouteMap() {
  const [origin, setOrigin] = React.useState(null);
  const [originLatLng, setOriginLatLng] = React.useState(null);

  async function submit() {
    const LatLng = await geocode(origin);
    setOriginLatLng(LatLng);
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const [response, setResponse] = React.useState(null);

  function directionsCallback(response) {
    if (response !== null) {
      if (response.status === "OK") {
        setResponse(response);
      } else {
        console.log("response: ", response);
      }
    }
  }

  return isLoaded ? (
    <>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>

        {response === null && originLatLng !== null && (
          <DirectionsService
            // required
            options={{
              destination: "roppongi",
              origin: originLatLng,
              waypoints: [
                {
                  location: { lat: 35.665137, lng: 139.725094 },
                  stopover: true,
                },
              ],
              travelMode: "WALKING",
            }}
            // required
            callback={directionsCallback}
          />
        )}

        {response !== null && (
          <DirectionsRenderer
            // required
            options={{
              directions: response,
            }}
          />
        )}
      </GoogleMap>

      <InputGroup
        responsive
        className="mb-3"
        style={{
          position: "absolute",
          top: 60,
          width: "50%",
          left: "20%",
        }}
        onChange={(e) => {
          setOrigin(e.target.value);
        }}
      >
        <FormControl placeholder=" Where to?" aria-label="Where to?" />
        <InputGroup.Append>
          <Button variant="light" onClick={submit}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  ) : (
    <></>
  );
}

export default React.memo(RouteMap);
