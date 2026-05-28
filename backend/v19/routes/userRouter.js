const express = require('express');
const router = express.Router();
const {getProducts,createProduct} = require('../controllers/userController');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const upload = require('../config/multerConfig')

router.get('/',(req,res)=>{
  res.send('User Route')
})

router.get('/home',isLoggedIn,getProducts,(req,res)=>{
})

router.get('/createProduct',isLoggedIn,(req,res)=>{
  res.render('createProduct')
})

router.post('/createProduct',isLoggedIn,upload.single('productImage'),createProduct,(req,res)=>{
})

module.exports = router;