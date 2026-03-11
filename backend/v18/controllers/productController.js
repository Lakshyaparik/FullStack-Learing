const productModel = require('../models/productModel')

exports.getAllProducts = async (req,res)=>{
  try{
    const products = await productModel.find()
    return products
  }
  catch(err){
    res.json({
      message:err.message
    })
  }
}