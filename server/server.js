// const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const crypto = require("crypto");

const express = require("express");

const app = express();

app.use(express.json());
var cors = require("cors");
app.use(cors());

const db = require("./models");
const { User } = require("./models/User");

const userRouter = require("./routing/Users");
app.use("/users", userRouter);

const PORT = 3001;

// respond with "hello world" when a GET request is made to the homepage - test GET
app.get("/", (req, res) => {
  res.send("hello world");
});

// Route for user registration
app.post("/register", async (req, res) => {
  const firstname = req.body.fname;
  const lastname = req.body.lname;
  const username = req.body.username;
  const password = req.body.password;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne();

    if (existingUser) {
      return res.status(400).json({
        error: "Username already exists, choose a new name or sign in.",
      });
    }

    // Hash the password using crypto & salt
    const salt = crypto.randomBytes(128).toString("base64");
    const hash_password = crypto.pbkdf2Sync(
      password,
      salt,
      10000,
      512,
      "sha512"
    );

    // Create a new user in the database with all info including salt
    User.create({
      first_name: firstname,
      last_name: lastname,
      username: username,
      password: hash_password,
      salt: salt,
    });

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "We encountered an error, please try again" });
  }
});

app.post("/login", async (req, res) => {
  // TO auth user
  const username = req.body.username;
  const password = req.body.password;

  try {
    // Check if the user exists in the database

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password
    // get salt from db, then compare with hashed pw
    const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");
    // compare encryptHash with pw

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate a JWT for the authenticated user
    // get token and send to db
    // const access_token = jwt.sign(process.env.ACCESS_SECRET_TOKEN)
    // jwt.sign({ username: username, password: password }, access_token)
    // return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

// app.get('/user/data', checkToken, (req, res) => {
//     //verify the JWT token generated for the user
//     jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
//         if (err) {
//             //If error send Forbidden (403)
//             console.log('ERROR: Could not log user in');
//             res.sendStatus(403);
//         } else {
//             //If token is successfully verified, we can send the autorized data
//             res.json({
//                 message: 'Successful log in',
//                 authorizedData
//             });
//             console.log('SUCCESS: Connected to protected route');
//         }
//     })
// });

// app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`);
// });

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
