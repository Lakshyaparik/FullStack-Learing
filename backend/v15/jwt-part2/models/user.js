const moongose = require('mongoose')
moongose.connect('mongodb://localhost:27017/practice')
.then(()=>{
  console.log('database connected successfully')
  
})
.catch(err=>console.log(err))

const userSchema ={
  name:String,
  email : String,
  password: String,
}

const user = moongose.model('user',userSchema)

module.exports = user