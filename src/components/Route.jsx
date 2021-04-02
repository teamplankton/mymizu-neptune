import React from "react";
import RouteMap from "./RouteMap";
import Navbar from "./Navbar";
import Info from "./Info";
import axios from "axios";

function Route() {
  const [selectedR, setSelectedR] = React.useState(null);
  const [midTaps, setMidTaps] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const [avgRating, setAvgRating] = React.useState(null);
  // const [updateStar, setUpdateStar] = React.useState(false);

  React.useEffect(() => {
    async function getAvgRating() {
      const ratings = await axios.get(`/api/rating/${selectedR}`);
      let totalStars = 0;
      let comm = [];
      for (let arr of ratings.data) {
        let rate = [];
        rate.push(arr.comment);
        rate.push(arr.star);
        comm.push(rate);
        totalStars += arr.star;
      }
      const avg = totalStars / ratings.data.length;
      setComments(comm);
      setAvgRating(avg.toFixed(1));
    }
    if (selectedR) {
      getAvgRating();
    }
  }, [selectedR]);

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
          avgRating={avgRating}
          comments={comments}
        />
      )}
    </>
  );
}

export default Route;
