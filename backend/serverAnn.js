const express = require('express');

const mysql = require('mysql2');
const cors=require('cors')
const dotenv = require('dotenv').config();


const app=express();
app.use(cors());
app.use(express.json());
app.use(express.static('./src'));


//const bodyParser=require('body-parse');
//app.use(bodyParser.urlencoded({extended:false}));

const connection = mysql.createConnection({

    host: process.env.MYSQL_HOST,
  
    database: process.env.MYSQL_DATABASE,
  
    user: process.env.MYSQL_USER,
  
    password: process.env.MYSQL_PASS,
  
  });

const PORT = process.env.PORT;

console.log('Server running at port', PORT);

app.listen(PORT);