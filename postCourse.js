const express = require("express");
const app = express();

app.use(express.json());

const courseList = [
  { id: 100, tech: "javascript" },
  { id: 101, tech: "react" },
  { id: 102, tech: "nodejs" },
];

// Post API

app.post("/courses", (req, res) => {
  const course = {
    id: courseList.length + 1,
    tech: req.body.tech,
  };
  courseList.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to port ${port}`));
