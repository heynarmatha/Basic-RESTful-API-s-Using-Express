const express = require("express");
const Joi = require("joi");
const app = express();

app.use(express.json());

const courseList = [
  { id: 1, tech: "javascript" },
  { id: 2, tech: "react" },
  { id: 3, tech: "nodejs" },
];

//GET

app.get("/courses", (req, res) => {
  res.send(courseList);
});

// Post API

app.post("/courses", (req, res) => {
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
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to port ${port}`));
