const mongoose = require('mongoose')
const express = require('express')
const EventSchema = require('../Schema/EventSchema')
const Event = mongoose.model('Event',EventSchema)
const router = express.Router()

// post method 

router.post('/',async(req,res)=>{
    const eventInfo = Event(req.body);
    try{
        const Event = await eventInfo.save()
        res.status(200).json({"result":Event})
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})

//get Method 
router.get('/',async(req,res)=>{
    try{
        const eventInfo =await Event.find({})
        res.status(200).json({"result":eventInfo})
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})

// Delete method 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteUser = await Event.findByIdAndDelete(req.params.id);
        res.status(200).json({"result":deleteUser})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})


module.exports = router