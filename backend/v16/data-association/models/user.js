const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/learn-data-association')

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  posts:[  // it is going to store a array of all post ,a element will hold a id of post basically
    {
      type:mongoose.Schema.Types.ObjectId, //id  of object of post model or a post or a post docs
      ref: "post"
    }
  ]
})

const user = mongoose.model('user',userSchema)

module.exports = user