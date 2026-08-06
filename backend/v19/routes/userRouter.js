const express = require('express');
const router = express.Router();
const {getProducts,getCart,createProductPage,createProduct,getProfile,addToCart,deleteFromCart,createOrder} = require('../controllers/userController');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const upload = require('../config/multerConfig')

router.get('/',(req,res)=>{
  res.send('User Route')
})

router.get('/home',isLoggedIn,getProducts,(req,res)=>{
})

router.get('/cart',isLoggedIn,getCart,(req,res)=>{
})
router.get('/profile',isLoggedIn,getProfile,(req,res)=>{
})

router.get('/createProduct',isLoggedIn,createProductPage,(req,res)=>{
})

router.post('/createProduct',isLoggedIn,upload.single('productImage'),createProduct,(req,res)=>{
})

router.get('/logout',(req,res)=>{
  res.cookie('token','',{httpOnly:true})
  res.redirect('/auth')
})

router.post('/cart/add/:productId',isLoggedIn,addToCart,(req,res)=>{
})

router.post('/cart/delete/:productId',isLoggedIn,deleteFromCart,(req,res)=>{
})
router.get('/createOrder',isLoggedIn,createOrder,(req,res)=>{
})

module.exports = router;