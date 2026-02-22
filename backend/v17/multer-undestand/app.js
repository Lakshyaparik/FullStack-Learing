const express = require("express");
const app = express();
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
app.use(express.static('public'));


//set storage engine for multer 
//diskStorage() method takes an object as an argument with two properties: destination and filename.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'./public/uploads/images');
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(12,(err,buff)=>{
      const fn = buff.toString('hex')+path.extname(file.originalname);//return extension
      cb(null,fn);
    })
  }    
})

//multer() method takes an object as an argument with a storage property that specifies the storage engine to use for handling file uploads.
//
const upload = multer({storage: storage});//multer() method returns a middleware function that can be used to handle file uploads in Express routes. The storage property specifies the storage engine to use for handling file uploads, which in this case is the diskStorage engine we defined earlier.

app.set("view engine", "ejs");

app.get("/",(req, res) => {
  res.send("Hello World");
});

app.get("/test",(req, res) => {
  res.render("test");
});

//upload.single() method is used to handle single file uploads. It takes the name of the file input field as an argument and returns a middleware function that processes the uploaded file and makes it available in the req.file object.
app.post("/upload-file",upload.single('image'),(req, res) => {
  console.log(req.file);
  res.redirect("/test");
});

app.listen(3000)