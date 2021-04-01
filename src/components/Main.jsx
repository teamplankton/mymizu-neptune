import React from "react";
import Map from "./Map";
import Info from "./Info";
import Navbar from "./Navbar";
import Rating from "./Rating";
import axios from "axios";

export default function Main() {
  const [taps, setTaps] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [ratingDisplay, setRatingDisplay] = React.useState(false);
  const [avgRating, setAvgRating] = React.useState(null);

  React.useEffect(() => {
    async function getAvgRating() {
      const ratings = await axios.get(`/api/rating/${selected}`);
      let totalStars = 0;
      for (let arr of ratings.data) {
        totalStars += arr.star;
      }
      const avg = totalStars / ratings.data.length;
      setAvgRating(avg.toFixed(1));
    }
    getAvgRating();
  }, [selected]);

  return (
    <>
      <div>
        <Map
          taps={taps}
          setTaps={setTaps}
          setSelected={setSelected}
          setAvgRating={setAvgRating}
          selected={selected}
        />
      </div>
      <Navbar />
      {selected && (
        <Info
          selected={taps.filter((i) => i.id === selected)[0]}
          setSelected={setSelected}
          setRatingDisplay={setRatingDisplay}
          avgRating={avgRating}
        />
      )}
      {selected && ratingDisplay && (
        <Rating
          selected={taps.filter((i) => i.id === selected)[0]}
          setRatingDisplay={setRatingDisplay}
        />
      )}
    </>
  );
}
