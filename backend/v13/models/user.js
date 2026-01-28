const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongdbpractice')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: Number
})

const user = mongoose.model('user', userSchema);

module.exports =user;