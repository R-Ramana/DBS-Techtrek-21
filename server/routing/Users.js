const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await User.findAll();
  res.json(listOfPosts);
});

router.get("/byId/:id", async (req, res) => {
  //":parameterName" value is inside req.params.parameterName
  const id = req.params.id;
  const post = await User.findByPk(id);
  res.json(post);
});

router.post("/123", async (req, res) => {
  try {
    //receive a FORM from frontend in JSON
    const post = req.body;
    //this body data should have the same format as our
    //Post.js format in
    await User.create(post);
    //sequelize is called here to create and insert that object into db
    res.json(post);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
