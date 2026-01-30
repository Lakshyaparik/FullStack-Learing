const express = require("express");
const userModel = require("./models/usermodel");
const app = express();
const path = require("path");
const { name } = require("ejs");
const { log } = require("console");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.get("/users", async (req, res) => {
  const users = await userModel.find(); 
  res.render('users', { title: 'Users Page',users});
});

app.get("/edit/:_id", async(req, res) => {
  const user = await userModel.findOne({_id: req.params._id})
  res.render('edit', { title: 'Edit Page', user });
});

app.get("/delete/:_id", async(req, res) => {
 await userModel.findOneAndDelete({_id: req.params._id})
 res.redirect('/users');
});


app.post('/create',async (req, res) => {
   let {name,email,desc,image} = req.body;
    await userModel.create({
    name,   //passing values in the model to create a new user dcocument
    email,
    desc,
    image
  })  
  res.redirect('/');
})

app.post("/update/:_id", async (req, res) => {
  let {name,email,desc,image}= req.body;
  await userModel.findByIdAndUpdate(
    {_id: req.params._id},
    {name,email,desc,image},
  )
  res.redirect('/users');
});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
