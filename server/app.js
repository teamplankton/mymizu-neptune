const express = require("express");
const path = require("path");
const db = require("../knexfile");
const port = process.env.PORT || 5566;

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "build")));

// // Get all ratings
// app.get("api/ratings", async (req, res) => {
//   try {
//     const ratings = db("ratings");
//     res.json(ratings);
//   } catch (err) {
//     console.log("Error loading ratings!", err);
//     res.sendStatus(500);
//   }
// });

// Get rating of one tap
app.get("api/rating/:tap_id", async (req, res) => {
  try {
    const ratings = db("ratings").where("tap_id", req.params.tap_id);
    res.json(ratings);
  } catch (err) {
    console.log("Error loading ratings!", err);
    res.sendStatus(500);
  }
});

// Add new rating
app.post("/api/rating", async (req, res) => {
  try {
    if (req.body.star) {
      const ratings = await db("ratings").insert(req.body);
      console.log("new rating added!");
      res.status(201).json(ratings);
    }
  } catch (err) {
    console.log("Error adding new rating!", err);
    res.sendStatus(500);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`express listening on port ${port}`);
});

module.exports = app;
