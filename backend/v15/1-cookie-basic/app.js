/// in this we cover how to set and get cookies using express and cookie-parser middleware
const cookieParser = require('cookie-parser')
const express = require('express');

const app = express();
app.use(cookieParser())// to use cookie parser we have to use it as a middleware 

app.get('/', (req, res) => {
    res.cookie('name','muni',{
        httpOnly:true,// this is used to make cookie accessible from client side javascript
        maxAge:24*60*60*1000 // cookie will expire in 1 day
    })// to set cookie we use res.cookie method
    res.send('Hello World!');
});
app.get('/hello',(req,res)=>{
    res.send(`hello ${req.cookies.name}`)// to get cookie we use req.cookies object
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});