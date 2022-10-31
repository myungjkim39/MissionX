const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
});

app.get("/studentdashboard/video", (req, res) => {
  pool.query(
    `SELECT video FROM missio20_team3.project;`,
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You have an error" + error.code);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.get("/studentdashboard/objectives", (req, res) => {
  pool.query(
    `SELECT learning_objective FROM missio20_team3.project;`,
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You have an error" + error.code);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

const PORT = process.env.PORT;
console.log("Server running at port", PORT);

app.listen(PORT);
