const userModel = require('../models/userModel')
const productModel = require('../models/productModel')
const razorpay = require('../config/razorpay')

exports.getProducts = async(req,res)=>{
  let owner = await userModel.findOne({role : 'owner'}).populate('products')
  let user = await userModel.findOne({email : req.user.email})
  res.render('home',{products : owner.products , user})
}
exports.createProductPage = async(req,res)=>{
  let user = await userModel.findOne({email : req.user.email})
  res.render('createProduct',{user})
}
exports.createProduct = async(req,res)=>{
  let {title,price} = req.body;
  let createdProduct = await productModel.create({
    title,
    price,
    image :{
      data : req.file.buffer,
      contentType : req.file.mimetype
    },
    email : req.user.email
  })
  await userModel.findOneAndUpdate({email : req.user.email},{$push : {products : createdProduct._id}})
  res.redirect('/user/home')
}
exports.getCart = async(req,res)=>{
  const user = await userModel.findOne({email : req.user.email}).populate('products')
  const products = user.products;
  let totalPrice = 0;
  products.forEach(product => {
    totalPrice += product.price;
  })
  res.render('cart',{products,user,totalPrice})
}
exports.getProfile = async(req,res)=>{
  const user = await userModel.findOne({email : req.user.email})
  res.render('profile',{user})
}
exports.addToCart = async(req,res)=>{
  const productId = req.params.productId;
  const user = await userModel.findOne({email : req.user.email})
  if(user.products.includes(productId)){
    return res.redirect('/user/home')
  }
  await userModel.findOneAndUpdate({email : req.user.email},{$push : {products : productId}})
  res.redirect('/user/home')
}
exports.deleteFromCart = async(req,res)=>{
  const productId = req.params.productId;
  const user = await userModel.findOneAndUpdate({email : req.user.email},{$pull : {products : productId}})
  res.redirect('/user/cart')
}
exports.createOrder = async(req,res)=>{
  try{
  let user = await userModel.findOne({email : req.user.email}).populate('products')
  let amount = 0;
  user.products.forEach(product => {
    amount += product.price;
  })
  const options = {
    amount : amount * 100,  // Amount in paisa
    currency : "INR",
    receipt : `order_receipt_${Date.now()}`,
  }
  const order = await razorpay.orders.create(options)
  console.log(order)
  res.json(order)
}catch(err){
  console.log(err)
  res.status(500).json({error : 'Something went wrong'})
}
}