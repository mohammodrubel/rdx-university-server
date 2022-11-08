const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    email:{
        type:String
    },
    role:{
        type:String
    }
})

module.exports = UserSchema