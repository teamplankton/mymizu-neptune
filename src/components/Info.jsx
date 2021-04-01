import React from "react";
import "./Info.css";

function Info({ selected, setSelected, setRating }) {
  return (
    <div className="infoContainer">
      <div className="tapName">
        <button className="closebtn"
          onClick={() => {
            setSelected(null);
          }}
          >
          ×
        </button>
        <h3>{selected.name}</h3>
        <p>{selected.address}</p>
      </div>
      <div className="aveRate">
        <p>★5.0</p>
      </div>
      {selected.photo_url && (
        <div>
          <img className="infoImg" src={selected.photo_url} alt="photos" />
        </div>
      )}
      {selected.comment && <div className="info">{selected.comment}</div>}
      <div>
        <button className="info-button">経路</button>
        <button
          className="info-button"
          onClick={() => {
            setRating(true);
          }}
        >
          給水を記録
        </button>
      </div>
    </div>
  );
}

export default Info;
