const express=require("express")
const app=express();
const routes=require("./routes.js")

app.get("/",routes)



const PORT=process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log("Server connected to", PORT)
})