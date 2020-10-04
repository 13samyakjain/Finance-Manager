const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const UserModel = mongoose.Model('login',UserSchema)
module.exports = UserModel