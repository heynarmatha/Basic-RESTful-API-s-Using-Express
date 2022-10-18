const express = require("express");
const Joi = require("joi");
const app = express();

app.use(express.json());

let courseList = [
  { id: 1, tech: "javascript" },
  { id: 2, tech: "react" },
  { id: 3, tech: "nodejs" },
];

// Post API

app.post("/course", (req, res) => {
  //validation
  const validation = Joi.object({
    tech: Joi.string().required(),
  });

  const { error } = validation.validate(req.body);
  if (error) {
    res.status(404).send(result.error);
    return;
  }

  const course = {
    id: courseList.length + 1,
    tech: req.body.tech,
  };
  courseList.push(course);
  res.send(course);
  console.log(course);
});

//PUT Method

app.put("/course/:id", (req, res) => {
  const findCourse = courseList.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!findCourse) {
    return res.status(404).send("Course is not avaiable");
  }

  //validation
  const validation = Joi.object({
    tech: Joi.string().required(),
  });

  const { error } = validation.validate(req.body);
  if (error) {
    res.status(404).send(result.error);
    return;
  }

  findCourse.tech = req.body.tech;
  res.send(findCourse);
});

//DELETE Method

app.delete("/course/:id", (req, res) => {
  const findCourse = courseList.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!findCourse) {
    return res.status(404).send("Course is not avaiable");
  }
  const del = courseList.indexOf(findCourse);
  courseList.splice(del, 1);
  res.send(courseList);
});

//GET

app.get("/course", (req, res) => {
  res.send(courseList);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening to port ${port}`));
