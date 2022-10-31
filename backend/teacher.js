const express = require('express');
const dotenv = require('dotenv').config();
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
});

db.connect();

app.get('/teacher', (req, res) => {
    const sql = 'Select name, email, school, profile_pic, date_of_birth, contact_number from missio20_team3.teacher;';

    db.query(sql, (error, result) => {
      if (error) throw error;
      else { res.send(result) };
});
});

app.get("/teacher2", (req, res) => {
console.log("Received a GET request to /");
db.query(
    `Select name, email, school, profile_pic, date_of_birth, contact_number from missio20_team3.teacher;`,
    (error, result) => {
      if (error) {
        console.log("Error", error);
        res.send("You' got an error ! " + error.code);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

const mockdata = {
    name: 'Jasmina Salvador',
    email: 'jsalvador@homai.edu',
    school: 'Homai School',
    dateOfBirth: '1986-06-25',
    contactNumber: '0277542800',
    profilePic: '/public-images/teachers/JasminaSalvador.png'
}

app.get('/mockteacher_id', (req, res) => {
res.send(mockdata)
});


app.listen(process.env.PORT);

