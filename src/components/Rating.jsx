import React from "react";
import "./rating.css";

function Rating({ selected, setRating }) {
  function sendRating() {
    setRating(false);
  }
  return (
    <div className="ratingContainer">
      <div>
        <h3>この場所で給水しますか？</h3>
        <p>{selected.name}</p>
      </div>
      <img src="" alt="bottle" />
      <div className="rating">
        <div className="star">Rate here!</div>
        <div className="comment">
          <textarea></textarea>
        </div>
      </div>
      <button className="info-button" onClick={sendRating}>
        給水を記録
      </button>
    </div>
  );
}

export default Rating;
