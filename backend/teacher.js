const express = require('express');
const dotenv = require('dotenv').config();
const mysql = require('mysql2');
const cors = require('cors');
// const Pool = require('mysql2/typings/mysql/lib/Pool');

const app = express();
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
});

// const db = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   database: process.env.MYSQL_DATABASE,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASS,
// });

db.connect();

// app.get('/teacher', (req, res) => {
//     const sql = 'Select name, email, school, profile_pic, date_of_birth, contact_number from missio20_team3.teacher;';

//     Pool.query(sql, (error, result) => {
//       if (error) throw error;
//       else { res.send(result) };
// });
// });

app.get('/teacher', (req, res) => {
    const sql = 'Select name, email, school, profile_pic, date_of_birth, contact_number from missio20_team3.teacher;';

    db.query(sql, (error, result) => {
      if (error) throw error;
      else { res.send(result) };
});
});

app.get('/student', (req, res) => {
    const sql = 'Select * from missio20_team3.teacher;';

    db.query(sql, (error, result) => {
      if (error) throw error;
      else { res.send(result) };
});
});

app.get('/helprequest', (req, res) => {
  const sql = 'Select * missio20_team3.teacher;';
  'Select name, profile_pic from missio20_team3.student;';

    db.query(sql, (error, result) => {
      if (error) throw error;
      else { res.send(result) };
});
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

