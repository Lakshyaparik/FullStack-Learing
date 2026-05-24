const express = require('express');
const router = express.Router();
const {getProducts,createProduct} = require('../controllers/userController');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const upload = require('../config/multerConfig')

router.get('/',(req,res)=>{
  res.send('User Route')
})

router.get('/home',isLoggedIn,(req,res)=>{
  getProducts(req.user.email)
  res.render('home')
})

router.get('/createProduct',isLoggedIn,(req,res)=>{
  res.render('createProduct')
})

router.post('/createProduct',isLoggedIn,upload.single('productImage'),(req,res)=>{
  console.log('body : ',req.body)
  console.log('file : ',req.file)
})

module.exports = router;