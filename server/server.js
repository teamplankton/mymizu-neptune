const express = require("express");
const app = express();

app.use(express.static(__dirname + "public"));

const port = process.env.PORT || 4000;

app.listen(port, console.log("App listeing on port " + port));
