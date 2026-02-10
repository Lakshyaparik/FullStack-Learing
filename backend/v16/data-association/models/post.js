const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  date:{
    type: Date,
    default:Date.now()
  },
  //association
  user:{             //the post is going to link with a user who created with user ref id...
    type : mongoose.Schema.Types.ObjectId, //if of a object of user model or a user or user docs.
    ref : "user"
  }
})


const post = mongoose.model('post',postSchema)

module.exports=post;
