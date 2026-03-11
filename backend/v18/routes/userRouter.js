const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middlewares/isLoggedIn')
const {getAllProducts} = require('../controllers/productController');
const { get } = require('mongoose');

router.get('/', (req, res) => {
    res.send('user Router')
})

router.get('/shop',isLoggedIn,async(req,res)=>{
    const products = await getAllProducts()
    console.log(products);
    res.render('shop',{products})
})
module.exports = router;