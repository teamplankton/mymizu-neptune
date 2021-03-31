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
  const [destination, setDestination] = React.useState(null);
  const [originLatLng, setOriginLatLng] = React.useState(null);
  const [destinationLatLng, setDestinationLatLng] = React.useState(null);

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

  async function submit() {
    const LatLngFrom = await geocode(origin);
    setOriginLatLng(LatLngFrom);

    const LatLngTo = await geocode(destination);
    setDestinationLatLng(LatLngTo);
    setResponse(null);
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
              destination: destinationLatLng,
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

      <div>
        {/*From Input*/}
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
          <FormControl placeholder=" From?" aria-label="From?" />
        </InputGroup>

        {/*To Input*/}
        <InputGroup
          responsive
          className="mb-3"
          style={{
            position: "absolute",
            top: 98,
            width: "50%",
            left: "20%",
          }}
          onChange={(e) => {
            setDestination(e.target.value);
          }}
        >
          <FormControl placeholder=" To?" aria-label="To?" />
        </InputGroup>

        <InputGroup.Append>
          <Button
            style={{
              position: "absolute",
              top: 60,
              height: 77,
              left: "70%",
            }}
            variant="light"
            onClick={submit}
          >
            Search
          </Button>
        </InputGroup.Append>
      </div>
    </>
  ) : (
    <></>
  );
}

export default React.memo(RouteMap);
