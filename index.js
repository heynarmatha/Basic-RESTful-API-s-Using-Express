const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("First GET API !!!!!!!!!!!!!!!!!!!!");
});

app.get("/api/v1", (req, res) => {
  res.send("Second GET API*********");
});

//route -- params (Required)

app.get("/postId/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/post/:year/:month", (req, res) => {
  res.send(req.params);
});

// route query string parameter (optional)

app.get("/example/:year/:month", (req, res) => {
  res.send(req.query);
});

//PORT

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to port ${port}`));
