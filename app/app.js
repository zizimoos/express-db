const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const accessLogStream = require("./src/config/log");

dotenv.config();
const app = express();
const ROUTE = require("./src/controller/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(morgan("common", { stream: accessLogStream }));

app.use("/", ROUTE);

module.exports = app;
