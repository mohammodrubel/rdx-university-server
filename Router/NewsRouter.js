const express = require('express')
const mongoose = require('mongoose')
const NewsUpdateSchema = require('../Schema/NewsSchema') 
const NewsUpdate = mongoose.model('NewsUpdate',NewsUpdateSchema)
const router = express.Router()

// post method 

router.post('/',async(req,res)=>{
    const sliderInfo = NewsUpdate(req.body);
    try{
        const news = await sliderInfo.save()
        res.status(200).json({"result":news})
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})

//get Method 
router.get('/',async(req,res)=>{
    try{
        const newsupdate =await NewsUpdate.find({})
        res.status(200).json({"result":newsupdate})
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})

// Delete method 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteNews = await NewsUpdate.findByIdAndDelete(req.params.id);
        res.status(200).json({"result":deleteNews})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})




module.exports = router