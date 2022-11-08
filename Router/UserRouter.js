const express = require('express')
const mongoose = require('mongoose')
const UserSchema = require('../Schema/UserSchema')
const User = mongoose.model("User",UserSchema)
const router = express.Router()

router.put('/:email',async(req,res)=>{
    try{
       const email = req.params.email ;
       const filter = {"email":email}
       const options = {upsert:true}
       const updateDoc = {$set:{email}}
       const result = await User.updateOne(filter,updateDoc,options)
       res.status(200).json({"result":result})
    }
    catch(error){
        res.status(500).json({"error":error})
    }

})

router.put('/admin/:email',async(req,res)=>{
    try{
        const email = req.params.email;
        console.log(email)
        const filter = {"email":email}
        const updateDoc = {$set:{role:"admin"}}
        const result = await User.updateOne(filter,updateDoc)
        res.status(200).json({"result":result})
    }
    catch(error){
        res.status(500).json({"error":error})
    }
})

router.get('/:email',async(req,res)=>{
    try{
        const email = req.params.email
        const query = {email:email}
        const user = await User.findOne(query)
        let isAdmin = false 
            if(user?.role === 'admin'){
                isAdmin = true
            }
    res.status(200).json({"admin":isAdmin})
    }
    catch(error){
        res.status(500).json({"error":error})
    }
})

router.get('/',async(req,res)=>{
    try{
        const user = await User.find({})
        res.status(200).json({"result":user})
    }
    catch(error){
        res.status(500).json({"error":error})
    }
})

// Delete method 
router.delete('/:id',async(req,res)=>{
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({"result":deleteUser})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})


module.exports = router