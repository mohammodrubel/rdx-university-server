const mongoose = require('mongoose')
const SliderSchema = mongoose.Schema({
    shortText:{
        type:String,
        required:true
    },
    headline:{
        type:String,
        required:true
    },
    sliderimg:{
        type:String,
        required:true
    }
})


module.exports = SliderSchema