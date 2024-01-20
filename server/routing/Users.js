const express = require("express");
const router = express.Router();
const { User } = require("../models");


router.get("/", async(req, res) => {
    // const listOfPosts = await User.findAll();
    // res.json(listOfPosts);
    res.json("success");
});

router.get("/byId/:id", async(req, res) => {
    //":parameterName" value is inside req.params.parameterName
    const id = req.params.id;
    const post = await User.findByPk(id);
    res.json(post);
});

router.post("/123", async(req, res) => {
    try {
        //receive a FORM from frontend in JSON
        const post = req.body;
        //this body data should have the same format as our
        //Post.js format in
        // res.json("123")
        await User.create(post);
        //sequelize is called here to create and insert that object into db
        res.json(req.body);
        //res.json(post);
    } catch (error) {
        res.send(error);
    }
});

router.post("/register", async(req, res) => {
    const firstname = req.body.first_name;
    const lastname = req.body.last_name;
    const username = req.body.username;
    const password = req.body.password;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne().where(username);

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

        console.log("pw hashed")

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

module.exports = router;