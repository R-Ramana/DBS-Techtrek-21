import express from 'express';
import { createClient } from '@supabase/supabase-js'
import morgan from 'morgan'
import bodyParser from "body-parser";
const supabaseUrl = 'https://kvhhiayuzkpsjxvzuvvl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aGhpYXl1emtwc2p4dnp1dnZsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTcwODYwOSwiZXhwIjoyMDIxMjg0NjA5fQ.eOaqXI8bq6KgtlC8m2WgMD3QllcWQJF2cFlN3mn1UxU"
const apiKey = process.env.apiKey
const supabase = createClient(supabaseUrl, supabaseKey)



const app = express();
app.use(express.json());

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = 3001;

// respond with "hello world" when a GET request is made to the homepage - test GET
app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/register", async(req, res) => {

    let { data: user, error } = await supabase
    .from('user')
    .select('*')
    console.log(user)
    res.body = user
    return res.status(200).json({ user });
})

// app.post("/login", async(req, res) => {
//     // TO auth user
//     const username = req.body.username;
//     const password = req.body.password;
    
//     try {
//         // Check if the user exists in the database

//         if (!user) {
//             return res.status(401).json({ error: "Invalid credentials" });
//         }

//         // Compare the provided password with the hashed password
//         // get salt from db, then compare with hashed pw
//         const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");
//         // compare encryptHash with pw

//         if (!passwordMatch) {
//             return res.status(401).json({ error: "Invalid credentials" });
//         }

//     } catch (err) {
//         return res.status(500).json({ error: "Internal server error" });
//     }
// });

// db.sequelize.sync().then(() => {
// });

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
