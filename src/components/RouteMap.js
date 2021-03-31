import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 35.658057,
  lng: 139.727424,
};

function RouteMap({ originLatLng }) {
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
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      options={{ disableDefaultUI: true }}
    >
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
  ) : (
    <></>
  );
}

export default React.memo(RouteMap);
