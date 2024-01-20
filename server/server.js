const express = require("express");
const app = express();

const PORT = 3000;

// respond with "hello world" when a GET request is made to the homepage - test GET
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${PORT}`);
});
