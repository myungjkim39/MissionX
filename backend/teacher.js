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

app.get('/teacher_id', (req, res) => {
    const sql = 'Select * from teacher_id';

    db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
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

