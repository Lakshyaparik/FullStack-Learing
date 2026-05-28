require('dotenv').config()
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.register = async (req, res)=>{
  let {fullname,email,password} = req.body
  let user = await userModel.findOne({email})
  console.log(user);
  if(user){
    res.send('User already exists')
    return res.redirect('/auth')
  }
  
  await bcrypt.hash(password,10,async (err,hash)=>{
    if(err){
      console.log(err);
    }
    
  let createdUser = await userModel.create({
    fullname,
    email,
    password : hash
  })
    let token = jwt.sign(
      {
        email : createdUser.email,
        fullname : createdUser.fullname, 
      },
      process.env.JWT_SECRET_KEY,
    )

    res.cookie('token',token)
    return res.redirect('/user/home')
  })
}
exports.login = async (req, res) => {

  let { email, password } = req.body

  await userModel.findOne({ email })

  .then( user => {

      if (!user) {
        return res.redirect('/auth')
      }

      bcrypt.compare(password, user.password, (err, result) => {

        if (err) {
          console.log(err)
          return res.send("Something went wrong")
        }

        if (!result) {
          return res.redirect('/auth')
        }

        let token = jwt.sign({

          email: user.email,
          fullname: user.fullname

        }, process.env.JWT_SECRET_KEY)

        res.cookie('token', token)
        return res.redirect('/user/home')

      })

    })

    .catch(err => {
      console.log(err)
    })

}