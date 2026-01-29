const express = require("express");
const userModel = require("./models/usermodel");
const app = express();
const path = require("path");
const { log } = require("console");
const { name } = require("ejs");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index', { title: 'Home Page' });
});

app.post('/',async (req, res) => {
    await userModel.create({
    name: req.body.name,
    email: req.body.email,
    desc: req.body.desc,
    image: req.body.profileImg
  })  
  console.log('while creating : ',req.body);
  res.redirect('/');
  
})
app.get("/users", async (req, res) => {
  const users = await userModel.find(); 
  res.render('users', { title: 'Users Page',users});
  log(users);
});
app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
