const express=require("express")
const routes=express.Router()
const mongoose=require("mongoose")



routes.get("/",(req,res)=>{
    res.send("Hi from routes")
})

module.exports=routes