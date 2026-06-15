const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes (placeholder for now)
app.get("/", (req, res) => {
    res.send("SPT Backend API is running!");
});

module.exports = app;