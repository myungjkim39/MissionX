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
  connection.connect(function (err) {
    if (err) {
      console.log (err)
    } else {
      console.log ("You're Connected!")
    }
  })

app.post('/studentpassword',(req,res) => {
    console.log(req.body)
    connection.query(
        "SELECT password FROM missio20_team3.student where email=? and password = ?", [req.body.email, req.body.password],
        function(error,result){
            console.log(result)
            if (result.length === 0){res.send("you have an error");
        } else {res.send("You Are Logged In!");
        }
        })
})

app.post('/teacherpassword',(req,res) => {
    console.log(req.body)
    connection.query(
        `SELECT * FROM missio20_team3.teacher where email= ? and password =?`, [req.body.email, req.body.password],
        function(error,result){
            console.log(result)
            if (result.length === 0){res.send("you have an error");
        } else {res.send("You Are Logged In!");
        }
        })
})

// app.post('/teachersignup',(req,res)=> {
// )
// `SELECT password FROM missio20_team3.student where email="${req.body[0].email}";`, (error, result)=>{
// app.use(userRouter);
// if (result ===error){res.status(401)}
//else {res.statust(200)}

app.listen(4000);
console.log("running on port 4000")