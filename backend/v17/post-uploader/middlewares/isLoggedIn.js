const jwt = require('jsonwebtoken')


let secretKey = 'lakshya'

//protected function
function isLoggedIN(req,res,next){
    if(req.cookies=="")                 //check if token is empty or not
    res.status(401).json({
  message: "login first",
  success: false
  })
  //always remember req.cookies.token is a way to get token
  jwt.verify(req.cookies.token,secretKey,(err,decoded)=>{   //decode the token to get email of user for 
    if(err)                                                 //for further operation
      return res.status(401).json({
        message: "unauthorized user",
        success: false
      });
    req.user = decoded;//put decoded information in object user then put user in req for further operation

    next();  //next calling when user is verified
    
  })
}

module.exports = isLoggedIN;