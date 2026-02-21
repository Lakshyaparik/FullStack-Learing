const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/",(req, res) => {
  res.send("Hello World");
});

app.get("/test",(req, res) => {
  res.render("test");
});

app.listen(3000)