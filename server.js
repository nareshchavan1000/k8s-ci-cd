const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();

const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send('Hello World...!!');
    res.send('Naresh Chavan');
});

app.get('/next',(req,res)=>{
    res.send("Next route...");
    res.send("No worries");
});

const db = require('./config/db');
db();

const routes = require('./routes/user');

app.use('/api/v1',routes);



app.listen((PORT),()=>{
    console.log("Server Started at port "+PORT);
});