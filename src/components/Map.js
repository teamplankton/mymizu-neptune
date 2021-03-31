import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

function Map() {
  const [mapRef, setMapRef] = React.useState(null);
  const [center, setCenter] = React.useState({
    lat: 35.658057,
    lng: 139.727424,
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  function opencard() {
    console.log("here");
  }
  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return isLoaded ? (
    <>
      <GoogleMap
        onLoad={(map) => setMapRef(map)}
        onDragEnd={() => setCenter(mapRef.getCenter().toJSON())}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={{ disableDefaultUI: true }}
      >
        <Marker onClick={opencard} position={center} />
        <></>
      </GoogleMap>
      <h3>
        Center {center.lat}, {center.lng}
      </h3>
    </>
  ) : (
    <></>
  );
}

export default React.memo(Map);
