const express = require("express");
const path = require("path");
const db = require("../knexfile");

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(4000, () => {
  console.log("express listening on port 4000");
});

module.exports = app;
