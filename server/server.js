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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 3001;

// respond with "hello world" when a GET request is made to the homepage - test GET
app.get("/", (req, res) => {
    res.send("hello world");
});

app.post("/register", async(req, res) => {
    try {
        const username = req.body.username
        const lname = req.body.lname
        const fname = req.body.fname
        const pw = req.body.pw
        let { data: user, error } =
        await supabase
            .from('user')
            .select('*')
            .eq('username', username)
        if (error) {
            console.log(error.message)
            throw error
        }
        if (user.length == 0) {
            try {
                console.log("inserting data")
                const { data, error } = await supabase
                    .from('user')
                    .insert([
                        { first_name: fname, last_name: lname, username: username, password: pw },
                    ]).select()
                if (error) {
                    console.log(error.message)
                    throw error
                }
                console.log('data added')
                return res.status(200).json({ data });
            } catch (error) {
                console.log(error.message)
            }

        } else {
            return res.status(400).json({ error: "Username taken, please try again" });
        }
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/login', async(req,res) => {
    const username = req.query.username;
    const password = req.query.password;
    console.log(username);
    console.log(password);

    const { data: users, error } = await supabase
  .from('user')
  .select('id') // Replace with the actual columns you want to retrieve
  .eq('username', username)
  .eq('password', password);

  console.log(users);

    if (error) {
    // Handle the error
    console.error('Error fetching user:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (users && users.length > 0) {
    // User with the given username exists
    console.log('User found:', users[0]);
    return res.status(200).json({ user: users[0] });
    } else {
    // User with the given username not found
    console.log('User not found');
    return res.status(404).json({ error: 'User not found' });
    }
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

// Itinerary

app.get("/itinerary/:id", async(req, res) => {
    try {
        const id = req.params.id
        let { data: itinerary, error } = await supabase
            .from('itinerary')
            .select('*')
            .eq('user_id', id);
        console.log("Start")
        console.log(itinerary)
        return res.status(200).json({ itinerary });

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error");
    }
})

app.post("/itinerary/:id", async(req, res) => {
    try {
        const id = req.params.id
        const itineraryItems = req.body.itineraryItems
        const { data, error } = await supabase
            .from('itinerary')
            .insert(itineraryItems);
        if (error) {
            throw error;
        }
        return res.status(200).json(data);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error");
    }
})



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});