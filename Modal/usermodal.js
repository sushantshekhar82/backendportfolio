const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:String,
    email:String,
    message:String
})
const userModel=mongoose.model("user",userSchema)
module.exports={userModel}