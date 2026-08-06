const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  user_id : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  },
  products : {
    type : Array,
    required : true
  },
  amount : {
    type : Number,
    required : true
  },
  order_id : {
    type : String,
    required : true
  },
  payment_id : {
    type : String,
    required : true
  },
  payment_status : {
    type : String,
    default : 'paid'
  },
  order_status : {
    type : String,
    default : 'confirmed'
  }
})

module.exports = mongoose.model('order',orderSchema)