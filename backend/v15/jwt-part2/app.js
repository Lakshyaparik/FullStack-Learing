//connect moongose to create datbase
//create model 
//register user with email and password
//hashed the userpassword
//send email to user in through cookies
//while login user check pass with hased password

const userModel= require('./models/user')
const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.set('view engine', 'ejs')

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

let secretKey = 'lakshya'

app.get('/',(req,res)=>{   //first page of website for login & register a index page
  res.render('index')
})
app.get('/register',(req,res)=>{   //register page
  res.render('register')
})
app.get('/login',(req,res)=>{     //login page
  res.render('login')
})
app.get('/home',(req,res)=>{     //home page
  res.render('home')
})

app.get('/logout',(req,res)=>{
    res.cookie('token',"");
    res.redirect('/');
})
app.get('/profile',(req,res)=>{
  res.render('profile');
})
app.post('/register', (req,res)=>{
  let {name,email,password} = req.body;
  bcrypt.hash(password,10,async(err,hash)=>{

    //put data email and hashed password into the database 
    await userModel.create({
      name,
      email,
      password:hash,
    }
    )
    .then(()=>{
  
    //token generated to the user 
    let token = jwt.sign(
      {
        email : email,
        admin :true
      },
      secretKey,
    )
  
    res.cookie('token',token)
    
    res.redirect('/home')
    })
    .catch(err=>console.log(err))
  })

})
app.post('/login',async (req,res)=>{

  let {email,password}=req.body;
  
  //find user from db
  let user = await userModel.findOne({email : email}).select("email password")

  if(!user)               // check user exist or not 
    res.status(404).json({
  success: false,
  message: "user not found"
  })

  //if user exist
  bcrypt.compare(password,user.password,(err,result)=>{
    if(!result)
      res.status(404).json({
    success : false,
    message : "not found"
    })
    
    let token = jwt.sign({
      email,
      admin : true
    },secretKey)
    res.cookie('token',token)
    res.redirect('/home')
  })
  
})
app.listen(3000)