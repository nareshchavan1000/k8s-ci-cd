const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();

const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send('Hello World...!!');
});

app.get('/next',(req,res)=>{
    res.send("Next route...");
});

app.listen((PORT),()=>{
    console.log("Server Started at port "+PORT);
});