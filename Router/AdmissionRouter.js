const mongoose = require('mongoose');
const express = require('express');
const AdmissionSchema = require('../Schema/AdmissionSchema');
const Admission =mongoose.model("Admission",AdmissionSchema);
const router = express.Router();

// post method 

router.post('/',async(req,res)=>{
    const admisstion = Admission(req.body);
    try{
        const Event = await admisstion.save()
        res.status(200).json({"result":Event})
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})

//get Method 
router.get('/',async(req,res)=>{
    try{
        const admisstionInfo =await Admission.find({})
        res.status(200).json({"result":admisstionInfo})
    }
    catch(error){
        res.status(error).json({"error":error})
    }
})


module.exports = router



