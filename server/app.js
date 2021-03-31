const express = require("express");
const path = require("path");
const db = require("../knexfile");
const port = process.env.PORT || 5566;

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`express listening on port ${port}`);
});

module.exports = app;
