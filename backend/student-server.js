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
  pool.execute(
    `SELECT video FROM missio20_team3.project WHERE project_id = 1 ;`,
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
  pool.execute(
    `SELECT learning_objective FROM missio20_team3.project WHERE project_id = 1;`,
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You have an error" + error.code);
      } else {
        console.log(result[0].learning_objective);
        res.json(result[0].learning_objective);
      }
    }
  );
});

app.get("/studentdashboard/instructions", (req, res) => {
  pool.execute(
    `SELECT instructions FROM missio20_team3.project WHERE project_id = 1;`,
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You have an error" + error.code);
      } else {
        console.log(result[0].instructions);
        res.json(result[0].instructions);
      }
    }
  );
});

const PORT = process.env.PORT;
console.log("Server running at port", PORT);

app.listen(PORT);
