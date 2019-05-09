var express = require("express");
var app = express();
const HOST = "0.0.0.0";

app.set("port", 5000);

app.get("/", (req, res) => {
  res.status(200);
});

app.listen(app.get("port"), HOST);
