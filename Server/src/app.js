const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// Routes (placeholder for now)
app.get("/", (req, res) => {
    res.send("SPT Backend API is running!");
});

app.use("/api/auth", authRoutes);


module.exports = app;