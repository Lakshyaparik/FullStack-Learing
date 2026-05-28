const userModel = require('../models/userModel')
const productModel = require('../models/productModel')

exports.getProducts = async(req,res)=>{
  let owner = await userModel.findOne({role : 'owner'}).populate('products')
  res.render('home',{products : owner.products})
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