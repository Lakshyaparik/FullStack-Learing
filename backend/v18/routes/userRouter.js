const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middlewares/isLoggedIn')
const {getAllProducts} = require('../controllers/productController');
const {addToCart,getCartProducts,getProfile} = require('../controllers/userController')
const { removeFromCart } = require('../controllers/userController');


router.get('/', (req, res) => {
    res.send('user Router')
})

router.get('/shop',isLoggedIn,async(req,res)=>{
    const products = await getAllProducts()
    res.render('shop',{products})
})

router.get('/addToCart/:id',isLoggedIn,async (req,res)=>{
    isCarted = await addToCart(req.user.email,req.params.id)
    res.redirect('/users/shop')
})

router.get('/cart',isLoggedIn,async(req,res)=>{
   const cartProducts = await getCartProducts(req.user.email)
   let totalPrice = 0;
   cartProducts.forEach( product => {
    totalPrice= product.price + totalPrice
   });   
   res.render('cart',{cartProducts,totalPrice})
})

router.get('/profile',isLoggedIn,(req,res)=>{
    getProfile(req.user)
    res.render('profile')
})

router.get('/cart/removeProduct/:id',isLoggedIn,async(req,res)=>{
    removeFromCart(req.user.email,req.params.id)
    // res.redirect('/users/cart')
})
module.exports = router;