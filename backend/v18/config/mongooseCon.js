require('dotenv').config()
const mongoose = require('mongoose');
const dblog = require('debug')("app:db")
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.DB_URL)
        dblog('db connected successfully')
        return conn
    }
    catch(err){
        dblog(err)
        throw err
    }
}


module.exports = connectDB;