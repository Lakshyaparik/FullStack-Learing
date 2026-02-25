const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user')

let secretKey = 'lakshya'

//register route
router.post('/register',async(req,res)=>{
  let {name,email,password}= req.body

  let user= await userModel.findOne({email})

  if(user) return res.status(409).json({
    success : false,
    message : "user already exists",
    message: "user already exists"
  })
  
  bcrypt.hash(password,10,async(err,hash)=>{
    if(err) return res.status(500).json({
      success : false,
      message : "internal server error",
  })

  let createdUser = await userModel.create({
      name,
      email,
      password:hash
  })

  //jwt token created for remembering
  let token = jwt.sign({
    email:createdUser.email,
    name: createdUser.name,
    admin: true
  },secretKey)

  res.cookie('token',token)
  res.redirect('/home')
  })

})

//login route

router.post('/login',async(req,res)=>{
  let {email,password}= req.body
  let user = await userModel.findOne({email})
  if(!user) return res.status(404).json({
    success : false,
    message : "user not found",
    message: "user not found"
  })

  bcrypt.compare(password,user.password,(err,result)=>{
    if(result){
      let token = jwt.sign({
        email:user.email,
        name: user.name,
        admin: true
      },secretKey)
      res.cookie('token',token)
      res.redirect('/home')
    }
  })

})

module.exports = router;