require('dotenv').config()
const mongoose = require('mongoose');
const dblog = require('debug')("app:db")

mongoose.connect(`${process.env.DB_URL}`)
.then(()=>{
    dblog("db connected")
})
.catch((err)=>{
    dblog(err)
})

module.exports = mongoose.connection;