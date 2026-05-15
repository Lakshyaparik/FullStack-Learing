const userModel = require('../models/userModel')
let isCarted = false;
exports.addToCart = async(userEmail,productId)=>{
  const user = await userModel.findOne({email:userEmail})
  if(!(user.cart.indexOf(productId) === -1)){
    isCarted = true
    return isCarted
  }
  user.cart.push(productId)
  await user.save()
  return isCarted
}

exports.getCartProducts = async(userEmail)=>{
  const user = await userModel
  .findOne({email:userEmail})
  .populate('cart')

  return user.cart
}

exports.getProfile =async (user)=>{
  
}

exports.removeFromCart = async(email,productId)=>{
  const user = await userModel.findONe({email})
  
}