require('dotenv').config()
const jwt = require("jsonwebtoken")

exports.isLoggedIn = (req,res,next)=>{
  if(!req.cookies.token)
   return res.status(401).json({
    message: "login first",
    success: false
  })
  
  jwt.verify(req.cookies.token,process.env.JWT_SECRET_KEY,(err,decoded)=>{
    if(err)
      return res.json({
    message: "jwt verify failed",
    success: false
    })

    req.user = decoded
    next()
  })
}