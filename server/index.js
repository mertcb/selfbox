require("dotenv").config();
const express = require("express");
const connectDatabase = require("./helpers/connectDB");
//const mainRouter = require("./routes/mainRouter");
const app = express();
const cors = require("cors");

// Main Router
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(mainRouter);

// Mongo Connection
connectDatabase();

// listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`running on ${PORT}`));