require('dotenv').config()
const db = require('../config/mongooseCon')
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const {generateToken} = require('../utils/generateToken')


exports.registerUser = async (req,res)=>{
  
  let {fullname,email,password,contact} = req.body;
  
  try{
    //check user exist or not
  let user = await userModel.findOne({email})
  if(user)   //if exist
    return res.status(400).json({
      message:"User already exist",
    })

  //if not exist then hashed password create user in db then send token through cookie parser
  bcrypt.hash(password,10, async (err,hash)=>{

    let createdUser = await userModel.create({
      fullname,
      email,
      password:hash,
      contact
    })
    
    let token = generateToken(createdUser)
    res.cookie('token',token)
    res.redirect('/users/shop')
  })
  }
  catch(err){
    res.json({
      message:err.message
    })
  }
}

exports.loginUser = async(req,res)=>{
  
  let {email,password} = req.body;
  try{ 
    let user = await userModel.findOne({email})
    if(!user)
      return res.status(404).json({
    message : "User not found"
    })

    bcrypt.compare(password,user.password,(err,result)=>{
      if(result){
        let token = generateToken(user)
      res.cookie('token',token)
      res.redirect('/users/shop')
      }
    })

  }
  catch(err){
    res.json({
      message:err.message
    })
  }
}