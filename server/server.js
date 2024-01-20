const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const crypto = require('crypto')

const express = require('express')
const app = express()

const db = require("./models");

const PORT = 3001;

// respond with "hello world" when a GET request is made to the homepage - test GET
app.get("/", (req, res) => {
    res.send("hello world");
});

// Route for user registration
app.post('/register', async(req, res) => {
    const firstname = req.body.fname
    const lastname = req.body.lname
    const username = req.body.username
    const password = req.body.password;

    try {
        // Check if the user already exists

        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists, choose a new name or sign in.' });
        }

        // Hash the password using crypto & salt
        const salt = crypto.randomBytes(128).toString('base64');
        const hash_password = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

        // Create a new user in the database


        return res.status(201).json({ message: 'User registered successfully' });

    } catch (err) {
        return res.status(500).json({ error: 'We encountered an error, please try again' });

    }

});

app.post('/login', async(req, res) => {
    // TO auth user
    const username = req.body.username
    const password = req.body.password

    try {
        // Check if the user exists in the database

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });

        }
    } catch (err) {

    }
});




// get token
const access_token = jwt.sign(process.env.ACCESS_SECRET_TOKEN)

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
});


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`);
    });
});