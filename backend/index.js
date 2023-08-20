const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send(`Hello World! ${process.env.ABC}`);
});

app.listen(8080);
