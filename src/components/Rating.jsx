import React, { useState } from "react";
import { Rating as Rate } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import { InputGroup, FormControl } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import axios from "axios";

function Rating() {
  const [star, setStar] = useState(3);
  const [comment, setComment] = useState("");

  async function handleRate() {
    const data = {
      tap_id: {},
      star: star,
      comment: comment,
    };

    //   await axios.post("/api/rating", data)
  }

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">
          {`How was the water at Code Chrysalis`}{" "}
        </Typography>
        <Rate
          name="simple-controlled"
          value={star}
          onChange={(event, newValue) => {
            setStar(newValue);
          }}
        />
      </Box>
      <InputGroup>
        <FormControl
          //   onChange={handleChange}
          as="textarea"
          rows={3}
          placeholder="Any comments?..."
        />
      </InputGroup>
      <button className="info-button" onClick={handleRate}>
        給水を記録
      </button>
    </div>
  );
}

export default Rating;
