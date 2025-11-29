const mongoose = require('mongoose');

require('dotenv').config();

const connectDB = ()=>{
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("DB connected Successfully..");
    }).catch((err)=>{
        console.log(err);
        console.error(err);
        process.exit(1);
    });
};


module.exports = connectDB;