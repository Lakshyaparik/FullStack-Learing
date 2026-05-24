const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullname : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  role : {
    type : String,
    default : 'user'
  },
  products : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'product'
    }
  ]
})

module.exports = mongoose.model('user',userSchema)