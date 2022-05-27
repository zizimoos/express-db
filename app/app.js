const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const ROUTE = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", ROUTE);

module.exports = app;
