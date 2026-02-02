const express = require('express');
const jwt = require('jsonwebtoken'); // json web token require for client authetication & authorization
const cokieParser = require('cookie-parser');
const app = express();

app.use(cokieParser());

app.get('/', (req, res) => {
  const token = jwt.sign({
    email : 'lakshya99@gmail.com',
    admin : true
  },'lakshya') //for sending token to client
  res.cookie('token', token); //send token in to the cookies....
  res.send('Token set in cookie');
});

app.get('/protected',(req,res)=>{
  const token = req.cookies.token; // we get tooken from cookies
  let decodedTokem = jwt.verify(token,'lakshya');// to verify token of a client
  console.log(decodedTokem);
  res.send(`Welcome ${decodedTokem.email}`)
})

app.listen(3000);