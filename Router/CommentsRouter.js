const express = require('express')
const mongoose = require('mongoose')
const CommentsSchema = require('../Schema/CommentsSchema')
const Comment = mongoose.model("Comment",CommentsSchema)
const router = express.Router()


router.post('/',async(req,res)=>{
    const commentInfo = Comment(req.body);
    try{
        const Event = await commentInfo.save()
        res.status(200).json({"result":Event})
        
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})

//get Method 
router.get('/',async(req,res)=>{
    try{
        const commentInfo =await Comment.find({})
        res.status(200).json({"result":commentInfo})
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})

// Delete method 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteComments = await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json({"result":deleteComments})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})


module.exports = router