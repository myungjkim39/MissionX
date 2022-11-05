const express = require("express");

const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("./src"));

//const bodyParser=require('body-parse');
//app.use(bodyParser.urlencoded({extended:false}));

const connection = mysql.createConnection({

  host: process.env.MYSQL_HOST,

  database: process.env.MYSQL_DATABASE,

  user: process.env.MYSQL_USER,

  password: process.env.MYSQL_PASS,
});

app.get("/pages/TeacherDashboardStudentProfiles", (req, res) => {
  console.log("Received a  GET request to /");
  connection.query(
    `Select profile_pic,name from missio20_team3.student LIMIT 15;`,
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("There is an error!!" + error.code);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.get("/pages/TeacherDashboardProgressTracker", (req, res) => {
  console.log("Received a GET request to /");
  connection.query(
    `select student,project_id from missio20_team3.student LIMIT 15;`,
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("There is an error!!" + error.code);
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
