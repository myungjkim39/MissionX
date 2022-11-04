const express = require('express');
const cors = require('cors');
const mysql = require('mysq2');
const dotenv = require('dotenv')
const { userRouter } = require('./user.routes');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
  });  
app.get('/',(req,res) => {
  
})

app.use(userRouter);

app.listen(4000);