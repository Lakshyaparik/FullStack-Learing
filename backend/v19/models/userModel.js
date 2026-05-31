const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  profilePic :{
    type : String,
    default : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  },
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