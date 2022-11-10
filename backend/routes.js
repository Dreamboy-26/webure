
const express=require("express")
const routes=express.Router()
const mongoose=require("mongoose")
const User=require("./userSchema.js")
const passport=require("passport")
const {initializingPassport,isAuthenticated}=require("./passportConfig.js")

initializingPassport(passport)
routes.get("/",(req,res)=>{
    res.send("Hi from routes")
})

routes.post("/signup",async(req,res)=>{
    const user=await User.findOne({username:req.body.username}) 

    if(user)
    {
        return res.status(400).send("User exist")
    }
    else{
        const newuser=await User.create(req.body)
        return res.status(201).send(newuser)
    }
})

routes.post("/login",passport.authenticate("local",{failureMessage:"something is wrong"}),(req,res)=>{
    res.send(req.user)
})

routes.get("/dashboard",isAuthenticated,(req,res)=>{
    res.send(req.user)
})

routes.get("logout",(req,res)=>{
    req.logout();
    res.redirect("/login")
})

module.exports=routes