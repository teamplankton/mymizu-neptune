import React, { useState } from "react";
import { Rating as Rate } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import { InputGroup, FormControl } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import bottle from "./img/bottle.jpg";
import "./rating.css";
import "./rating.css";
import axios from "axios";

function Rating({ selected, setRatingDisplay, updateStar, setUpdateStar }) {
  const [star, setStar] = useState(3);
  const [comment, setComment] = useState("");

  async function sendRating() {
    const data = {
      tap_id: selected.id,
      star: star,
      comment: comment,
    };
    await axios.post("/api/rating", data);
    setUpdateStar(!updateStar);
    setRatingDisplay(false);
  }

  return (
    <div className="ratingContainer">
      <button
        className="closebtn"
        onClick={() => {
          setRatingDisplay(false);
        }}
      >
        ×
      </button>
      <div id="rating-header">
        <h3>この場所で給水しますか？</h3>
      </div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">
          {`${selected.name}の水はいかがですか？`}{" "}
        </Typography>
        <Rate
          name="simple-controlled"
          value={star}
          onChange={(event, newValue) => {
            setStar(newValue);
          }}
        />
      </Box>
      <img src={bottle} alt="bottle" width="150" height="150" />
      <div className="rating">
        <div className="star">コメントしてね！</div>
        <div className="ratingInput">
          <InputGroup>
            <FormControl
              as="textarea"
              rows={3}
              placeholder="Any comments?..."
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </InputGroup>
        </div>
      </div>
      <button className="info-button" onClick={sendRating}>
        給水を記録
      </button>
      <div className="bottomBar"></div>
    </div>
  );
}

export default Rating;
