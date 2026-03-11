const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
      type: String,
      required: true
    },
    description:{
      type: String,
      required: true
    },
    price:{
      type: Number,
      required: true
    },
    image:{
      data : Buffer,
      contentType: String
    },
    category:{
      type: String,
      required: true
    },
    bgcolor:{
      type: String,
    },
    panelcolor:{
      type: String,
    },
    textcolor:{
      type: String,
    }
})
  
  module.exports = mongoose.model('product', productSchema);