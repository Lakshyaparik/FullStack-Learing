const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middlewares/isLoggedIn')
const {getAllProducts} = require('../controllers/productController');
const {addToCart,getCartProducts} = require('../controllers/userController')
const { get } = require('mongoose');

router.get('/', (req, res) => {
    res.send('user Router')
})

router.get('/shop',isLoggedIn,async(req,res)=>{
    const products = await getAllProducts()
    res.render('shop',{products})
})

router.get('/addToCart/:id',isLoggedIn,async (req,res)=>{
    addToCart(req.user.email,req.params.id)
    res.redirect('/users/shop')
})

router.get('/cart',isLoggedIn,async(req,res)=>{
   const cartProducts = await getCartProducts(req.user.email)
   res.render('cart',{cartProducts})
})
module.exports = router;