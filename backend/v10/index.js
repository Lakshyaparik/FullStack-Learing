const express = require('express');
const app = express();
//colon is make a variable in the route so that we can access it using req.params
//colon(:) is used to define route parameters in Express.js
app.get('/profile/:username', (req, res) => {
  res.send(`Profile page of user : ${req.params.username}`);
})
app.get('/products/:product',(req,res)=>{
  res.send(`Details of product : ${req.params.product}`);
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});