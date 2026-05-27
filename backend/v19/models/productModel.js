const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title : {
    type : String,
    required : true
  }
  ,
  price : {
    type : Number,
    required : true
  },
  image : {
    type : Buffer,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique : true
  }
})

module.exports = mongoose.model('product',productSchema)