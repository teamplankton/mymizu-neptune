import React from "react";
import axios from "axios";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "90vh",
};

function Map({ taps, setTaps, setSelected, setAvgRating, selected }) {
  const [mapRef, setMapRef] = React.useState(null);
  const [center, setCenter] = React.useState({
    lat: 35.658057,
    lng: 139.727424,
  });

  const getPins = async (center) => {
    await axios
      .get(`/search/${center.lng}/${center.lat}/1000`)
      .then((res) => {
        setTaps(res.data.taps);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  React.useEffect(() => {
    getPins(center);
  }, [center]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  return isLoaded ? (
    <>
      <GoogleMap
        onLoad={(map) => setMapRef(map)}
        onDragEnd={() => setCenter(mapRef.getCenter().toJSON())}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        mapId={"f79f2731e40b9866"}
        options={{ disableDefaultUI: true }}
      >
        {taps.map((item) => {
          async function opencard() {
            setSelected(item.id);
          }
          return (
            <Marker
              key={item.id}
              onClick={opencard}
              position={{ lat: item.latitude, lng: item.longitude }}
              icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            />
          );
        })}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default React.memo(Map);
