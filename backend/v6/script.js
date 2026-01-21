const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('middleware executed');
    next();
})
app.use((req,res,next)=>{
    console.log('one more middleware executed');
    next();
})

app.get('/',(req,res)=>res.status(200).send('this is home page'));
app.get('/about',(req,res)=>res.send('this is about page'));
app.get('/contact',(req,res,next)=>{
    const err=new Error('Contact page is under maintenance');
    err.status=503;
    next(err);
});
app.listen(3000,()=>console.log('server is running on port 3000'));

app.use((req,res,next)=>{
    res.status(404).send('Page Not Found');
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500)
    .send(err.message || 'Internal Server Error');
})