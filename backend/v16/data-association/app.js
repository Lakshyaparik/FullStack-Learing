const express = require('express')
const app=express();
const userModel = require('./models/user')
const postModel = require('./models/post');

//data is association is a store a (id or ref) of another data in a data for make relation btw them

app.get('/',(req,res)=>{
  res.send('helo')
})

app.get("/create",async (req,res)=>{   //create a user
  const user = await userModel.create({
    name:"laskhhya",
    email:"laskhya@99gmail.com",
    posts:[]
  })
  res.send(user)
})

app.get('/create/post',async(req,res)=>{    //created post by a user
 const user = await userModel.findOne({_id:"698b10b854c76f025e28312b"})
 const post = await postModel.create({   //create a post 
    title: "mypost",
    content: "this is content abc",
    user : user._id                       //put a id of a user to made connection or relation
  })
  user.posts.push(post._id)   //push id of post in array of posts of a user
  await user.save()      //save is beacuse we have to save if we done task manually

  res.send({user,post})

})

app.listen(3000);