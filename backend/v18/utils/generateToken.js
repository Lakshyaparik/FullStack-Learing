require('dotenv').config()
const jwt = require('jsonwebtoken')
exports.generateToken = (createdUser)=>{  
  return jwt.sign({
      email : createdUser.email,
      fullname : createdUser.fullname
    },process.env.JWT_SECRET_KEY)
}