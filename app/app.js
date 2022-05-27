const express = require("express");

const app = express();
const ROUTE = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", ROUTE);

module.exports = app;
