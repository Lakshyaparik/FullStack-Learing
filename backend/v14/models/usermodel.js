const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/curdoperation")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  desc: String,
  image: String
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;