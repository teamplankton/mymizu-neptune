const express = require("express");
const path = require("path");
require("dotenv").config();
const dbConfig = require("../knexfile");
const db = require("knex")(dbConfig);

const port = process.env.PORT || 4000;

(async () => {
  try {
    console.log("Running rollback to clean all...");
    await db.migrate.rollback();

    console.log("Running migrations...");
    await db.migrate.latest();

    console.log("Seeding...");
    await db.seed.run();
  } catch (err) {
    console.error("Couldn't start app", err);
    process.exit(-1);
  }
})();

// Endpoints
const app = express();
app.use(express.static(path.resolve(__dirname, "..", "build")));

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

const axios = require("axios");

app.get("/search/:lon/:lat/:rad", async (req, res) => {
  const allData = await axios.get(
    `https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/radius?longitude=${req.params.lon}&latitude=${req.params.lat}&radius=${req.params.rad}&l=ja`,
    {
      headers: {
        Authorization: `Bearer ${process.env.MY_MIZU_KEY}`,
      },
    }
  );

  res.json(allData.data);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

console.log("Starting express...");
app.listen(port, () => {
  console.log("App listening on port " + port);
});
