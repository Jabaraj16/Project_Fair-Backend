require('dotenv').config()

const express=require('express')
const cors=require('cors')
const router=require('./Routes/Route')
require('./DB/connection')

const pfServer=express()
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)

const PORT=3000

pfServer.listen(PORT,()=>{
    console.log("Project fair started at port :"+PORT);
})

pfServer.get('/',(req,res)=>{
    res.status(200).send("Pf Server Started")
})