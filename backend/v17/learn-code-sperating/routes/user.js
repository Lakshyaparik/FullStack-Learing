const express = require('express')
const router = express.Router()
const isLoggedIN = require('../middlewares/isLoggedIn')
const userModel = require('../models/user')
const upload = require('../config/multerConfig')

router.use(isLoggedIN)

router.get('/profile',async(req,res)=>{
  
  const user = await userModel.findOne({email: req.user.email})  //find user in db via decoded info
  if(!user)
    return res.status(404).json({
  message: "user not found in db",
  success: false
});

res.render('profile',{user})  //if user is existed show he/her profile 
})
//user posts showing code
router.get('/my-posts', async(req, res) => {
  let user = await userModel.findOne({email: req.user.email}).populate('posts')
  if(!user){
    return res.status(404).json({
      message: "user not found",
      success: false
    })
  }
  res.render('my-posts',{user})

})
//get profile picture route
router.post('/uploadPic',upload.single('image'),async(req,res)=>{
  const user =await userModel.findOneAndUpdate({email: req.user.email},{new:true})
  user.profilePic = req.file.filename
  await user.save()
  res.redirect('/profile')
})
//render upload profile picture page
router.get('/upload-profilePic',(req,res)=>{
  res.render('upload-profilePic')
})

module.exports = router;