const express=require('express')
const mongoose=require('mongoose')
const cors=require("cors")
const StudentModel = require('./model/student')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Username:<password>@clustername.r4ncvgy.mongodb.net/product")

app.post('/register',(req,res)=>{
    StudentModel.create(req.body)
    .then(student=>res.json(student))
    .catch(err =>res.json(err))
})

app.listen(3034, ()=>{
    console.log("server is running")
})

