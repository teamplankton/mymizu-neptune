import React from "react";
import "./Info.css";
import { Container, Table } from "react-bootstrap";

function Info({
  selected,
  setSelected,
  setRatingDisplay,
  avgRating,
  comments,
}) {
  return (
    <div className="infoContainer">
      <div className="info-top">
        <div className="tapName">
          <button
            className="closebtn"
            onClick={() => {
              setSelected(null);
            }}
          >
            ×
          </button>
          <h4>
            {selected.name} {`⭐️ ${avgRating}`}
          </h4>
          <p>{selected.address}</p>
        </div>
        <hr />
        {selected.photo_url && (
          <div>
            <img className="infoImg" src={selected.photo_url} alt="photos" />
          </div>
        )}
        <Table className="mt-3" responsive hover striped size="sm">
          <tbody>
            {comments.map((e, i) => {
              return (
                <tr key={i}>
                  <td>⭐️ {e[1]}</td>
                  <td>{e[0]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="info-bottom">
        <button className="info-button">経路</button>
        <button
          className="info-button"
          onClick={() => {
            setRatingDisplay(true);
          }}
        >
          給水を記録
        </button>
      </div>
    </div>
  );
}

export default Info;
