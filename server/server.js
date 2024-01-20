const express = require("express");
const app = express();
const db = require("./models");

const PORT = 3001;

// respond with "hello world" when a GET request is made to the homepage - test GET
app.get("/", (req, res) => {
  res.send("hello world");
});

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
