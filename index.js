const express=require('express')
const app=express()
const user=require('./routes.js')
app.use('/as',user)
app.listen(3000,()=>{
    console.log("server running")
})


