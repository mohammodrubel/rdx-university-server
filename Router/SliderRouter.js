const express = require('express')
const mongoose = require('mongoose')
const SliderSchema = require('../Schema/SliderSchema')
const Slider = new mongoose.model('Slider',SliderSchema)
const router = express.Router()

// post method 

router.post('/',async(req,res)=>{
    const sliderInfo = Slider(req.body);
    try{
        const slider = await sliderInfo.save()
        res.status(200).json({"result":slider})
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})

//get Method 
router.get('/',async(req,res)=>{
    try{
        const slider =await Slider.find({})
        res.status(200).json({"result":slider})
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})
// Delete method 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteUser = await Slider.findByIdAndDelete(req.params.id);
        res.status(200).json({"result":deleteUser})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})

module.exports = router