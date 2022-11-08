const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
// router 
const SliderRouter = require('./Router/SliderRouter')
const NewsRouter = require('./Router/NewsRouter')
const EventRouter = require('./Router/EventRouter')
const TeacherRouter = require('./Router/TeacherRouter')
const AdmissionRouter = require('./Router/AdmissionRouter')
const UserRouter = require('./Router/UserRouter')
const CommentsRouter = require('./Router/CommentsRouter')



const app = express()
      app.use(cors())
      app.use(express.json())
      dotenv.config()

// port 
const port = process.env.PORT || 5000

// connection 
mongoose.connect(process.env.MONGODB_ACCESS,
    {useNewUrlParser:true},
    {useUnifiedTopology: true }
    )
    .then(()=> console.log('connection successfull'))
    .catch(err => console.log(err))

// rouetr 
app.use('/slider',SliderRouter)
app.use('/newsupdate',NewsRouter)
app.use('/event',EventRouter)
app.use('/teacher',TeacherRouter)
app.use('/admisstion',AdmissionRouter)
app.use('/user',UserRouter)
app.use('/comments',CommentsRouter)


// Error Handeler 
function ErrorHandeler (err,req,res,next){
    if(res.headersSent){
        return err
    }
    res.status(500).json({ error:err })
}

// get api 
app.get('/',async(req,res)=>{
    res.send('hello world')
})

// listen
app.listen(port,()=>{
    console.log('app lisining port number 5000')
})