const mongoose = require('mongoose')
const CommentsSchema = mongoose.Schema({
    NewsId:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        required:true
    }
})

module.exports = CommentsSchema