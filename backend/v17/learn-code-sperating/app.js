const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
const userRoute = require('./routes/user')
const isLoggedIn = require('./middlewares/isLoggedIn')



app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())
app.use('/auth',authRoute)
app.use('/post',postRoute)
app.use('/user',userRoute)


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/home',isLoggedIn, (req, res) => {
  res.render('home')
})

app.get('/logout', (req, res) => {
  res.clearCookie('token')
  res.redirect('/')
})


app.listen(3000);