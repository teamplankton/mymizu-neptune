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
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const [map, setMap] = React.useState(null);
  const [response, setResponse] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  function directionsCallback(response) {
    console.log(response);

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
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>

      {response === null && (
        <DirectionsService
          // required
          options={{
            destination: "roppongi",
            origin: "akasaka",
            waypoints: [
              { location: { lat: 35.665137, lng: 139.725094 }, stopover: true },
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

export default React.memo(Map);
