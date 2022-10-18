const express = require("express");
const app = express();

const courseList = [
  { id: 100, course1: "javascript" },
  { id: 101, course1: "react" },
  { id: 102, course1: "nodejs" },
];

// GET API and find particular user

app.get("/course", (req, res) => {
  res.send(courseList); // to get all the courses in the list
});

//Find a single course by using a ID

app.get("/course/:id", (req, res) => {
  const findCourse = courseList.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!findCourse) {
    res.status(404).send("Course is not avaiable");
  }
  res.send(findCourse);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to port ${port}`));
