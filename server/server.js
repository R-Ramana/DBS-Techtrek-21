import express from 'express';
import { createClient } from '@supabase/supabase-js'
import morgan from 'morgan'
import bodyParser from "body-parser";
import cors from 'cors';

const supabaseUrl = 'https://kvhhiayuzkpsjxvzuvvl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2aGhpYXl1emtwc2p4dnp1dnZsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTcwODYwOSwiZXhwIjoyMDIxMjg0NjA5fQ.eOaqXI8bq6KgtlC8m2WgMD3QllcWQJF2cFlN3mn1UxU"
const apiKey = process.env.apiKey
const supabase = createClient(supabaseUrl, supabaseKey)


const app = express();
app.use(express.json());
app.use(cors());
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
        const itineraryItems = req.body.body.itineraryItems
        console.log(itineraryItems)
        const { data, error } = await supabase
            .from('itinerary')
            .insert(itineraryItems)
            .select();
        if (error) {
            throw error;
        }
        return res.status(200).json(data);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error");
    }
})

// edit an it
app.post("/itinerary/edit/:id", async(req, res) => {
    try {
        const id = req.params.id
        const itineraryItems = req.body.itineraryItems
        const { data, error } = await supabase
            .from('itinerary')
            .update(itineraryItems)
            .eq('id', id);
        if (error) {
            throw error;
        }
        return res.status(200).json(data);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error");
    }
})

// delete an it
app.post("/itinerary/delete/:id", async(req, res) => {
    try {
        const id = req.params.id
        const toDelete = req.body.body.toDelete
        console.log(toDelete)
        const { error } = await supabase
        .from('itinerary')
        .delete()
        .eq('id', toDelete)
        if (error) {
            throw error;
        }
        return res.status(200).json("Done");
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error");
    }
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
