const mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/bagBuyApp')

const userSchema = new mongoose.Schema({
    fullname:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    password:{
      type: String,
      required: true
    },
    isAdmin:{
      type: Boolean,
      required: true
    },
    contact:{
      type: Number,
      required: true
    },
    cart:{
      type: Array,
      required: true
    },
    order:{
      type: Array,
      required: true
    }
})

module.exports = mongoose.model('user', userSchema)
