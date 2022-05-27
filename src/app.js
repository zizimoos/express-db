const express = require("express");

const app = express();
const ROUTE = require("./routes/home");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", ROUTE);

module.exports = app;
