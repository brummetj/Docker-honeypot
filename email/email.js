var express = require("express");
var app = express(),
  morgan = require("morgan");

const winston = require("winston");

const consoleTransport = new winston.transports.Console();
const myWinstonOptions = {
  transports: [consoleTransport]
};
const logger = new winston.createLogger(myWinstonOptions);

const HOST = "0.0.0.0";

function logRequest(req, res, next) {
  logger.info(req.url);
  next();
}

app.use(logRequest);
app.use(morgan());
app.set("port", 8080);

app.get("/", (req, res) => {
  res.status(200);
});

app.listen(app.get("port"), HOST);
