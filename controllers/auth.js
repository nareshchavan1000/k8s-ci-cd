const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async(req,res)=>{
try{

        const {name,email,password} = req.body;
    const userExist = await user.findOne({email});
    if(userExist)
    {
        return res.status(201).json({
            success : false,
            message : 'User already exist..',
        });
    }

    let hashedPassword;
    try{
        hashedPassword = await bcrypt.hash(password,10);
        const rec = await user.create({name,email,password:hashedPassword});

        return res.status(201).json({
            success : true,
            message : 'User created successfully..'
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success : false,
            message : "error occured during password hashing",
        })
    }
    
}
catch(err)
{
    return res.status(500).json({
        success : false,
        message : 'Error while creating user'
    })
}



}