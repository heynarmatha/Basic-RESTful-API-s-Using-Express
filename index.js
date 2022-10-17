const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("First GET API !!!!!!!!!!!!!!!!!!!!");
});

app.get("/api/v1", (req, res) => {
  res.send("Second GET API*********");
});

app.listen(3000, () => console.log("listening to 3000 port"));
