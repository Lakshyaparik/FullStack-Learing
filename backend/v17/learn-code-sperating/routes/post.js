const express = require('express')
const router = express.Router()
const isLoggedIN = require('../middlewares/isLoggedIn')
const postModel = require('../models/post')
const userModel = require('../models/user')

router.use(isLoggedIN)

//create post
router.post('/create-post',async(req,res)=>{
  let {title,description}= req.body
  let user = await userModel.findOne({email: req.user.email})
  if(!user)
    return res.status(404).json({
      message: "user not found in db",
      success: false
    })

  let post = await postModel.create({
    title,
    description,
    user: user._id
    
  })

  user.posts.push(post._id)
  await user.save()
  
  res.redirect('/user/my-posts')
})

//update post route
router.post('/update-post/:id',async(req,res)=>{
  let {title,description}= req.body
  let updatedPost = await postModel.findByIdAndUpdate(req.params.id,{
    title,
    description
  },{new:true})

  res.redirect('/my-posts')
})

//like post route
router.get('/like-post/:id',async(req,res)=>{

  let user = await userModel.findOne({email: req.user.email})
  let post = await postModel.findOne({_id: req.params.id})
  if(post.like.indexOf(user._id) === -1){
    // -1 is get when user has not liked the post because indexOf return -1 when element is not found in array
    post.like.push(user._id)
  }
  else{
    post.like.splice(post.like.indexOf(user._id),1)//splice is used to remove element from array by index
  }
  await post.save()
  res.redirect('/user/my-posts')
})

//delete post route
router.get('/delete-post/:id',async (req,res)=>{
  await postModel.findByIdAndDelete(req.params.id)
  res.redirect('/user/my-posts')
})

//user edit post route
router.get('/edit-post/:id',async (req, res) => {
  let post = await postModel.find({_id: req.params.id})
  if(!post){
    return res.status(404).json({
      message: "post not found",
      success: false
    })
  }
  res.render('edit-post',{post})
})

module.exports = router;