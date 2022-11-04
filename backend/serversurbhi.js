const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv').config()
// const { userRouter } = require('./user.routes');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
  });  


app.get('/studentpassword',(req,res) => {
    console.log(req.body[0])
    connection.query(
        "SELECT password FROM missio20_team3.student where email=? and password = ?", [req.body.email, req.body.password],
        function(error,result){
            console.log(result)
            if (error){res.send("you have an error"+error.code);
        } else {res.send(result);
        }
        })
})
// `SELECT password FROM missio20_team3.student where email="${req.body[0].email}";`, (error, result)=>{
// app.use(userRouter);
// if (result ===error){res.status(401)}
//else {res.statust(200)}

app.listen(4000);
console.log("running on port 4000")