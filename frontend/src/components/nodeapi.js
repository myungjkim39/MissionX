const express = require('express');
//need to install mysql for the below command
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'missionx'
});

db.connect();

app.get('/teacher_id', (req, res) => {
    const sql = 'Select * from teacher_id';

    db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
});
});

app.listen(4001)

