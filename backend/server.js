// Module imports
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());

// Route Imports
const videoRouter = require('./routes/videoRoutes');
const objectiveRouter = require('./routes/objectiveRoutes');
const instructionRouter = require('./routes/instructionRoutes');

// Routes 
app.use(videoRouter);
app.use(objectiveRouter);
app.use(instructionRouter);

const PORT = process.env.PORT;
console.log("Server running at port", PORT);
app.listen(PORT);
