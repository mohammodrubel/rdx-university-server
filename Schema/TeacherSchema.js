const mongoose = require('mongoose')
const TeacherSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    teacherimg:{
        type:String,
        required:true
    }
})

module.exports = TeacherSchema