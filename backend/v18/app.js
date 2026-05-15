const express = require('express');
const connectDB = require('./config/mongooseCon.js')
const app = express();
const userRouter = require('./routes/userRouter.js')
const productRouter = require('./routes/productRouter.js')
const ownerRouter = require('./routes/ownerRouter.js')
const authRouter = require('./routes/authRouter.js')
const path = require('path')
const cookieParser = require('cookie-parser')




app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'/stylesheets')))
app.use(cookieParser())


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/owners', ownerRouter)

app.get('/',(req,res)=>{
  res.render('index')
  res.clearCookie('token')
})

app.get('/logout',(req,res)=>{
  res.clearCookie('token')
  res.redirect('/')
})

connectDB().then(()=>{
  app.listen(3000);
})

//      /  -->  login & signup

//     /shop ->  shop page

//    /users/cart -> user cart page

//    /admin       -> admin panel page of user id,profile etc

//   /owner/products  ->  show all products page

//   /owner/admin     -> show a form for create products page
