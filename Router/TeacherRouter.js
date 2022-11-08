const mongoose = require('mongoose')
const express = require('express')
const TeacherSchema = require('../Schema/TeacherSchema')
const Teacher = new mongoose.model("Teacher",TeacherSchema)
const router = express.Router()


// post method 

router.post('/',async(req,res)=>{
    const teacher = Teacher(req.body);
    try{
        const news = await teacher.save()
        res.status(200).json({"result":news})
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})

//get Method 
router.get('/',async(req,res)=>{
    try{
        const teacher =await Teacher.find({})
        res.status(200).json({"result":teacher})
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})

// Delete method 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteUser = await Teacher.findByIdAndDelete(req.params.id);
        res.status(200).json({"result":deleteUser})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})



module.exports = router