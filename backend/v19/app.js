const express = require('express')
const app = express()
const db = require('./config/db')
const cookieParser = require('cookie-parser')


const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')


app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/auth',authRouter)
app.use('/user',userRouter)

app.get('/',(req,res)=>{
  res.render('index')
})

app.listen(3000);

