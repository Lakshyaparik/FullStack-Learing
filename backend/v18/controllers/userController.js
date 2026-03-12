const userModel = require('../models/userModel')

exports.addToCart = async(userEmail,productId)=>{
  const user = await userModel.findOne({email:userEmail})
  await user.cart.push(productId)
  await user.save()
  return 
}

exports.getCartProducts = async(userEmail)=>{
  const user = await userModel
  .findOne({email:userEmail})
  .populate('cart')

  return user.cart
}