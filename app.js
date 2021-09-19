"use strict";

const express = require("express");
const db = require("./models/index");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

db.sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
