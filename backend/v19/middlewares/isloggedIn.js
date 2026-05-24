const jwt = require('jsonwebtoken')

exports.isLoggedIn = (req,res,next)=>{
  if(!req.cookies.token){
    return res.redirect('/auth')
  }
  let decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET_KEY)
  req.user = decoded
  next()
}