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
    data : Buffer,
    contentType : String
  },
  email : {
    type : String,
    required : true,
  }
})

module.exports = mongoose.model('product',productSchema)