const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
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
    contact:{
      type: Number,
      required: true
    },
    products:{
      type: [],
    },
    picture: String,
     
})

module.exports = mongoose.model('owner', ownerSchema)
