import { Itinerary } from "../models";
const express = require('express')
const app = express()

const db = require("./models");

const PORT = 3001;

module.exports = function(app) {
    app.get("/", async (req, res) => {
        try {
            const itinerary = await Itinerary.findAll();
            res.json(itinerary);
        } catch (error) {
            res.status(500).send('Error occurred while fetching data');
        }
    });
};


