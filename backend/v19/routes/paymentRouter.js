const express = require('express');
const router = express.Router();
const {verifyPayment} = require('../controllers/paymentController')
const { isLoggedIn } = require('../middlewares/isLoggedIn');

router.post('/verifyPayment',isLoggedIn,verifyPayment)

module.exports = router;