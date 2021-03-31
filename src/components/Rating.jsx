import React from "react";

function Rating() {
  return (
    <div>
      <div>
        <h3>この場所で給水しますか？</h3>
        <p>Code Chrysalis Japan</p>
      </div>
      <img src="" alt="bottle" />
      <div className="rating">
        <div className="star">Rate here!</div>
        <div className="comment">
          <textarea></textarea>
        </div>
      </div>
      <button className="info-button">給水を記録</button>
    </div>
  );
}

export default Rating;
