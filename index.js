const express=require("express")
const mongoose=require("mongoose")
const { userModel } = require("./Modal/usermodal")
require('dotenv').config() 
const cors = require('cors')
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",async (req,res)=>{
    try {
      const user=await userModel.find()  
      res.status(200).send(user)
    } catch (error) {
        res.status(400).send({"msg":error.message})  
    }
   
})
app.post("/",async (req,res)=>{
const payload=req.body;
console.log(payload)
 try {
    const user=new userModel(payload)
    await user.save()
    res.status(200).send({"msg":"post successful"})
 } catch (error) {
    res.status(400).send({"msg":error.message})
 }
})

app.listen(process.env.port, async ()=>{
    try {
        await mongoose.connect(process.env.url)
        console.log("port is running at 8080")
    } catch (error) {
        console.log(error)
    }
})