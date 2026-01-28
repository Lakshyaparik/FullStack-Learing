const UserModel = require("./models/user");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/create", async (req, res) => {
  await UserModel.create({
    name: "harsh",
    email: "johndoe@example.com",
    password: 123456,
  });
    res.redirect('/');
});
app.get("/update", async (req, res) => {
  const updatedUser = await UserModel.findOneAndUpdate(
    { name: "harsh" }, //finding condition
    { name: "solani" }, //updating data
    { new: true }, //to return the updated document
  );
  console.log(updatedUser);
  res.send(updatedUser);
});
app.get('/users', async (req,res)=>{
    const users = await UserModel.find();
    res.send(users);
})
app.get("/delete", async (req, res) => {
  const deletedUser = await UserModel.deleteMany({ name: "vikas" });
  res.send(deletedUser);
  console.log(deletedUser);
  
});
app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
