const { log } = require('console');
const crypto = require('crypto');
const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel');

exports.verifyPayment = async (req,res)=>{
  try{
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;

    const generated_signature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest('hex');


    if(generated_signature === razorpay_signature){
      const user = await userModel.findOne({email : req.user.email}).populate('products');
      let total = 0;
      user.products.forEach( product => {
        total += product.price
      });
      const order = await orderModel.create({
        user_id : user._id,
        products : user.products,
        amount : total,
        order_id : razorpay_order_id,
        payment_id : razorpay_payment_id,
      })

      user.products = [];
      await user.save();

    return res.json({success:true,message:'Payment verified successfully'})
    }

    return res.json({success:false,message:'Payment verified successfully'})

  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Something went wrong'})
  }

}